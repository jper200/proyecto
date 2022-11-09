input.onButtonPressed(Button.A, function () {
    player_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player_sprite.change(LedSpriteProperty.X, 1)
})
let player_sprite: game.LedSprite = null
player_sprite = game.createSprite(2, 5)
basic.pause(5000)
let block_1 = game.createSprite(randint(0, 4), 0)
basic.pause(1000)
basic.forever(function () {
    if (block_1.isTouching(player_sprite)) {
        basic.pause(500)
        block_1.delete()
        block_1 = game.createSprite(2, 2)
    } else {
        block_1.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
    if (block_1.get(LedSpriteProperty.Y) == 4) {
        basic.pause(500)
        block_1.delete()
        game.gameOver()
    }
})
