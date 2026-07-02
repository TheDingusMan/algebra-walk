namespace SpriteKind {
    export const Portal = SpriteKind.create()
    export const SizePortal = SpriteKind.create()
    export const GravityPortal = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    upPressed = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GravityPortal, function (sprite, otherSprite) {
    if (otherSprite.rotationDegrees != 360) {
        cube.ay = cube.ay * -1
        gravity = gravity * -1
        cube.vy = -50 * gravity
        otherSprite.rotationDegrees = 360
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    aPressed = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    if (otherSprite.image.equals(assets.image`shipPortal`)) {
        changeGamemode("ship")
        mode = "ship"
        effects.clearParticles(cube)
        cube.startEffect(effects.spray)
        cube.startEffect(effects.spray)
    } else if (otherSprite.image.equals(assets.image`cubePortal`)) {
        changeGamemode("cube")
        mode = "cube"
        effects.clearParticles(cube)
    } else if (otherSprite.image.equals(assets.image`wavePortal`)) {
        changeGamemode("wave")
        mode = "wave"
        effects.clearParticles(cube)
        for (let index = 0; index < 5; index++) {
            cube.startEffect(effects.spray)
        }
    } else if (otherSprite.image.equals(assets.image`ballPortal`)) {
        changeGamemode("ball")
        mode = "ball"
        effects.clearParticles(cube)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    aPressed = false
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    upPressed = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SizePortal, function (sprite, otherSprite) {
    if (otherSprite.image.equals(assets.image`miniPortal1`)) {
        cube.scale = 0.5
        if (mode == "cube") {
            cube.ay = 312.5
        }
    } else if (otherSprite.image.equals(assets.image`miniPortal2`)) {
        cube.scale = 1
        if (mode == "cube") {
            cube.ay = 625
        }
    }
})
function changeGamemode (mode: string) {
    if (mode == "cube") {
        cube.setImage(assets.image`cube4`)
        cube.ay = 625 * cube.scale * gravity
    } else if (mode == "ship") {
        cube.setImage(assets.image`ship1`)
        cube.ay = 0
    } else if (mode == "wave") {
        cube.setImage(assets.image`wave2`)
        cube.ay = 0
    } else if (mode == "ball") {
        cube.setImage(assets.image`ball1`)
        cube.ay = 625 * gravity
    }
}
let count2 = 0
let count = 0
let gravity = 0
let mode = ""
let cube: Sprite = null
let upPressed = false
let aPressed = false
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 160
}
music.play(music.createSong(assets.song`stereoMadnent`), music.PlaybackMode.InBackground)
game.setGameOverPlayable(false, music.createSong(assets.song`death`), false)
game.setGameOverPlayable(true, music.createSong(assets.song`win`), false)
scene.setBackgroundColor(5)
let on_floor = true
aPressed = false
upPressed = false
cube = sprites.create(assets.image`cube4`, SpriteKind.Player)
let shipPortal = sprites.create(assets.image`shipPortal`, SpriteKind.Portal)
let wavePortal = sprites.create(assets.image`wavePortal`, SpriteKind.Portal)
let cubePortal = sprites.create(assets.image`cubePortal`, SpriteKind.Portal)
let miniPortal = sprites.create(assets.image`miniPortal1`, SpriteKind.SizePortal)
let miniPortal2 = sprites.create(assets.image`miniPortal1`, SpriteKind.SizePortal)
let normalPortal = sprites.create(assets.image`miniPortal2`, SpriteKind.SizePortal)
let ballPortal = sprites.create(assets.image`ballPortal`, SpriteKind.Portal)
let flipPortal = sprites.create(assets.image`flipPortal`, SpriteKind.GravityPortal)
let flipPortal2 = sprites.create(assets.image`flipPortal`, SpriteKind.GravityPortal)
mode = "cube"
let currentTilemap = 0
gravity = 1
cube.ay = 625
cube.setPosition(28, 235)
tiles.setCurrentTilemap(tilemap`level`)
tiles.placeOnTile(shipPortal, tiles.getTileLocation(123, 6))
tiles.placeOnTile(cubePortal, tiles.getTileLocation(158, 3))
tiles.placeOnTile(wavePortal, tiles.getTileLocation(221, 6))
tiles.placeOnTile(miniPortal, tiles.getTileLocation(138, 8))
tiles.placeOnTile(miniPortal2, tiles.getTileLocation(217, 7))
tiles.placeOnTile(normalPortal, tiles.getTileLocation(180, 6))
tiles.placeOnTile(ballPortal, tiles.getTileLocation(180, 6))
tiles.placeOnTile(flipPortal, tiles.getTileLocation(197, 7))
tiles.placeOnTile(flipPortal2, tiles.getTileLocation(217, 7))
scene.cameraFollowSprite(cube)
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color1`)) {
        scene.setBackgroundColor(1)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color2`)) {
        scene.setBackgroundColor(2)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color3`)) {
        scene.setBackgroundColor(3)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color4`)) {
        scene.setBackgroundColor(4)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color5`)) {
        scene.setBackgroundColor(5)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color6`)) {
        scene.setBackgroundColor(6)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color7`)) {
        scene.setBackgroundColor(7)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color8`)) {
        scene.setBackgroundColor(8)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color9`)) {
        scene.setBackgroundColor(9)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color10`)) {
        scene.setBackgroundColor(10)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color11`)) {
        scene.setBackgroundColor(11)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color12`)) {
        scene.setBackgroundColor(12)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color13`)) {
        scene.setBackgroundColor(13)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color14`)) {
        scene.setBackgroundColor(14)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cube.tilemapLocation().column, 0), assets.tile`color15`)) {
        scene.setBackgroundColor(15)
    }
})
forever(function () {
    if (cube.tileKindAt(TileDirection.Center, assets.tile`block`) || (cube.tileKindAt(TileDirection.Center, assets.tile`spike`) || (cube.tileKindAt(TileDirection.Center, assets.tile`spikeLeft`) || cube.tileKindAt(TileDirection.Center, assets.tile`spikeDown`)))) {
        music.stopAllSounds()
        game.gameOver(false)
    }
    if (mode == "cube") {
        if (gravity == 1 && cube.isHittingTile(CollisionDirection.Top)) {
            music.stopAllSounds()
            game.gameOver(false)
        } else if (gravity == -1 && cube.isHittingTile(CollisionDirection.Bottom)) {
            music.stopAllSounds()
            game.gameOver(false)
        }
    }
    if (cube.tileKindAt(TileDirection.Center, assets.tile`goal`)) {
        scene.cameraShake(8, 1000)
        sprites.destroy(cube)
        pause(1000)
        game.gameOver(true)
    }
    cube.x += 4.5
    if (cube.tilemapLocation().column == 255) {
        cube.x = 0
        if (currentTilemap == 0) {
        	
        } else if (false) {
        	
        }
    }
    if (gravity == 1) {
        if (cube.isHittingTile(CollisionDirection.Bottom)) {
            on_floor = true
            if (mode == "cube") {
                count = 0
                count2 = 0
                cube.setImage(assets.image`cube4`)
            }
        } else {
            on_floor = false
        }
    } else if (gravity == -1) {
        if (cube.isHittingTile(CollisionDirection.Top)) {
            on_floor = true
            if (mode == "cube") {
                count = 0
                count2 = 0
                cube.setImage(assets.image`cube4`)
            }
        } else {
            on_floor = false
        }
    }
})
forever(function () {
    if (mode == "cube" && (aPressed || upPressed) && on_floor) {
        on_floor = false
        cube.vy = -200 * cube.scale * gravity
    } else if (mode == "ship") {
        if (gravity == 1) {
            if (aPressed || upPressed) {
                if (cube.vy < -200 / cube.scale) {
                    cube.vy = -200 / cube.scale
                } else {
                    cube.vy += -7 / cube.scale
                }
            } else {
                if (cube.vy > 200 / cube.scale) {
                    cube.vy = 200 / cube.scale
                } else {
                    cube.vy += 7 / cube.scale
                }
            }
        } else if (gravity == -1) {
            if (aPressed || upPressed) {
                if (cube.vy > 200 / cube.scale) {
                    cube.vy = 200 / cube.scale
                } else {
                    cube.vy += 7 / cube.scale
                }
            } else {
                if (cube.vy < -200 / cube.scale) {
                    cube.vy = -200 / cube.scale
                } else {
                    cube.vy += -7 / cube.scale
                }
            }
        }
    } else if (mode == "wave") {
        if (aPressed || upPressed) {
            cube.vy = -0.01 * gravity
            cube.y += -4.5 / cube.scale * gravity
        } else {
            cube.vy = 0.01 * gravity
            cube.y += 4.5 / cube.scale * gravity
        }
    } else if (mode == "ball" && (on_floor && (aPressed || upPressed))) {
        cube.ay = cube.ay * -1
        gravity = gravity * -1
        cube.vy = 50 * cube.scale * gravity
    }
})
forever(function () {
    if (mode == "cube" && !(on_floor)) {
        count += 1
        if (count == 4) {
            count = 0
            count2 += 1
            if (count2 == 1) {
                if (gravity == 1) {
                    cube.setImage(assets.image`cube1`)
                } else if (gravity == -1) {
                    cube.setImage(assets.image`cube3`)
                }
            } else if (count2 == 2) {
                cube.setImage(assets.image`cube2`)
            } else if (count2 == 3) {
                if (gravity == 1) {
                    cube.setImage(assets.image`cube3`)
                } else if (gravity == -1) {
                    cube.setImage(assets.image`cube1`)
                }
            } else {
                count2 = 0
                cube.setImage(assets.image`cube4`)
            }
        }
    } else if (mode == "ship") {
        if (cube.vy < -100) {
            if (gravity == 1) {
                cube.setImage(assets.image`ship3`)
            } else if (gravity == -1) {
                cube.setImage(assets.image`flipship2`)
            }
        } else if (cube.vy > 100) {
            if (gravity == 1) {
                cube.setImage(assets.image`ship2`)
            } else if (gravity == -1) {
                cube.setImage(assets.image`flipship3`)
            }
        } else {
            if (gravity == 1) {
                cube.setImage(assets.image`ship1`)
            } else if (gravity == -1) {
                cube.setImage(assets.image`flipship1`)
            }
        }
    } else if (mode == "wave") {
        if (cube.vy < 0) {
            cube.setImage(assets.image`wave1`)
        } else if (cube.vy > 0) {
            cube.setImage(assets.image`wave2`)
        } else {
            cube.setImage(assets.image`wave0`)
        }
        cube.vy = 0
    } else if (mode == "ball") {
        count += 1
        if (count == 4) {
            count = 0
            count2 += 1
            if (count2 == 1) {
                cube.setImage(assets.image`ball2`)
            } else {
                count2 = 0
                cube.setImage(assets.image`ball1`)
            }
        }
    }
})
