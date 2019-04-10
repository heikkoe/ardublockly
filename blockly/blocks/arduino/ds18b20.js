/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino DS18B20 library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     https://playground.arduino.cc/Learning/OneWire-DE
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.ds18b20');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ds18b20.HUE = 30;

Blockly.Blocks['ds18b20_config'] = {
  /**
   * Block for the ds18b20 generator configuration including creating
   * an object instance. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('https://playground.arduino.cc/Learning/OneWire-DE');
    this.setColour(Blockly.Blocks.ds18b20.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DS18B20_SETUP) // Setup temperatur sensor
        .appendField(
            new Blockly.FieldInstance('ds18b20',
                                      Blockly.Msg.ARD_DS18B20_DEFAULT_NAME, // MyTempSensor
                                      true, true, false),
            'DS18B20_NAME')
        .appendField(Blockly.Msg.ARD_DS18B20_SETUP2); // :
    this.appendDummyInput('PIN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_PIN) // pin
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'DS18B20_PIN');
    this.setTooltip(Blockly.Msg.ARD_DS18B20_SETUP_TIP); // Setup DS18B20 temperatur sensor
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'DS18B20_PIN', 'digitalPins');
  }
};

Blockly.Blocks['ds18b20_measure'] = {
  /**
   * Block to tell the sensor to messure the temperature
   * Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('https://playground.arduino.cc/Learning/OneWire-DE');
    this.setColour(Blockly.Blocks.ds18b20.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DS18B20_MEASURE_MEASURE) // Measure
        .appendField(
            new Blockly.FieldInstance('ds18b20',
                                      Blockly.Msg.ARD_DS18B20_DEFAULT_NAME, // MyTempSensor
                                      false, true, false),
            'DS18B20_NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_DS18B20_MEASURE_TIP); // Tell the sensor to measure the temperature
  }
};

Blockly.Blocks['ds18b20_get_temp'] = {
  /**
   * Block to get the temperature value in °C of the last measurement.
   * Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('https://playground.arduino.cc/Learning/OneWire-DE');
    this.setColour(Blockly.Blocks.ds18b20.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DS18B20_GET_TEMP_GET) // Get temperature of
        .appendField(
            new Blockly.FieldInstance('ds18b20',
                                      Blockly.Msg.ARD_DS18B20_DEFAULT_NAME, // MyTempSensor
                                      false, true, false),
            'DS18B20_NAME');
    this.setOutput(true, Blockly.Types.NUMBER.output); 
    this.setTooltip(Blockly.Msg.ARD_DS18B20_GET_TEMP_TIP); // Get the temperature value in °C of the last measurement
  }
};
