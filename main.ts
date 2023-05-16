/**
 * OLED12864_I2C Extension
 * 
 * G   V   SCL   SDA
 * 
 * GND 5V   P19   P20
 * 
 * Graph 
 * 
 * Zoom = false:128x64 point
 * 
 * left-top corner:0,0
 * 
 * left-bottom corner:0,63
 * 
 * rigth-top corner:127,0
 * 
 * rigth-bottom corner:127,63
 * 
 * Char 13x4 
 * 
 * Zoom = true
 * 
 * left-top corner:0,0
 * 
 * left-bottom corner:0,31
 * 
 * rigth-top corner:63,0
 * 
 * rigth-bottom corner:63,31
 * 
 * Char 13x4 
 * 
 * Only ASCII characters chr(0) to chr(127)
 */
input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showString(
    0,
    0,
    "123456789012345678901234567890123456789012345678901234567890",
    1
    )
    basic.pause(2000)
    OLED12864_I2C.showString(
    0,
    0,
    "123456789012345678901234567890123456789012345678901234567890",
    0
    )
    basic.pause(2000)
    OLED12864_I2C.showString(
    0,
    0,
    "áéőúűóüöíÉÁŐÚŰÓÜÖÍ",
    1
    )
})
input.onButtonPressed(Button.AB, function () {
    OLED12864_I2C.invert(true)
    basic.pause(2000)
    OLED12864_I2C.clear()
    for (let index = 0; index <= 7; index++) {
        basic.pause(200)
        OLED12864_I2C.rect(
        index * 2,
        index * 2,
        64 - index * 2,
        31 - index * 2,
        1
        )
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    OLED12864_I2C.invert(true)
    for (let index = 0; index < 10; index++) {
        basic.pause(500)
        OLED12864_I2C.off()
        basic.pause(500)
        OLED12864_I2C.on()
    }
})
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
OLED12864_I2C.pixel(0, 0, 1)
basic.pause(1000)
OLED12864_I2C.pixel(0, 63, 1)
basic.pause(1000)
OLED12864_I2C.pixel(127, 0, 1)
basic.pause(1000)
OLED12864_I2C.pixel(127, 62, 1)
basic.pause(1000)
OLED12864_I2C.pixel(62, 31, 1)
basic.pause(1000)
OLED12864_I2C.clear()
OLED12864_I2C.zoom(true)
OLED12864_I2C.pixel(0, 0, 1)
basic.pause(1000)
OLED12864_I2C.pixel(0, 31, 1)
basic.pause(1000)
OLED12864_I2C.pixel(63, 0, 1)
basic.pause(1000)
OLED12864_I2C.pixel(63, 31, 1)
basic.pause(1000)
OLED12864_I2C.pixel(31, 16, 1)
basic.pause(1000)
OLED12864_I2C.showString(
0,
0,
"123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
1
)
OLED12864_I2C.zoom(false)
