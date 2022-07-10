input.onButtonPressed(Button.A, function () {
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index <= 4; index++) {
        turtle.forward(1)
        turtle.turnRight()
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnRight()
})
turtle.forward(1)
turtle.turnRight()
turtle.forward(1)
