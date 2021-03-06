/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview  Ardublockly specific English strings.
 *
 * After modifying this file, either run "build.py" from the blockly directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq_ardublockly.json, and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */

/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/// Arduino Blocks
Blockly.Msg.ARD_HIGH = 'HIGH';
Blockly.Msg.ARD_LOW = 'LOW';
Blockly.Msg.ARD_ANALOGREAD = 'read analog pin#';
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
Blockly.Msg.ARD_ANALOGWRITE = 'set analog pin#';
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a pin state logic High or Low.';
Blockly.Msg.ARD_DIGITALREAD = 'read digital pin#';
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a pin: HIGH or LOW';
Blockly.Msg.ARD_DIGITALWRITE = 'set digitial pin#';
Blockly.Msg.ARD_WRITE_TO = 'to';
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
Blockly.Msg.ARD_BUILTIN_LED = 'set built-in LED';
Blockly.Msg.ARD_BUILTIN_LED_TIP = 'Light on or off for the built-in LED of the Arduino';
Blockly.Msg.ARD_DEFINE = 'Define';
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generate audio tones on a pin';
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stop generating a tone on a pin';
Blockly.Msg.ARD_HALL_TEXT = 'read magnet sensor';
Blockly.Msg.ARD_HALL_TIP = 'reads the hall sensor of an ESP32';
Blockly.Msg.ARD_IFTTT_SETUP = 'Setup IFTTT Webhook';
Blockly.Msg.ARD_IFTTT_WEBHOOK_NAME = 'myIFTTTWebhook';
Blockly.Msg.ARD_IFTTT_SETUP2 = ':';
Blockly.Msg.ARD_IFTTT_KEY = 'API Key';
Blockly.Msg.ARD_IFTTT_NAME = 'Webhook name';
Blockly.Msg.ARD_IFTTT_SETUP_TIP = 'Create a IFTTT Webhook you can trigger later.'
    + 'Make sure your device is connected to the internet.';
Blockly.Msg.ARD_IFTTT_TRIGGER = 'trigger';
Blockly.Msg.ARD_IFTTT_TRIGGER_TIP = 'Trigger a IFTTT webhook.'
    + 'Make sure your device is connected to the internet.';
Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_1 = 'Message 1';
Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_2 = 'Message 2';
Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_3 = 'Message 3';
Blockly.Msg.ARD_IFTTT_TRIGGER_MSG_TIP = 'Trigger a IFTTT webhook with up to tree messages.'
    + 'Make sure your device is connected to the internet.';
Blockly.Msg.ARD_IR_CHECK_PIN = 'Pin';
Blockly.Msg.ARD_IR_CHECK = 'got IR signal?';
Blockly.Msg.ARD_IR_CHECK_TIP = 'chose the IR pin where you want a result from';
Blockly.Msg.ARD_IR_RESULT = 'received IR signal from Pin';
Blockly.Msg.ARD_IR_RESULT_TIP = 'chose the IR pin where you got a result';
Blockly.Msg.ARD_MAP = 'Map';
Blockly.Msg.ARD_MAP_IN_MIN = 'from min';
Blockly.Msg.ARD_MAP_IN_MAX = 'max';
Blockly.Msg.ARD_MAP_OUT_MIN = 'to min';
Blockly.Msg.ARD_MAP_OUT_MAX = 'max';
Blockly.Msg.ARD_MAP_TIP = 'Re-maps a number from [min-max] to another.';
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Arduino run first:';
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Arduino loop forever:';
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Arduino setup() and loop() functions.';
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as pin %3. Already used as %4.';
Blockly.Msg.ARD_SERIAL_SETUP = 'Setup';
Blockly.Msg.ARD_SERIAL_SPEED = ':  speed to';
Blockly.Msg.ARD_SERIAL_BPS = 'bps';
Blockly.Msg.ARD_SERIAL_SETUP_TIP = 'Selects the speed for a specific Serial peripheral';
Blockly.Msg.ARD_SERIAL_PRINT = 'print';
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = 'add new line';
Blockly.Msg.ARD_SERIAL_PRINT_TIP = 'Prints data to the console/serial port as human-readable ASCII text.';
Blockly.Msg.ARD_SERIAL_PRINT_WARN = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_NEOPIXEL_TIP = 'Connect to a NeoPixel LED strip';
Blockly.Msg.ARD_NEOPIXEL_0 = 'Setup led strip';
Blockly.Msg.ARD_NEOPIXEL_1 = 'myLedStrip';
Blockly.Msg.ARD_NEOPIXEL_2 = ':';
Blockly.Msg.ARD_NEOPIXEL_3 = 'Data pin';
Blockly.Msg.ARD_NEOPIXEL_4 = 'Number of leds';
Blockly.Msg.ARD_NEOPIXEL_5 = 'Set RGB LED';
Blockly.Msg.ARD_NEOPIXEL_6 = 'At position:';
Blockly.Msg.ARD_NEOPIXEL_7 = 'Red:';
Blockly.Msg.ARD_NEOPIXEL_8 = 'Green:';
Blockly.Msg.ARD_NEOPIXEL_9 = 'Blue:';
Blockly.Msg.ARD_NEOPIXEL_10 = 'show RGB LEDs';
Blockly.Msg.ARD_NEOPIXEL_11 = 'Hue:';
Blockly.Msg.ARD_NEOPIXEL_12 = 'Saturation:';
Blockly.Msg.ARD_NEOPIXEL_13 = 'Value:';
Blockly.Msg.ARD_SERVO_WRITE = 'set SERVO from Pin';
Blockly.Msg.ARD_SERVO_WRITE_TO = 'to';
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = 'Degrees (0~180)';
Blockly.Msg.ARD_SERVO_WRITE_TIP = 'Set a Servo to an specified angle';
Blockly.Msg.ARD_SERVO_READ = 'read SERVO from PIN#';
Blockly.Msg.ARD_SERVO_READ_TIP = 'Read a Servo angle';
Blockly.Msg.ARD_SPI_SETUP = 'Setup';
Blockly.Msg.ARD_SPI_SETUP_CONF = 'configuration:';
Blockly.Msg.ARD_SPI_SETUP_SHIFT = 'data shift';
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = 'MSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = 'LSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = 'clock divide';
Blockly.Msg.ARD_SPI_SETUP_MODE = 'SPI mode (idle - edge)';
Blockly.Msg.ARD_SPI_SETUP_MODE0 = '0 (Low - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE1 = '1 (Low - Rising)';
Blockly.Msg.ARD_SPI_SETUP_MODE2 = '2 (High - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE3 = '3 (High - Rising)';
Blockly.Msg.ARD_SPI_SETUP_TIP = 'Configures the SPI peripheral.';
Blockly.Msg.ARD_SPI_TRANS_NONE = 'none';
Blockly.Msg.ARD_SPI_TRANS_VAL = 'transfer';
Blockly.Msg.ARD_SPI_TRANS_SLAVE = 'to slave pin';
Blockly.Msg.ARD_SPI_TRANS_TIP = 'Send a SPI message to an specified slave device.';
Blockly.Msg.ARD_SPI_TRANS_WARN1 = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SPI_TRANS_WARN2 = 'Old pin value %1 is no longer available.';
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = 'Send a SPI message to an specified slave device and get data back.';
Blockly.Msg.ARD_STEPPER_SETUP = 'Setup stepper motor';
Blockly.Msg.ARD_STEPPER_MOTOR = 'stepper motor:';
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = 'MyStepper';
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = 'Number of pins';
Blockly.Msg.ARD_STEPPER_TWO_PINS = '2';
Blockly.Msg.ARD_STEPPER_FOUR_PINS = '4';
Blockly.Msg.ARD_STEPPER_PIN1 = 'pin1#';
Blockly.Msg.ARD_STEPPER_PIN2 = 'pin2#';
Blockly.Msg.ARD_STEPPER_PIN3 = 'pin3#';
Blockly.Msg.ARD_STEPPER_PIN4 = 'pin4#';
Blockly.Msg.ARD_STEPPER_REVOLVS = 'how many steps per revolution';
Blockly.Msg.ARD_STEPPER_SPEED = 'set speed (rpm) to';
Blockly.Msg.ARD_STEPPER_SETUP_TIP = 'Configures a stepper motor pinout and other settings.';
Blockly.Msg.ARD_STEPPER_STEP = 'move stepper';
Blockly.Msg.ARD_STEPPER_STEPS = 'steps';
Blockly.Msg.ARD_STEPPER_STEP_TIP = 'Turns the stepper motor a specific number of steps.';
Blockly.Msg.ARD_STEPPER_COMPONENT = 'stepper';
Blockly.Msg.ARD_DS18B20_SETUP = 'Setup temperatur sensor';
Blockly.Msg.ARD_DS18B20_SETUP2 = ':';
Blockly.Msg.ARD_DS18B20_PIN = 'pin';
Blockly.Msg.ARD_DS18B20_DEFAULT_NAME = 'MyTempSensor';
Blockly.Msg.ARD_DS18B20_SETUP_TIP = 'Setup DS18B20 temperatur sensor';
Blockly.Msg.ARD_DS18B20_MEASURE_MEASURE = 'Measure';
Blockly.Msg.ARD_DS18B20_MEASURE_TIP = 'Tell the sensor to measure the temperature';
Blockly.Msg.ARD_DS18B20_GET_TEMP_GET = 'Get temperature of';
Blockly.Msg.ARD_DS18B20_GET_TEMP_TIP = 'Get the temperature value in °C of the last measurement';
Blockly.Msg.ARD_COMPONENT_WARN1 = 'A %1 configuration block with the same %2 name must be added to use this block!';
Blockly.Msg.ARD_THING_SPEAK_SEND = 'Send value to ThingSpeak';
Blockly.Msg.ARD_THING_SPEAK_KEY = 'Key:';
Blockly.Msg.ARD_THING_SPEAK_CHANNEL = 'Channel:';
Blockly.Msg.ARD_THING_SPEAK_FIELD = 'Field:';
Blockly.Msg.ARD_THING_SPEAK_VALUE = 'Value:';
Blockly.Msg.ARD_TIME_DELAY = 'wait';
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Wait specific time in milliseconds';
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Wait specific time in microseconds';
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
Blockly.Msg.ARD_TIME_INF_TIP = 'Wait indefinitely, stopping the program.';
Blockly.Msg.ARD_TIME_WIFI_SET = 'set time via wifi';
Blockly.Msg.ARD_TIME_WIFI_SET_TIP = 'Sets the system time using time servers. Uses Wifi of the ESP32.';
Blockly.Msg.ARD_TIME_DROPDOWN_YEAR = 'year';
Blockly.Msg.ARD_TIME_DROPDOWN_MONTH = 'month';
Blockly.Msg.ARD_TIME_DROPDOWN_DAY_OF_MONTH = 'day of month';
Blockly.Msg.ARD_TIME_DROPDOWN_HOUR = 'hour';
Blockly.Msg.ARD_TIME_DROPDOWN_MIN = 'minute';
Blockly.Msg.ARD_TIME_DROPDOWN_SEC = 'second';
Blockly.Msg.ARD_TIME_GET_CURRENT = 'get the current';
Blockly.Msg.ARD_TIME_GET_CURRENT_TIP = 'Returns the current second. Can be set by the "Set time via wifi" block.';
Blockly.Msg.ARD_VAR_AS = 'as';
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
Blockly.Msg.ARD_WIFI_WIFI = 'Connect to Wifi:';
Blockly.Msg.ARD_WIFI_SSID = 'WLAN name';
Blockly.Msg.ARD_WIFI_PASSWORD = 'WLAN password';
Blockly.Msg.ARD_WIFI_TIP = 'Connect to your wifi';
/// IO blocks - pulseIn - Block for function pulseIn(), it measure a pulse duration in a given pin.
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on pin #%2';
/// IO blocks - pulseIn - Block similar to ARD_PULSE_READ, but it adds a time-out in microseconds.
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on pin #%2 (timeout after %3 μs)';
/// IO blocks - pulseIn - Tooltip for pulseIn() block.
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected pin.';
/// IO blocks - pulseIn - Tooltip for pulseIn() block when it uses the optional argument for time-out.
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.';
Blockly.Msg.ARD_TOUCH_WARN = 'This board has no touch sensors';
Blockly.Msg.ARD_TOUCH_READ_MSG = 'Read touch sensor';
Blockly.Msg.ARD_TOUCH_READ_TIP = 'Read touch sensor of ESP32. Values get smaller if touched.';
Blockly.Msg.ARD_TOUCH_WAS_TOUCHED_MSG = 'was touched?';
Blockly.Msg.ARD_TOUCH_WAS_TOUCHED_TIP = 'Check if a touch sensor of the ESP32 was touched (since the last time this was checked).';
Blockly.Msg.ARD_SETTONE = 'Set tone on pin #';
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on pin to specified frequency within range 31 - 65535';
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
Blockly.Msg.ARD_NOTONE = 'Turn off tone on pin #';
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected pin';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';
