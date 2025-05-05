import { WebPlugin } from '@capacitor/core';
import type { AutoWakeUpPlugin } from './definitions';
export declare class AutoWakeUpWeb extends WebPlugin implements AutoWakeUpPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
