def on_button_pressed_a():
    zoomfalse_demo()
    basic.pause(3000)
    OLED12864_I2C.clear()
    basic.pause(3000)
    zoomtrue_demo()
    basic.pause(3000)
    OLED12864_I2C.off()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    OLED12864_I2C.invert(True)
    basic.pause(2000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def zoomtrue_demo():
    basic.pause(2000)
    OLED12864_I2C.zoom(True)
    OLED12864_I2C.show_string(0, 0, "zoom=true", 1)
    OLED12864_I2C.show_string(1, 1, " 67x32 point", 1)
    basic.pause(2000)
    OLED12864_I2C.rect(0, 0, 63, 31, 1)
    OLED12864_I2C.clear()
    basic.pause(2000)
    OLED12864_I2C.zoom(True)
    for index2 in range(8):
        OLED12864_I2C.rect(index2 * 2, index2 * 2, 64 - index2 * 2, 31 - index2 * 2, 1)
    basic.pause(2000)
def zoomfalse_demo():
    OLED12864_I2C.zoom(False)
    OLED12864_I2C.show_string(5, 3, "zoom = false", 1)
    OLED12864_I2C.show_string(4, 5, "128 x 67 point", 1)
    basic.pause(2000)
    OLED12864_I2C.rect(0, 0, 127, 63, 1)
    OLED12864_I2C.clear()
    basic.pause(2000)
    for index in range(16):
        OLED12864_I2C.rect(index * 2, index * 2, 127 - index * 2, 63 - index * 2, 1)
    basic.pause(2000)
# OLED12864_I2C Extension
# G   V   SCL   SDA
# GND 5V   P19   P20
# Graph
# Zoom = false:128x64 point
# left-top corner:0,0
# left-bottom corner:0,63
# rigth-top corner:127,0
# rigth-bottom corner:127,63
# Char 25x8
# 
# Zoom = true
# left-top corner:0,0
# left-bottom corner:0,31
# rigth-top corner:63,0
# rigth-bottom corner:63,31
# Char 13x4
# Only ASCII characters chr(0) to chr(127)
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(False)
music.play_tone(262, music.beat(BeatFraction.EIGHTH))
for grade in range(366):
    OLED12864_I2C.pixel(Math.round(grade / (360 / 128)), 31, 1)
    serial.write_value("fok", grade)
    serial.write_value("fok", grade)
music.play_tone(262, music.beat(BeatFraction.EIGHTH))
basic.pause(5000)