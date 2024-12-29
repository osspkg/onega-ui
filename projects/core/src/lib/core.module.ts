import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { ActiveRouteDirective } from './directives/active-route.directive';
import { HrefDirective } from './directives/href.directive';
import { DialogService } from './services/dialog.service';
import { EventsService } from './services/events.service';
import { LocalStorageService } from './services/local-storage.service';
import { API_HEADERS, API_HOST, Headers, RequestService } from './services/request.service';
import { SessionStorageService } from './services/session-storage.service';
import { WebSocketService, WS_URI } from './services/web-socket.service';

export class Config {
  apiHost?:string;
  apiHeaders?: Headers;
  wsUri?:string;
}

@NgModule({
  declarations: [
    ActiveRouteDirective,
    HrefDirective,
  ],
  exports:[
    ActiveRouteDirective,
    HrefDirective,
  ],
})
export class CoreModule {
  static forRoot(config?:Config): ModuleWithProviders<CoreModule> {

    const providers: Provider[] = [
      { provide: 'WINDOW', useValue: window },
      { provide: EventsService },
      { provide: LocalStorageService },
      { provide: SessionStorageService },
      { provide: DialogService },
    ];

    if (config) {
      const { apiHost, apiHeaders, wsUri } = config;
      if (apiHost && apiHost.length > 0) {
        providers.push(
          { provide: API_HOST, useValue: apiHost },
          { provide: API_HEADERS, useValue: apiHeaders },
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
