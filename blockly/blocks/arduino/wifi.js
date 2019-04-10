/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks to use the Wifi of the ESP32
 *     http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.wifi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.wifi.HUE = 250;

Blockly.Blocks['wifi_connect'] = {
  /**
   * Block for connecting to wifi with an ESP32
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.wifi.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_WIFI_WIFI)
    this.appendValueInput('SSID')
        .appendField(Blockly.Msg.ARD_WIFI_SSID)
        .setCheck(Blockly.Types.TEXT.output);
    this.appendValueInput('PASSWORD')
        .appendField(Blockly.Msg.ARD_WIFI_PASSWORD)
        .setCheck(Blockly.Types.TEXT.output);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_WIFI_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};