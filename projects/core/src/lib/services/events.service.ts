import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  protected replay$ = new ReplaySubject<Event>(100);

  push(v: Event) {
    this.replay$.next(v);
  }

  pull(id: number): Observable<Event> {
    return this.replay$.pipe(
      filter((v: Event) => v.id === id),
    );
  }
}

export interface Event {
  id: number;
  value: unknown;
}
