input.onButtonPressed(Button.A, function () {
    player_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player_sprite.change(LedSpriteProperty.X, 1)
})
let player_sprite: game.LedSprite = null
player_sprite = game.createSprite(2, 5)
basic.pause(5000)
let enemy_1_sprite = game.createSprite(randint(1, 5), 0)
