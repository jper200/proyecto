input.onButtonPressed(Button.A, function () {
    player_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player_sprite.change(LedSpriteProperty.X, 1)
})
let player_sprite: game.LedSprite = null
game.setScore(0)
player_sprite = game.createSprite(2, 5)
basic.pause(3000)
let block_1 = game.createSprite(randint(0, 4), 0)
basic.pause(1000)
let enemy_1 = 1
basic.forever(function () {
    if (block_1.isTouching(player_sprite)) {
        enemy_1 = 0
        block_1.delete()
        block_1 = game.createSprite(player_sprite.get(LedSpriteProperty.X), 3)
    }
    while (block_1.get(LedSpriteProperty.Y) == 4) {
        basic.pause(200)
        if (block_1.get(LedSpriteProperty.Y) == 4) {
            basic.pause(100)
            block_1.delete()
            game.gameOver()
        }
    }
    if (enemy_1 == 1) {
        block_1.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
    if (enemy_1 == 0) {
        block_1.delete()
        block_1 = game.createSprite(player_sprite.get(LedSpriteProperty.X), 3)
        game.addScore(1)
    }
})
