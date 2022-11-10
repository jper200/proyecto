input.onButtonPressed(Button.A, function () {
    player_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player_sprite.change(LedSpriteProperty.X, 1)
})
let player_sprite: game.LedSprite = null
player_sprite = game.createSprite(2, 5)
basic.pause(3000)
let block_1 = game.createSprite(randint(0, 4), 0)
basic.pause(1000)
let enemy_1 = 1
basic.forever(function () {
    while (enemy_1 == 0) {
        if (block_1.get(LedSpriteProperty.X) != player_sprite.get(LedSpriteProperty.X)) {
            block_1.delete()
            block_1 = game.createSprite(player_sprite.get(LedSpriteProperty.X), 3)
        } else {
        	
        }
    }
    while (enemy_1 == 1) {
        if (block_1.get(LedSpriteProperty.X) == player_sprite.get(LedSpriteProperty.X) && block_1.get(LedSpriteProperty.Y) == 3) {
            enemy_1 = 0
        } else {
            block_1.change(LedSpriteProperty.Y, 1)
            basic.pause(1000)
        }
        while (block_1.get(LedSpriteProperty.Y) == 4) {
            basic.pause(350)
            if (block_1.get(LedSpriteProperty.Y) == 4) {
                basic.pause(100)
                block_1.delete()
                game.gameOver()
            }
        }
    }
})
