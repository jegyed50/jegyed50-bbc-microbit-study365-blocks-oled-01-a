input.onButtonPressed(Button.A, function () {
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
    zoomfalse_demo()
    basic.pause(3000)
    OLED12864_I2C.clear()
    basic.pause(3000)
    zoomtrue_demo()
    basic.pause(3000)
    OLED12864_I2C.zoom(false)
    plot_sine_cosine_graph()
    basic.pause(3000)
    OLED12864_I2C.off()
})
function plot_sine_cosine_graph () {
    for (let degree_loop_count = 0; degree_loop_count <= 1; degree_loop_count++) {
        szorzo = degree_loop_count + 1
        pidiv180 = Math.PI / 180
        OLED12864_I2C.clear()
        OLED12864_I2C.pixel(x, y_sine, 1)
        OLED12864_I2C.draw()
        for (let index = 0; index <= 365 * szorzo; index++) {
            x = Math.round(Math.map(index, 0, 365 * szorzo, 0, 123))
            y_sine = 1000 * Math.sin(index * szorzo * (Math.PI / 180) * 1)
            y_cosine = 1000 * Math.cos(index * szorzo * (Math.PI / 180) * 1)
            y_sine = Math.round(Math.map(y_sine, -1000, 1000, 0, 63))
            y_cosine = Math.round(Math.map(y_cosine, -1000, 1000, 0, 63))
            basic.pause(10)
            OLED12864_I2C.pixel(Math.constrain(x, 0, 123), Math.constrain(y_sine, 0, 63), 1)
            OLED12864_I2C.pixel(Math.constrain(x, 0, 123), Math.constrain(y_cosine, 0, 63), 1)
        }
        OLED12864_I2C.draw()
        basic.pause(2000)
    }
}
function zoomtrue_demo () {
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
    basic.pause(2000)
    OLED12864_I2C.clear()
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
let y_cosine = 0
let y_sine = 0
let x = 0
let pidiv180 = 0
let szorzo = 0
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
zoomfalse_demo()
basic.pause(3000)
OLED12864_I2C.clear()
basic.pause(3000)
zoomtrue_demo()
basic.pause(3000)
OLED12864_I2C.zoom(false)
plot_sine_cosine_graph()
basic.pause(3000)
OLED12864_I2C.off()
