namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 160
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    aPressed = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    aPressed = false
})
let aPressed = false
music.play(music.createSong(assets.song`stereoMadnent`), music.PlaybackMode.InBackground)
scene.setBackgroundColor(9)
let count = 0
let count2 = 0
let on_floor = true
aPressed = false
let cube = sprites.create(assets.image`cube4`, SpriteKind.Player)
cube.ay = 625
cube.setPosition(20, 235)
tiles.setCurrentTilemap(tilemap`level`)
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
    if (on_floor && aPressed) {
        on_floor = false
        cube.vy = -200
    }
})
forever(function () {
    if (cube.tileKindAt(TileDirection.Center, assets.tile`block`) || cube.isHittingTile(CollisionDirection.Top) || (cube.tileKindAt(TileDirection.Center, assets.tile`spike`) || (cube.tileKindAt(TileDirection.Center, assets.tile`spikeLeft`) || cube.tileKindAt(TileDirection.Center, assets.tile`spikeDown`)))) {
        music.stopAllSounds()
        game.gameOver(false)
    }
    cube.x += 4.5
    if (!(on_floor)) {
        count += 1
        if (count == 4) {
            count = 0
            count2 += 1
            if (count2 == 1) {
                cube.setImage(assets.image`cube1`)
            } else if (count2 == 2) {
                cube.setImage(assets.image`cube2`)
            } else if (count2 == 3) {
                cube.setImage(assets.image`cube3`)
            } else {
                count2 = 0
                cube.setImage(assets.image`cube4`)
            }
        }
    }
    if (cube.isHittingTile(CollisionDirection.Bottom)) {
        on_floor = true
        count = 0
        count2 = 0
        cube.setImage(assets.image`cube4`)
    } else {
        on_floor = false
    }
})
