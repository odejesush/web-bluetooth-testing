import {html, render} from 'https://unpkg.com/lit-html?module';

import {DeviceInfo} from './src/views/device_info.js';
import {NotificationControls} from `./src/views/notification_controls.js`;

const entries = [
  {
    title: "Toggle Device Info",
    templateFn: () => render(DeviceInfo)
  }, {
    title: "Toggle Notification Controls",
    templateFn: () => render(NotificationControls)
  }
];

const entryTemplate = (entry) => html`
    <button onclick="${entry.templateFn}">
      ${entry.title}
    </button>`;

const entriesTemplate = function() {
  let resultTemplate;
  for (const entry of entries)
    resultTemplate.push(entryTemplate(entry));
  return resultTemplate;
}

const containerTemplate = html`<div id="menu">${entriesTemplate}</div>`;

export {containerTemplate as Menu};