import { registerPlugin } from '@capacitor/core';
const AutoWakeUp = registerPlugin('AutoWakeUp', {
    web: () => import('./web').then((m) => new m.AutoWakeUpWeb()),
});
export * from './definitions';
export { AutoWakeUp };
//# sourceMappingURL=index.js.map