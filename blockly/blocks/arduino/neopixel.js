/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the NeoPixel library.
 *     The Arduino NeoPixel functions can be found in
 *     https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels
 *
 */
'use strict';

goog.provide('Blockly.Blocks.neopixel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.neopixel.HUE = 120;

Blockly.Blocks['neopixel_settings'] = {
  /**
   * Block for setting up a neopixel strip.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels');
    this.setColour(Blockly.Blocks.neopixel.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_NEOPIXEL_0) // Setup led strip
        .appendField(
            new Blockly.FieldInstance(
                'WS2812',
                Blockly.Msg.ARD_NEOPIXEL_1,  // myLedStrip
                true, true, false
            ),
        'WS2812_NAME')
        .appendField(Blockly.Msg.ARD_NEOPIXEL_2); // :
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_NEOPIXEL_3) // Data pin
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'NEOPIXEL_PIN');
    this.appendValueInput('NEOPIXEL_COUNT')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_NEOPIXEL_4) // Number of leds
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ARD_NEOPIXEL_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'NEOPIXEL_PIN', 'digitalPins');
  }
};



Blockly.Blocks['neopixel_set_led'] = {
    /**
     * Block for setting up a neopixel strip.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels');
      this.setColour(Blockly.Blocks.neopixel.HUE);
      this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_NEOPIXEL_5) // Set RGB LED
        .appendField(
            new Blockly.FieldInstance(
                'WS2812',
                Blockly.Msg.ARD_NEOPIXEL_1, // myLedStrip
                false, true, false
            ),
        'WS2812_NAME')
      this.appendValueInput('NEOPIXEL_LED')
          .appendField(Blockly.Msg.ARD_NEOPIXEL_6) // LED:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.appendValueInput('NEOPIXEL_RED')
          .appendField(Blockly.Msg.ARD_NEOPIXEL_7) // Red:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.appendValueInput('NEOPIXEL_GREEN')
          .appendField(Blockly.Msg.ARD_NEOPIXEL_8) // Green:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.appendValueInput('NEOPIXEL_BLUE')
          .appendField(Blockly.Msg.ARD_NEOPIXEL_9) // Blue:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.ARD_NEOPIXEL_TIP);
    }
};
