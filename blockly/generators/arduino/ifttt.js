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

  let code = webhook_name + ' = new IFTTTWebhook(' + key + ', ' + name + ');';

  return code;
};

/**
 * Code generator for triggering a ifttt webhook
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['ifttt_webhooks_trigger'] = function(block) {
  let webhook_name = block.getFieldValue('WEBHOOK_NAME');

  let code = webhook_name + '->trigger();\n';
  return code;
};

/**
 * Code generator for triggering a ifttt webhook with tree messages
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['ifttt_webhooks_trigger_message'] = function(block) {
  let webhook_name = block.getFieldValue('WEBHOOK_NAME');
  let msg1 = Blockly.Arduino.valueToCode(block, 'MESSAGE_1', Blockly.Arduino.ORDER_ATOMIC) || '""';
  let msg2 = Blockly.Arduino.valueToCode(block, 'MESSAGE_2', Blockly.Arduino.ORDER_ATOMIC) || '""';
  let msg3 = Blockly.Arduino.valueToCode(block, 'MESSAGE_3', Blockly.Arduino.ORDER_ATOMIC) || '""';

  console.log({msg1});
  
  msg1 = msg1 == '""' ? '""' : 'String(' + msg1 + ').c_str()';
  msg2 = msg2 == '""' ? '""' : 'String(' + msg2 + ').c_str()';
  msg3 = msg3 == '""' ? '""' : 'String(' + msg3 + ').c_str()';

  let code = webhook_name + '->trigger('
      + msg1 + ', '
      + msg2 + ', '
      + msg3 + ');\n';
  return code;
};