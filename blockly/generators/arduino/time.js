/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.time');

goog.require('Blockly.Arduino');


/**
 * Code generator for the delay Arduino block.
 * Arduino code: loop { delay(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['time_delay'] = function(block) {
  var delayTime = Blockly.Arduino.valueToCode(
      block, 'DELAY_TIME_MILI', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delay(' + delayTime + ');\n';
  return code;
};

/**
 * Code generator for the delayMicroseconds block.
 * Arduino code: loop { delayMicroseconds(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['time_delaymicros'] = function(block) {
  var delayTimeMs = Blockly.Arduino.valueToCode(
      block, 'DELAY_TIME_MICRO', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delayMicroseconds(' + delayTimeMs + ');\n';
  return code;
};

/**
 * Code generator for the elapsed time in milliseconds block.
 * Arduino code: loop { millis() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
 Blockly.Arduino['time_millis'] = function(block) {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for the elapsed time in microseconds block.
 * Arduino code: loop { micros() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
 Blockly.Arduino['time_micros'] = function(block) {
  var code = 'micros()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for the wait forever (end of program) block
 * Arduino code: loop { while(true); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['infinite_loop'] = function(block) {
  return 'while(true);\n';
};

/**
 * Code generator for setting the system time using time servers. Uses Wifi of the ESP32.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['time_set_via_wifi'] = function(block) {
  Blockly.Arduino.addInclude('time', '#include <time.h>');

  return 'configTime(3600, 3600, "pool.ntp.org");\n';
};

/**
 * Code generator for getting the current year, month, day of month, hour, minute or second.
 * Can be set by the "Set time via wifi" block.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['time_get_date_time'] = function(block) {
  let value = block.getFieldValue('VALUE');

  let code = 'getTime()->tm_';
  switch (value) {
    case 'YEAR':
      code = '(' + code + 'year + 1900)'
      break;
    case 'MONTH':
      code = '(' + code + 'mon + 1)'
      break;
    case 'DAY_OF_MONTH':
      code =  code + 'mday'
      break;
    case 'HOUR':
      code =  code + 'hour'
      break;
    case 'MINUTE':
      code =  code + 'min'
      break;
    case 'SECOND':
      code =  code + 'sec'
      break;
  
    default:
      break;
  }

  Blockly.Arduino.addInclude('time', '#include <time.h>');

  Blockly.Arduino.userFunctions_['getTime'] =
      'struct tm* getTime(){\n'
    + '  time_t now = time(nullptr);\n'
    + '  return localtime(&now);\n'
    + '}\n';

  

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
