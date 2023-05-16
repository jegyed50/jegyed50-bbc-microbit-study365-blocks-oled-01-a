input.onButtonPressed(Button.A, function () {
    zoomfalse_demo()
    basic.pause(3000)
    OLED12864_I2C.clear()
    basic.pause(3000)
    zoomtrue_demo()
    basic.pause(3000)
    OLED12864_I2C.off()
})
input.onButtonPressed(Button.AB, function () {
    OLED12864_I2C.invert(true)
    basic.pause(2000)
})
function zoomtrue_demo () {
    basic.pause(2000)
    OLED12864_I2C.zoom(true)
    OLED12864_I2C.showString(
    0,
    0,
    "zoom=true",
    1
    )
    OLED12864_I2C.showString(
    1,
    1,
    " 67x32 point",
    1
    )
    basic.pause(2000)
    OLED12864_I2C.rect(
    0,
    0,
    63,
    31,
    1
    )
    OLED12864_I2C.clear()
    basic.pause(2000)
    OLED12864_I2C.zoom(true)
    for (let index2 = 0; index2 <= 7; index2++) {
        OLED12864_I2C.rect(
        index2 * 2,
        index2 * 2,
        64 - index2 * 2,
        31 - index2 * 2,
        1
        )
    }
    basic.pause(2000)
}
function zoomfalse_demo () {
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.showString(
    5,
    3,
    "zoom = false",
    1
    )
    OLED12864_I2C.showString(
    4,
    5,
    "128 x 67 point",
    1
    )
    basic.pause(2000)
    OLED12864_I2C.rect(
    0,
    0,
    127,
    63,
    1
    )
    OLED12864_I2C.clear()
    basic.pause(2000)
    for (let index = 0; index <= 15; index++) {
        OLED12864_I2C.rect(
        index * 2,
        index * 2,
        127 - index * 2,
        63 - index * 2,
        1
        )
    }
    basic.pause(2000)
}
// OLED12864_I2C Extension
// G   V   SCL   SDA
// GND 5V   P19   P20
// Graph
// Zoom = false:128x64 point
// left-top corner:0,0
// left-bottom corner:0,63
// rigth-top corner:127,0
// rigth-bottom corner:127,63
// Char 25x8
// 
// Zoom = true
// left-top corner:0,0
// left-bottom corner:0,31
// rigth-top corner:63,0
// rigth-bottom corner:63,31
// Char 13x4
// Only ASCII characters chr(0) to chr(127)
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
music.playTone(262, music.beat(BeatFraction.Eighth))
for (let grade = 0; grade <= 365; grade++) {
    OLED12864_I2C.pixel(Math.round(grade / (360 / 128)), 31, 1)
    serial.writeValue("fok", grade)
    serial.writeValue("fok", grade)
}
music.playTone(262, music.beat(BeatFraction.Eighth))
basic.pause(5000)
