import {render} from 'https://unpkg.com/lit-html?module';

import {ConnectionController} from './src/views/connection_controller.js';
import {Menu} from './src/views/menu.js'

const appTemplate = html`
    ${Menu}
    ${ConnectionController}`;

render(appTemplate, document.getElementById('app'));