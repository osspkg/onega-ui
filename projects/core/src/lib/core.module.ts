import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { EventsService } from './events.service';
import { LocalStorageService } from './local-storage.service';
import { API_PREFIX, RequestService } from './request.service';
import { SessionStorageService } from './session-storage.service';
import { WebSocketService, WS_URI } from './web-socket.service';

export class Config {
  apiUri?:string;
  wsUri?:string;
}

@NgModule({
  imports: [
    HttpClientModule,
  ],
})
export class CoreModule {
  static forRoot(config?:Config): ModuleWithProviders<CoreModule> {

    const providers: Provider[] = [
      { provide: 'WINDOW', useValue: window },
      { provide: EventsService },
      { provide: LocalStorageService },
      { provide: SessionStorageService },
    ];

    if (config) {
      const { apiUri, wsUri } = config;
      if (apiUri && apiUri.length > 0) {
        providers.push(
          { provide: API_PREFIX, useValue: apiUri },
          { provide: RequestService },
        );
      }
      if (wsUri && wsUri.length > 0) {
        providers.push(
          { provide: WS_URI, useValue: wsUri },
          { provide: WebSocketService },
        );
      }
    }

    return { ngModule: CoreModule, providers: providers };
  }
}
