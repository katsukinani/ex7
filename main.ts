input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Sugar.Light(AnalogPin.P0)))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.Off)
Sugar.ledLuminent(AnalogPin.P1, 0)
basic.forever(function () {
    if (Sugar.Light(AnalogPin.P0) > 20) {
        Sugar.ledLuminent(AnalogPin.P1, 0)
    } else {
        Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.On)
        Sugar.ledLuminent(AnalogPin.P1, 900)
    }
})
