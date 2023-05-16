def on_button_pressed_a():
    OLED12864_I2C.show_string(0,
        0,
        "123456789012345678901234567890123456789012345678901234567890",
        1)
    basic.pause(2000)
    OLED12864_I2C.show_string(0,
        0,
        "123456789012345678901234567890123456789012345678901234567890",
        0)
    basic.pause(2000)
    OLED12864_I2C.show_string(0, 0, "áéőúűóüöíÉÁŐÚŰÓÜÖÍ", 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    OLED12864_I2C.invert(True)
    basic.pause(2000)
    OLED12864_I2C.clear()
    for index in range(8):
        basic.pause(200)
        OLED12864_I2C.rect(31, 0, 64 - index * 2, 31 - index * 2, 1)
        basic.pause(2000)
        OLED12864_I2C.rect(index * 2, index * 2, 32 - index * 2, 32 - index * 2, 1)
        OLED12864_I2C.rect(index * 2 + 32,
            index * 2 + 0,
            32 + index * 2,
            32 - index * 2,
            1)
        basic.pause(200)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    OLED12864_I2C.invert(True)
    for index2 in range(10):
        basic.pause(500)
        OLED12864_I2C.off()
        basic.pause(500)
        OLED12864_I2C.on()
input.on_button_pressed(Button.B, on_button_pressed_b)

OLED12864_I2C.init(60)