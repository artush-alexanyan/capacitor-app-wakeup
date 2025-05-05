package com.reminder.plugin.com;

import android.content.Intent;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AutoWakeUp")
public class AutoWakeUpPlugin extends Plugin {

  /** Start the voice‑wake service */
  @PluginMethod
  public void startListening(PluginCall call) {
    Intent serviceIntent = new Intent(getContext(), VoiceWakeupService.class);
    getContext().startService(serviceIntent);
    call.resolve();
  }

  /** Stop the voice‑wake service */
  @PluginMethod
  public void stopListening(PluginCall call) {
    Intent serviceIntent = new Intent(getContext(), VoiceWakeupService.class);
    getContext().stopService(serviceIntent);
    call.resolve();
  }
}
