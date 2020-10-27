input.onButtonPressed(Button.A, function () {
    basic.showNumber(player)
    basic.showString("V")
    basic.showNumber(computer)
    if (player > comp_score) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    player = 1
    computer += randint(0, 2)
    if (player == 1 && computer == 1) {
        basic.showString("T")
    } else if (player == 1 && computer == 0) {
        basic.showString("W")
        score += 1
    } else {
        basic.showString("L")
        comp_score += 1
    }
    computer = -1
    player = -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    player = 0
    computer += randint(0, 2)
    if (player == 0 && computer == 0) {
        basic.showString("T")
    } else if (player == 0 && computer == 2) {
        basic.showString("W")
        score += 1
    } else {
        basic.showString("L")
        comp_score += 1
    }
    computer = -1
    player = -1
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    player = 2
    computer += randint(0, 2)
    if (player == 2 && computer == 2) {
        basic.showString("T")
    } else if (player == 2 && computer == 1) {
        basic.showString("W")
        score += 1
    } else {
        basic.showString("L")
        comp_score += 1
    }
    computer = -1
    player = -1
})
let score = 0
let computer = 0
let player = 0
let comp_score = 0
basic.showIcon(IconNames.Happy)
comp_score = -1
player = -1
