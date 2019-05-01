/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for IFTTT Webhooks.
 *     https://github.com/romkey/IFTTTWebHook
 *
 */
'use strict';

goog.provide('Blockly.Blocks.ifttt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ifttt.HUE = 325;

Blockly.Blocks['ifttt_webhooks_settings'] = {
  /**
   * Block for setting up a ifttt webhook.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/romkey/IFTTTWebHook');
    this.setColour(Blockly.Blocks.ifttt.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_IFTTT_SETUP)
        .appendField(
            new Blockly.FieldInstance(
                'IFTTT',
                Blockly.Msg.ARD_IFTTT_WEBHOOK_NAME,
                true, true, false
            ),
        'WEBHOOK_NAME')
        .appendField(Blockly.Msg.ARD_IFTTT_SETUP2); // :
    this.appendValueInput('API_KEY')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_IFTTT_KEY)
        .setCheck(Blockly.Types.TEXT.output);
    this.appendValueInput('NAME')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_IFTTT_NAME)
        .setCheck(Blockly.Types.TEXT.output);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_IFTTT_SETUP_TIP);
  },
};

Blockly.Blocks['ifttt_webhooks_trigger'] = {
  /**
   * Block for triggering a ifttt webhook
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/romkey/IFTTTWebHook');
    this.setColour(Blockly.Blocks.ifttt.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_IFTTT_TRIGGER)
      .appendField(
          new Blockly.FieldInstance(
              'IFTTT',
              Blockly.Msg.ARD_IFTTT_WEBHOOK_NAME,
              false, true, false
          ),
      'WEBHOOK_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_IFTTT_TRIGGER_TIP);
  }
};

Blockly.Blocks['ifttt_webhooks_trigger_message'] = {
    /**
     * Block for triggering a ifttt webhook with tree messages
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://github.com/romkey/IFTTTWebHook');
      this.setColour(Blockly.Blocks.ifttt.HUE);
      this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_IFTTT_TRIGGER)
        .appendField(
            new Blockly.FieldInstance(
                'IFTTT',
                Blockly.Msg.ARD_IFTTT_WEBHOOK_NAME,
                false, true, false
            ),
        'WEBHOOK_NAME');
      this.appendValueInput('MESSAGE_1')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_1);
      this.appendValueInput('MESSAGE_2')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_2);
      this.appendValueInput('MESSAGE_3')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_3);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_TIP);
    }
};