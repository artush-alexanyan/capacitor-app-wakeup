import { registerPlugin } from '@capacitor/core';

import type { AutoWakeUpPlugin } from './definitions';

const AutoWakeUp = registerPlugin<AutoWakeUpPlugin>('AutoWakeUp', {
  web: () => import('./web').then((m) => new m.AutoWakeUpWeb()),
});

export * from './definitions';
export { AutoWakeUp };
