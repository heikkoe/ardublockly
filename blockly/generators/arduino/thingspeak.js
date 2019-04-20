/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for ThingSpeak
 *     The Arduino NeoPixel functions can be found in
 *     https://github.com/mathworks/thingspeak-arduino
 *
 */
'use strict';

goog.provide('Blockly.Arduino.thingSpeak');

goog.require('Blockly.Arduino');


/**
 * Code generator for sending a value to a field of ThingSpeak
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['thing_speak_send_field'] = function(block) {
  let key = Blockly.Arduino.valueToCode(block, 'THINGSPEAK_KEY', Blockly.Arduino.ORDER_ATOMIC) || "";
  let channel = Blockly.Arduino.valueToCode(block, 'THINGSPEAK_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || 0;
  let field = Blockly.Arduino.valueToCode(block, 'THINGSPEAK_FIELD', Blockly.Arduino.ORDER_ATOMIC) || 0;
  let value = Blockly.Arduino.valueToCode(block, 'THINGSPEAK_VALUE', Blockly.Arduino.ORDER_ATOMIC) || 0;

  Blockly.Arduino.addInclude('thingSpeak', '#include <ThingSpeak.h>');
  Blockly.Arduino.addDeclaration('WiFiClient', 'WiFiClient wifiClient;');
  Blockly.Arduino.addSetup('thingSpeak', 'ThingSpeak.begin(wifiClient);', false);

  var code = 'ThingSpeak.writeField(' + channel + ', ' + field  + ', ' + value + ', ' + key + ');\n';

  return code;
};