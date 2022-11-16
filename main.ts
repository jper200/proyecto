input.onButtonPressed(Button.A, function () {
    player_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player_sprite.change(LedSpriteProperty.X, 1)
})
let enemy_4 = 0
let block_4: game.LedSprite = null
let enemy_3 = 0
let block_3: game.LedSprite = null
let enemy_2 = 0
let block_2: game.LedSprite = null
let player_sprite: game.LedSprite = null
let score = 0
player_sprite = game.createSprite(2, 5)
basic.pause(2000)
let block_1 = game.createSprite(randint(0, 4), 0)
basic.pause(1000)
let enemy_1 = 1
basic.forever(function () {
    if (score == 4) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("you win")
    }
    while (enemy_1 == 1) {
        if (block_1.get(LedSpriteProperty.X) == player_sprite.get(LedSpriteProperty.X) && block_1.get(LedSpriteProperty.Y) == 3) {
            enemy_1 = 0
            block_1.delete()
            score += 1
            basic.pause(1000)
            block_2 = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
            enemy_2 = 1
        } else {
            block_1.change(LedSpriteProperty.Y, 1)
            basic.pause(600)
        }
        while (block_1.get(LedSpriteProperty.Y) == 4) {
            if (block_1.get(LedSpriteProperty.Y) == 4) {
                music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
                basic.pause(100)
                block_1.delete()
                game.gameOver()
            }
        }
    }
})
basic.forever(function () {
    while (enemy_2 == 1) {
        if (block_2.get(LedSpriteProperty.X) == player_sprite.get(LedSpriteProperty.X) && block_2.get(LedSpriteProperty.Y) == 3) {
            enemy_2 = 0
            block_2.delete()
            score += 1
            basic.pause(1000)
            block_3 = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
            enemy_3 = 1
        } else {
            block_2.change(LedSpriteProperty.Y, 1)
            basic.pause(600)
        }
        while (block_2.get(LedSpriteProperty.Y) == 4) {
            if (block_2.get(LedSpriteProperty.Y) == 4) {
                music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
                basic.pause(100)
                block_2.delete()
                game.gameOver()
            }
        }
    }
})
basic.forever(function () {
    while (enemy_3 == 1) {
        if (block_3.get(LedSpriteProperty.X) == player_sprite.get(LedSpriteProperty.X) && block_3.get(LedSpriteProperty.Y) == 3) {
            enemy_3 = 0
            block_3.delete()
            score += 1
            basic.pause(1000)
            block_4 = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
            enemy_4 = 1
        } else {
            block_3.change(LedSpriteProperty.Y, 1)
            basic.pause(600)
        }
        while (block_3.get(LedSpriteProperty.Y) == 4) {
            if (block_3.get(LedSpriteProperty.Y) == 4) {
                music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
                basic.pause(100)
                block_3.delete()
                game.gameOver()
            }
        }
    }
})
basic.forever(function () {
    while (enemy_4 == 1) {
        if (block_4.get(LedSpriteProperty.X) == player_sprite.get(LedSpriteProperty.X) && block_4.get(LedSpriteProperty.Y) == 3) {
            enemy_4 = 0
            block_4.delete()
            score += 1
            basic.pause(1000)
        } else {
            block_4.change(LedSpriteProperty.Y, 1)
            basic.pause(600)
        }
        while (block_4.get(LedSpriteProperty.Y) == 4) {
            if (block_4.get(LedSpriteProperty.Y) == 4) {
                music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
                basic.pause(100)
                block_4.delete()
                game.gameOver()
            }
        }
    }
})
