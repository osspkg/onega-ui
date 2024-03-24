export * from './menuv.directive';
export * from './menuv.component';
export * from './menuv.module';

/*
@name Vertical Menu
@group Menu
@prop ong-menuv := Base tag
@prop ong-menuv-body := Template directive for set header content
@prop ong-menuv-header := Template directive for set body content
@prop ong-menuv-footer := Template directive for set footer content
@prop STYLES CHANGING: := style="--ong-menuv-< sufix >: < value >;..."
@prop --ong-menuv-height := menu height (default: 100vh)
@prop --ong-menuv-header-height := header height (default: 10vh)
@prop --ong-menuv-footer-height := footer height (default: 10vh)
@prop --ong-menuv-width := menu width (default: 15rem)
@prop --ong-menuv-bg-color := menu background
@prop --ong-menuv-line-color := right line color
@html
  <ong-menuv>
    <ng-template ong-menuv-header>
      <h1>Header</h1>
    </ng-template>
    <ng-template ong-menuv-body>
      <h3>Body1</h3>
    </ng-template>
    <ng-template ong-menuv-body>
      <h3>Body2</h3>
    </ng-template>
    <ng-template ong-menuv-footer>
      <h1>Footer</h1>
    </ng-template>
  </ong-menuv>
 */
