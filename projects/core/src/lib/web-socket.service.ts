import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of, ReplaySubject, Subject, Subscription } from 'rxjs';
import { delay, distinct, filter, finalize, map, take, takeUntil, takeWhile } from 'rxjs/operators';
import { initialize, uniqueString } from './utils';

export const WS_URI = new InjectionToken<string>('WS_URI');

export class WebSocketMessage {
  e!: number;
  d!: unknown;
  err?: string;
  u?: string;
}

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {

  private socket?: WebSocket;
  protected response$ = new Subject<WebSocketMessage>();
  protected request$ = new ReplaySubject<WebSocketMessage>(100, 5000);
  protected state$ = new Subject<number>();
  protected sub$?: Subscription;

  constructor(
    @Inject(WS_URI) private readonly uri: string,
  ) {
    this.connect();
  }

  connect(): void {
    if (this.socket) {
      return;
    }
    this.socket = new WebSocket(this.uri);
    this.socket.onopen = () => {
      this.state$.next(this.socket?.readyState || -1);
      this.sub$ = this.request$.pipe(
        map((m: WebSocketMessage) => JSON.stringify(m)),
        distinct(m => m),
        takeWhile(() => this.socket?.readyState === WebSocket.OPEN),
      ).subscribe(value => {
        this.socket?.send(value);
      });
      console.info('[WebSocket] connection opened');
    };
    this.socket.onclose = (event) => {
      this.state$.next(this.socket?.readyState || -1);
      this.sub$?.unsubscribe();
      console.info(`[WebSocket] connection closed: [${event.code}] ${event.reason}`);
    };
    this.socket.onmessage = (event) => {
      this.response$.next(JSON.parse(event.data) as WebSocketMessage);
    };
  }

  sendMessage(e: number, d?: unknown): Observable<WebSocketMessage> {
    const u = uniqueString(8);
    this.request$.next(<WebSocketMessage>{ e, d: d ? d : null, u });
    const sub$ = of(0).pipe(delay(5000), take(1));
    sub$.subscribe();
    return this.response$.pipe(
      filter((m) => m.e === e && m.u === u),
      take(1),
      takeUntil(sub$),
    );
  }

  subs(subId: number, unsubId: number, eventIds: number[]): Observable<WebSocketMessage> {
    return this.response$.pipe(
      initialize(() => {
        this.sendMessage(subId);
      }),
      finalize(() => {
        this.sendMessage(unsubId);
      }),
      filter((m) => eventIds.indexOf(m.e) !== -1),
    );
  }

  events(eventIds: number[]): Observable<WebSocketMessage> {
    return this.response$.pipe(
      filter((m) => eventIds.indexOf(m.e) !== -1),
    );
  }

  state(): Observable<number> {
    return this.state$;
  }

  close(): void {
    this.socket?.close(1000, 'Bay!');
    this.socket = undefined;
  }
}
