input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
