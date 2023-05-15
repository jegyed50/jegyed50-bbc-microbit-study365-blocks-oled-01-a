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
        31,
        0,
        64 - index * 2,
        31 - index * 2,
        1
        )
        basic.pause(2000)
        OLED12864_I2C.rect(
        index * 2,
        index * 2,
        32 - index * 2,
        32 - index * 2,
        1
        )
        OLED12864_I2C.rect(
        index * 2 + 32,
        index * 2 + 0,
        32 + index * 2,
        32 - index * 2,
        1
        )
        basic.pause(200)
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
