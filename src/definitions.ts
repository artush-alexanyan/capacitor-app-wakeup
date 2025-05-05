export interface AutoWakeUpPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
