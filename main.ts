input.onButtonPressed(Button.A, function () {
    basic.pause(5000)
    Pedestrian_Crossing()
    basic.pause(3000)
    GREEN()
    basic.pause(20000)
    YELLOW()
    basic.pause(4000)
    RED()
    basic.pause(40000)
})
function RED () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Pedestrian_Crossing_VI () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.pause(5000)
    for (let index = 0; index < 20; index++) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        basic.showString("" + (Pedestrian_Crossing_Time))
        Pedestrian_Crossing_Time += -1
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function Pedestrian_Crossing () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.pause(5000)
    for (let index = 0; index < 20; index++) {
        basic.showString("" + (Pedestrian_Crossing_Time))
        Pedestrian_Crossing_Time += -1
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
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
    basic.pause(5000)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    Pedestrian_Crossing()
    basic.pause(3000)
    GREEN()
    basic.pause(20000)
    YELLOW()
    basic.pause(4000)
    RED()
    basic.pause(40000)
})
function YELLOW () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let Strip: neopixel.Strip = null
let Pedestrian_Crossing_Time = 0
Pedestrian_Crossing_Time = 20
Strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
Strip.setBrightness(20)
basic.showIcon(IconNames.No)
RED()
