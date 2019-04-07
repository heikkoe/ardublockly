/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.tone');

goog.require('Blockly.Arduino');


/**
 * Function for turning the tone library on on a given pin (X).
 * Arduino code: setup { pinMode(X, OUTPUT) }
 *               loop  { tone(X, frequency) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */

Blockly.Arduino['io_tone'] = function(block) {
  var pin = block.getFieldValue('TONEPIN');
  var freq = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
  // for the ESP32 tone is not implemented
  if(Blockly.Arduino.Boards.selected.compilerFlag == 'esp32:esp32:esp32'){
    Blockly.Arduino.userFunctions_['esp32tone'] =
        'void tone(int channel, int freq) {\n' +
        '  ledcWriteTone(channel, freq);\n' +
        '  ledcWrite(channel, 100);\n' +
        '}';

    let channel = Blockly.Arduino.Boards.selected.pwmPins.findIndex((e) => {return e[1] == pin});
    let pwmChannelSetupCode = 'ledcSetup(' + channel + ', 980, 8);';
    Blockly.Arduino.addSetup('io_setup_pwm_channel' + channel, pwmChannelSetupCode, false);
    let pinSetupCode = 'ledcAttachPin(' + pin + ', ' + channel + ');';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
    pin = channel + '/*pin ' + pin + '*/'; //use channel for call
  } else {
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
  }

  var code = 'tone(' + pin + ',' + freq + ');\n';
  return code;
};

Blockly.Arduino['io_notone'] = function(block) {
  var pin = block.getFieldValue("TONEPIN");
  // for the ESP32 noTone is not implemented
  if(Blockly.Arduino.Boards.selected.compilerFlag == 'esp32:esp32:esp32'){
    Blockly.Arduino.userFunctions_['esp32noTone'] =
        'void noTone(int channel) {\n' +
        '  // The pins 18 to 25 can\'t be turned off.\n' +
        '  // They will be set very low.\n' +
        '  ledcWrite(channel, channel<8?0:1);\n' +
        '}';

    let channel = Blockly.Arduino.Boards.selected.pwmPins.findIndex((e) => {return e[1] == pin});
    let pwmChannelSetupCode = 'ledcSetup(' + channel + ', 980, 8);';
    Blockly.Arduino.addSetup('io_setup_pwm_channel' + channel, pwmChannelSetupCode, false);
    let pinSetupCode = 'ledcAttachPin(' + pin + ', ' + channel + ');';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
    pin = channel + '/*pin ' + pin + '*/'; //use channel for call
  } else {
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');
    
    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
  }

  var code = 'noTone(' + pin + ');\n';
  return code;
};
