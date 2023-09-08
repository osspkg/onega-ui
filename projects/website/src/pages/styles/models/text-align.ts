import { Api } from './_api';

export class TextAlignBook implements Api {
  link = 'Text Align';
  attributes = {
    '.ta-l .ta-c .ta-r' : 'base class',
  };

  example = `
<div class="ta-l box">.ta-l</div>
<div class="ta-c box">.ta-c</div>
<div class="ta-r box">.ta-r</div>
  `;

  demo = `
<div class="ta-l box">.ta-l</div>
<div class="ta-c box">.ta-c</div>
<div class="ta-r box">.ta-r</div>
  `;
}
