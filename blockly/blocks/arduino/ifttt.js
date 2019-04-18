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
Blockly.Blocks.ifttt.HUE = 40;

Blockly.Blocks['ifttt_webhooks_settings'] = {
  /**
   * Block for setting up a ifttt webhook.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/romkey/IFTTTWebHook');
    this.setColour(Blockly.Blocks.ifttt.HUE);
    this.appendDummyInput()
        .appendField('Setup IFTTT Webhook')
        .appendField(
            new Blockly.FieldInstance(
                'IFTTT',
                'myIFTTTWebhook',
                true, true, false
            ),
        'WEBHOOK_NAME')
        .appendField(':'); // :
    this.appendValueInput('API_KEY')
        .appendField('API Key')
        .setCheck(Blockly.Types.TEXT.output);
    this.appendValueInput('NAME')
        .appendField('Webhook name')
        .setCheck(Blockly.Types.TEXT.output);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Create a IFTTT Webhook you can trigger later.\n'
            + 'Make sure your device is connected to the internet.');
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
        .appendField('trigger')
        .appendField(
            new Blockly.FieldInstance(
                'IFTTT',
                'myIFTTTWebhook',
                false, true, false
            ),
        'WEBHOOK_NAME');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Trigger a IFTTT webhook.\n'
            + 'Make sure your device is connected to the internet.');
    }
};