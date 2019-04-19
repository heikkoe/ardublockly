/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for ThingSpeak
 *     The Arduino NeoPixel functions can be found in
 *     https://github.com/mathworks/thingspeak-arduino
 *
 */
'use strict';

goog.provide('Blockly.Blocks.thingSpeak');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.thingSpeak.HUE = 40;

Blockly.Blocks['thing_speak_send_field'] = {
    /**
     * Block for sending a value to a field of ThingSpeak
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://github.com/mathworks/thingspeak-arduino');
      this.setColour(Blockly.Blocks.thingSpeak.HUE);
      this.appendDummyInput()
					.appendField(Blockly.Msg.ARD_THING_SPEAK_SEND); // Send value to ThingSpeak
      this.appendValueInput('THINGSPEAK_KEY')
          .appendField(Blockly.Msg.ARD_THING_SPEAK_KEY) // Key:
          .setCheck(Blockly.Types.TEXT.output);
      this.appendValueInput('THINGSPEAK_CHANNEL')
          .appendField(Blockly.Msg.ARD_THING_SPEAK_CHANNEL) // Channel:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.appendValueInput('THINGSPEAK_FIELD')
          .appendField(Blockly.Msg.ARD_THING_SPEAK_FIELD) // Field:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.appendValueInput('THINGSPEAK_VALUE')
          .appendField(Blockly.Msg.ARD_THING_SPEAK_VALUE) // Value:
          .setCheck(Blockly.Types.NUMBER.checkList);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.ARD_NEOPIXEL_TIP);
    }
};