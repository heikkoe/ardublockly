/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for IFTTT Webhooks.
 *     https://github.com/romkey/IFTTTWebHook
 *
 */
'use strict';

goog.provide('Blockly.Arduino.ifttt');

goog.require('Blockly.Arduino');


/**
 * Code generator to setup a ifttt webhook.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['ifttt_webhooks_settings'] = function(block) {
  let webhook_name = block.getFieldValue('WEBHOOK_NAME');
  let key = Blockly.Arduino.valueToCode(block, 'API_KEY', Blockly.Arduino.ORDER_ATOMIC) || "";
  let name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || "";

  Blockly.Arduino.addInclude('ifttt_webhook', '#include "IFTTTWebhook.h"');
  Blockly.Arduino.addDeclaration(
    webhook_name,
      'IFTTTWebhook* ' + webhook_name + ';'
  );

  var code = webhook_name + ' = new IFTTTWebhook(' + key + ', ' + name + ');';

  return code;
};

/**
 * Code generator for triggering a ifttt webhook
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['ifttt_webhooks_trigger'] = function(block) {
  var webhook_name = block.getFieldValue('WEBHOOK_NAME');

  var code = webhook_name + '->trigger();\n';
  return code;
};