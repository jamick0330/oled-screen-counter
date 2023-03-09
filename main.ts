input.onButtonPressed(Button.A, function () {
    count += 1
})
input.onButtonPressed(Button.B, function () {
    count = 0
    x = 7
    OLED12864_I2C.clear()
})
let x = 0
let count = 0
OLED12864_I2C.init(60)
count = 0
x = 7
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Count:",
    1
    )
    OLED12864_I2C.showNumber(
    x,
    0,
    count,
    1
    )
})
