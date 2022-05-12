function Pedestrian_Crossing () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
    for (let index = 0; index < 15; index++) {
        basic.showString("" + (Pedestrian_Crossing_Time))
        Pedestrian_Crossing_Time += -1
    }
    Pedestrian_Crossing_Time = 15
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        basic.pause(1000)
        Ambulance()
    }
})
input.onButtonPressed(Button.A, function () {
    xyz = 1
    basic.pause(5000)
    Pedestrian_Crossing()
    basic.pause(3000)
    GREEN()
    basic.pause(20000)
    YELLOW()
    basic.pause(4000)
    RED()
    xyz = 0
})
function RED () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Ambulance () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    GREEN()
    basic.pause(10000)
    YELLOW()
    basic.pause(4000)
    RED()
    radio.sendNumber(8)
}
function Vehicle () {
    xyz = 1
    basic.showIcon(IconNames.No)
    GREEN()
    basic.pause(20000)
    YELLOW()
    basic.pause(4000)
    RED()
    xyz = 0
}
function GREEN () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.B, function () {
    xyz = 1
    basic.pause(5000)
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Half))
    Pedestrian_Crossing_VI()
    basic.pause(3000)
    GREEN()
    basic.pause(20000)
    YELLOW()
    basic.pause(4000)
    RED()
    xyz = 0
})
function Pedestrian_Crossing_VI () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
    for (let index = 0; index < 15; index++) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        basic.showString("" + (Pedestrian_Crossing_Time))
        Pedestrian_Crossing_Time += -1
    }
    music.playTone(698, music.beat(BeatFraction.Whole))
    Pedestrian_Crossing_Time = 15
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function YELLOW () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let Distance = 0
let range: neopixel.Strip = null
let xyz = 0
let Strip: neopixel.Strip = null
let Pedestrian_Crossing_Time = 0
Pedestrian_Crossing_Time = 15
Strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
Strip.setBrightness(20)
radio.setGroup(177)
basic.showIcon(IconNames.No)
RED()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
    if (Distance > 4 && Distance < 6) {
        if (xyz == 0) {
            Vehicle()
        }
    }
})
