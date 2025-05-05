import { WebPlugin } from '@capacitor/core';

import type { AutoWakeUpPlugin } from './definitions';

export class AutoWakeUpWeb extends WebPlugin implements AutoWakeUpPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
