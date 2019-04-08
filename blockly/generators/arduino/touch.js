/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the touch sensors of the ESP32.
 */
'use strict';

goog.provide('Blockly.Arduino.touchSensor');

goog.require('Blockly.Arduino');

/**
 * Code generator for reading the touch value of a touch sensor pin of an esp32.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['touch_sensor_read'] = function(block) {
  let code = '0';
  var pin = block.getFieldValue('TOUCH_PIN');
  if(pin) {
    code = 'touchRead(' + pin + ')';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for checking if a touch sensor got touched on an esp32.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['touch_sensor_touch_detected'] = function(block) {
  let code = 'false';
  var pin = block.getFieldValue('TOUCH_PIN');
  if(pin) {
    let idx = Blockly.Arduino.Boards.selected.touchPins.findIndex((e) => {return e[1] == pin});

    Blockly.Arduino.addDeclaration('esp32touchDetectedArray', 'bool touchDetected[10];');

    Blockly.Arduino.userFunctions_['esp32TouchDetected'] =
        'bool wasTouchDetected(int pinIdx) {\n' +
        '  bool td = touchDetected[pinIdx];\n' +
        '  touchDetected[pinIdx] = false;\n' +
        '  return td;\n' +
        '}';

    Blockly.Arduino.userFunctions_['esp32gotTouch' + pin] =
        'void gotTouch' + pin + '() {\n' +
        '  touchDetected[' + idx + '] = true;\n' +
        '}';

    Blockly.Arduino.addSetup('esp32touchInterrupt' + pin, 'touchAttachInterrupt(' + pin + ', gotTouch' + pin + ', 40);');

    code = 'wasTouchDetected(' + idx + ')';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

