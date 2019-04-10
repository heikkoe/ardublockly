/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the ds18b20 library blocks.
 *     The Arduino ds18b20 library docs: https://playground.arduino.cc/Learning/OneWire-DE
 */
'use strict';

goog.provide('Blockly.Arduino.ds18b20');

goog.require('Blockly.Arduino');


/**
 * Code generator for the ds18b20 configuration.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['ds18b20_config'] = function(block) {
  var ds18b20Name = block.getFieldValue('DS18B20_NAME');
  var pin = block.getFieldValue('DS18B20_PIN');

  Blockly.Arduino.addInclude('ds18b20', '#include <OneWire.h>\n#include <DallasTemperature.h>');
  Blockly.Arduino.addDeclaration(ds18b20Name, 'OneWire ' + ds18b20Name + '_oneWire(' + pin + ');\nDallasTemperature ' + ds18b20Name + '(&' + ds18b20Name + '_oneWire);');
  Blockly.Arduino.addSetup(ds18b20Name, ds18b20Name + '.begin();', true);

  return '';
};

/**
 * Code generator for the ds18b20 measurement.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Code to let the sensores create a measurement.
 */
Blockly.Arduino['ds18b20_measure'] = function(block) {
  var ds18b20Name = block.getFieldValue('DS18B20_NAME');

  return ds18b20Name + '.requestTemperatures();\n';
};

/**
 * Code generator for the ds18b20 get temperature.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Code to let the sensores create a measurement.
 */
Blockly.Arduino['ds18b20_get_temp'] = function(block) {
  var ds18b20Name = block.getFieldValue('DS18B20_NAME');

  let code = ds18b20Name + '.getTempCByIndex(0)';

  return [code, Blockly.Arduino.ORDER_ATOMIC]
};