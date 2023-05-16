//OLED12864_I2C Extension
//  G   V   SCL   SDA
// GND 5V   P19   P20
// Graph 128x64 point
// Char 13x4 ASCII characters 

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    OLED12864_I2C.showString(0, 0, "123456789012345678901234567890123456789012345678901234567890", 1)
    basic.pause(2000)
    OLED12864_I2C.showString(0, 0, "123456789012345678901234567890123456789012345678901234567890", 0)
    basic.pause(2000)
    OLED12864_I2C.showString(0, 0, "áéőúűóüöíÉÁŐÚŰÓÜÖÍ", 1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    OLED12864_I2C.invert(true)
    basic.pause(2000)
    OLED12864_I2C.clear()
    for (let index = 0; index < 8; index++) {
        basic.pause(200)
        OLED12864_I2C.rect(31, 0, 64 - index * 2, 31 - index * 2, 1)
        basic.pause(2000)
        OLED12864_I2C.rect(index * 2, index * 2, 32 - index * 2, 32 - index * 2, 1)
        OLED12864_I2C.rect(index * 2 + 32, index * 2 + 0, 32 + index * 2, 32 - index * 2, 1)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    OLED12864_I2C.invert(true)
    for (let index2 = 0; index2 < 10; index2++) {
        basic.pause(500)
        OLED12864_I2C.off()
        basic.pause(500)
        OLED12864_I2C.on()
    }
})
OLED12864_I2C.init(60)
