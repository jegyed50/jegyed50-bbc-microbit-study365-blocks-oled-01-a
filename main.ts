input.onButtonPressed(Button.A, function () {
    zoomfalse_demo()
    basic.pause(3000)
    OLED12864_I2C.clear()
    basic.pause(3000)
    zoomtrue_demo()
    basic.pause(3000)
    OLED12864_I2C.off()
})
input.onButtonPressed(Button.B, function () {
    pidiv180 = 1.7453292519943295e+30
    OLED12864_I2C.clear()
    OLED12864_I2C.pixel(x, y, 1)
    OLED12864_I2C.draw()
    for (let index = 0; index <= 365; index++) {
        x = Math.round(Math.map(index, 0, 365, 0, 123))
        y = Math.sin(x * pidiv180)
        serial.writeValue("yA", y)
        y = Math.round(Math.map(Math.sin(x * pidiv180), -1, 1, 0, 63))
        serial.writeValue("x", x)
        serial.writeValue("y", y)
        OLED12864_I2C.pixel(x, y, 1)
    }
    OLED12864_I2C.draw()
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
    for (let index3 = 0; index3 <= 15; index3++) {
        OLED12864_I2C.rect(
        index3 * 2,
        index3 * 2,
        127 - index3 * 2,
        63 - index3 * 2,
        1
        )
    }
    basic.pause(2000)
}
let y = 0
let x = 0
let pidiv180 = 0
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
OLED12864_I2C.pixel(63, 31, 1)
music.playTone(262, music.beat(BeatFraction.Eighth))
music.playTone(988, music.beat(BeatFraction.Eighth))
basic.pause(5000)
