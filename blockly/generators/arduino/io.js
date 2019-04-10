/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.IO');

goog.require('Blockly.Arduino');


/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_digitalwrite'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var stateOutput = Blockly.Arduino.valueToCode(
      block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_digitalread'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for setting the state (Y) of a built-in LED (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_builtin_led'] = function(block) {
  var pin = block.getFieldValue('BUILT_IN_LED');
  var stateOutput = Blockly.Arduino.valueToCode(
      block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Set LED');

  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for setting the state (Y) of an analogue output (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { analogWrite(X, Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_analogwrite'] = function(block) {
  var pin = block.getFieldValue('PIN');
  // for the ESP32 analogWrite is not implemented
  if(Blockly.Arduino.Boards.selected.compilerFlag == 'esp32:esp32:esp32'){
    Blockly.Arduino.userFunctions_['esp32AnalogWrite'] =
        'void analogWrite(int channel, int value) {\n' +
        '  ledcWrite(channel, value);\n' +
        '}';

    let channel = Blockly.Arduino.Boards.selected.pwmPins.findIndex((e) => {return e[1] == pin});
    let pwmChannelSetupCode = 'ledcSetup(' + channel + ', 980, 8);';
    Blockly.Arduino.addSetup('io_setup_pwm_channel' + channel, pwmChannelSetupCode, false);
    let pinSetupCode = 'ledcAttachPin(' + pin + ', ' + channel + ');';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
    pin = channel + '/*pin ' + pin + '*/'; //use channel for call
  }else{
    Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Analogue Write');
      
    let pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);
  }

  var stateOutput = Blockly.Arduino.valueToCode(
      block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

  // Warn if the input value is out of range
  if ((stateOutput < 0) || (stateOutput > 255)) {
    block.setWarningText('The analogue value set must be between 0 and 255',
                         'pwm_value');
  } else {
    block.setWarningText(null, 'pwm_value');
  }

  var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for reading an analogue pin value (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_analogread'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'analogRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Value for defining a digital pin state.
 * Arduino code: loop { HIGH / LOW }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_highlow'] = function(block) {
  var code = block.getFieldValue('STATE');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsein'] = function(block) {
  var pin = block.getFieldValue("PULSEPIN");
  var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Pulse Pin');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'pulseIn(' + pin + ', ' + type + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsetimeout'] = function(block) {
  var pin = block.getFieldValue("PULSEPIN");
  var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);
  var timeout = Blockly.Arduino.valueToCode(block, "TIMEOUT", Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Pulse Pin');

  var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'pulseIn(' + pin + ', ' + type + ', ' + timeout + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
}; 
