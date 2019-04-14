/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the IRremote library blocks.
 *     https://esp32.com/viewtopic.php?t=4963
 */
'use strict';

goog.provide('Blockly.Arduino.hall_sensor');

goog.require('Blockly.Arduino');

/**
 * Code generator to read the hall sensor of the ESP32.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['hall_read'] = function(block) {

  var code = 'hallRead()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
