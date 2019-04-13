/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for wifi
 */
'use strict';

goog.provide('Blockly.Arduino.wifi');

goog.require('Blockly.Arduino');

/**
 * Function to connect to wifi
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['wifi_connect'] = function(block) {
  let ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || "";
  let password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || "";
  
  if(Blockly.Arduino.Boards.selected.compilerFlag == 'esp32:esp32:esp32'){
    Blockly.Arduino.addInclude('wifi', '#include <WiFi.h>');
    Blockly.Arduino.userFunctions_['esp32_wifi_connect'] =
        'void connect() {\n' +
        '  WiFi.begin(ssid, password);\n' +
        '  while(WiFi.status() != WL_CONNECTED) {\n' +
        '    delay(500);\n' +
        '  };\n' +
        '}';
    
    Blockly.Arduino.addDeclaration('wifi_ssid', 'const char* ssid = ' + ssid + ';');
    Blockly.Arduino.addDeclaration('wifi_password', 'const char* password = ' + password + ';');

    return 'connect();\n'
  }
  return '/*The selected board does not support wifi (' + Blockly.Arduino.Boards.selected.name + ')*/\n';
};