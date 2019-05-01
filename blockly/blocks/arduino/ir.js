/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the IR library.
 *     The Arduino IR functions can be found in
 *     https://www.arduinolibraries.info/libraries/i-rremote 
 */
'use strict';

goog.provide('Blockly.Blocks.ir');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ir.HUE = 300;

Blockly.Blocks['ir_check'] = {
  /**
   * Block to check if a IR signal got received at pin.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduinolibraries.info/libraries/i-rremote');
    this.setColour(Blockly.Blocks.ir.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_IR_CHECK_PIN)
        .appendField(new Blockly.FieldDropdown(
          Blockly.Arduino.Boards.selected.digitalPins), 'IR_PIN')
        .appendField(Blockly.Msg.ARD_IR_CHECK);
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_IR_CHECK_TIP);
  },
  /** @return {bool} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'IR_PIN', 'digitalPins');
  }
};

Blockly.Blocks['ir_result'] = {
  /**
   * Block to read a IR signal from a pin (X).
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduinolibraries.info/libraries/i-rremote');
    this.setColour(Blockly.Blocks.ir.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_IR_RESULT)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'IR_PIN');
    this.setOutput(true, Blockly.Types.LARGE_NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_IR_RESULT_TIP);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.LARGE_NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'IR_PIN', 'digitalPins');
  }
};
