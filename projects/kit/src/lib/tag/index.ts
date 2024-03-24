export * from './tag.component';
export * from './tag.module';

/*
@name Tag
@group Tag
@prop ong-tags := Base tag
@prop [(values)] := Data binding with values as string[].
@prop [disable] := Disable data changing.
@other
  demoValues = ['example1', 'example2'];
@html
  <ong-tags [(values)]="demoValues"></ong-tags>
  <ong-tags [(values)]="demoValues" [disable]="true"></ong-tags>
 */
