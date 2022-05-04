input.onButtonPressed(Button.A, function () {
    GREEN()
    basic.pause(1000)
    YELLOW()
    basic.pause(1000)
    RED()
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        Pedestrian_Crossing_Time += -1
        basic.pause(500)
        basic.showNumber(Pedestrian_Crossing_Time)
    }
    Pedestrian_Crossing_Time = 10
    basic.pause(1000)
    basic.showIcon(IconNames.No)
})
function RED () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
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
    GREEN()
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(1000)
    YELLOW()
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(1000)
    RED()
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        Pedestrian_Crossing_Time += -1
        music.playTone(587, music.beat(BeatFraction.Half))
        basic.pause(500)
        basic.showNumber(Pedestrian_Crossing_Time)
    }
    Pedestrian_Crossing_Time = 10
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.showIcon(IconNames.No)
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
Pedestrian_Crossing_Time = 10
Strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
Strip.setBrightness(20)
basic.showIcon(IconNames.No)
RED()
basic.forever(function () {
	
})
