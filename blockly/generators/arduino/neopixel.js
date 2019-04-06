/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: https://learn.adafruit.com/adafruit-neopixel-uberguide/the-magic-of-neopixels
 *
 */
'use strict';

goog.provide('Blockly.Arduino.neopixel');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['neopixel_settings'] = function(block) {
  var pinKey = block.getFieldValue('NEOPIXEL_PIN');
  var ledCount = Blockly.Arduino.valueToCode(
      block, 'NEOPIXEL_COUNT', Blockly.Arduino.ORDER_ATOMIC) || '30';
  var stripName = block.getFieldValue('WS2812_NAME');

  Blockly.Arduino.addInclude('servo', '#include <Adafruit_NeoPixel.h>');
  Blockly.Arduino.addDeclaration(
    stripName,
      'Adafruit_NeoPixel ' + stripName + ';'
  );

  var code =
      stripName + ' = Adafruit_NeoPixel(' + ledCount + ', ' + pinKey + ', NEO_GRB + NEO_KHZ800);\n'
      + stripName + '.begin();\n'
      + stripName + '.show();\n';

  return code;
};

/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['neopixel_set_led'] = function(block) {
  var stripName = block.getFieldValue('WS2812_NAME');
  var ledIdx = Blockly.Arduino.valueToCode(block, 'NEOPIXEL_LED', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var red = Blockly.Arduino.valueToCode(block, 'NEOPIXEL_RED', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var green = Blockly.Arduino.valueToCode(block, 'NEOPIXEL_GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var blue = Blockly.Arduino.valueToCode(block, 'NEOPIXEL_BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = stripName + '.setPixelColor(' + ledIdx + ', ' + stripName + '.Color(' + red + ', ' + green + ', ' + blue + '));\n';
  return code;
};

/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['neopixel_show'] = function(block) {
  var stripName = block.getFieldValue('WS2812_NAME');

  var code = stripName + '.show();\n';
  return code;
};
