/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the hall sonsor of the ESP32.
 *     https://esp32.com/viewtopic.php?t=4963
 */
'use strict';

goog.provide('Blockly.Blocks.hall_sensor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.hall_sensor.HUE = 120;

Blockly.Blocks['hall_read'] = {
  /**
   * Block to read the hall sensor of the ESP32.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://esp32.com/viewtopic.php?t=4963');
    this.setColour(Blockly.Blocks.hall_sensor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_HALL_TEXT);
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_HALL_TIP);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
  }
};
