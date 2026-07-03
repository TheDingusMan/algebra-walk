@namespace
class SpriteKind:
    Portal = SpriteKind.create()
    SizePortal = SpriteKind.create()
    GravityPortal = SpriteKind.create()

def on_up_pressed():
    global upPressed
    upPressed = True
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    global gravity
    if otherSprite.rotation_degrees != 360:
        cube.ay = cube.ay * -1
        gravity = gravity * -1
        cube.vy = -50 * gravity
        otherSprite.rotation_degrees = 360
sprites.on_overlap(SpriteKind.player, SpriteKind.GravityPortal, on_on_overlap)

def on_a_pressed():
    global aPressed
    aPressed = True
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    global mode2
    if otherSprite2.image.equals(assets.image("""
        shipPortal
        """)):
        changeGamemode("ship")
        mode2 = "ship"
        effects.clear_particles(cube)
        cube.start_effect(effects.spray)
        cube.start_effect(effects.spray)
    elif otherSprite2.image.equals(assets.image("""
        cubePortal
        """)):
        changeGamemode("cube")
        mode2 = "cube"
        effects.clear_particles(cube)
    elif otherSprite2.image.equals(assets.image("""
        wavePortal
        """)):
        changeGamemode("wave")
        mode2 = "wave"
        effects.clear_particles(cube)
        for index in range(5):
            cube.start_effect(effects.spray)
    elif otherSprite2.image.equals(assets.image("""
        ballPortal
        """)):
        changeGamemode("ball")
        mode2 = "ball"
        effects.clear_particles(cube)
sprites.on_overlap(SpriteKind.player, SpriteKind.Portal, on_on_overlap2)

def on_a_released():
    global aPressed
    aPressed = False
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_up_released():
    global upPressed
    upPressed = False
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_on_overlap3(sprite3, otherSprite3):
    if otherSprite3.image.equals(assets.image("""
        miniPortal1
        """)):
        cube.scale = 0.5
        if mode2 == "cube":
            cube.ay = 312.5
    elif otherSprite3.image.equals(assets.image("""
        miniPortal2
        """)):
        cube.scale = 1
        if mode2 == "cube":
            cube.ay = 625
sprites.on_overlap(SpriteKind.player, SpriteKind.SizePortal, on_on_overlap3)

def changeGamemode(mode: str):
    if mode == "cube":
        cube.set_image(assets.image("""
            cube4
            """))
        cube.ay = 625 * cube.scale * gravity
    elif mode == "ship":
        cube.set_image(assets.image("""
            ship1
            """))
        cube.ay = 0
    elif mode == "wave":
        cube.set_image(assets.image("""
            wave2
            """))
        cube.ay = 0
    elif mode == "ball":
        cube.set_image(assets.image("""
            ball1
            """))
        cube.ay = 625 * gravity
count2 = 0
count = 0
gravity = 0
mode2 = ""
cube: Sprite = None
upPressed = False
aPressed = False
@namespace
class userconfig:
    ARCADE_SCREEN_WIDTH = 320
    ARCADE_SCREEN_HEIGHT = 160
music.play(music.create_song(assets.song("""
        stereoMadnent
        """)),
    music.PlaybackMode.IN_BACKGROUND)
game.set_game_over_playable(False,
    music.create_song(assets.song("""
        death
        """)),
    False)
game.set_game_over_playable(True,
    music.create_song(assets.song("""
        win
        """)),
    False)
scene.set_background_color(5)
on_floor = True
aPressed = False
upPressed = False
cube = sprites.create(assets.image("""
    cube4
    """), SpriteKind.player)
shipPortal = sprites.create(assets.image("""
    shipPortal
    """), SpriteKind.Portal)
wavePortal = sprites.create(assets.image("""
    wavePortal
    """), SpriteKind.Portal)
cubePortal = sprites.create(assets.image("""
    cubePortal
    """), SpriteKind.Portal)
miniPortal = sprites.create(assets.image("""
        miniPortal1
        """),
    SpriteKind.SizePortal)
miniPortal2 = sprites.create(assets.image("""
        miniPortal1
        """),
    SpriteKind.SizePortal)
normalPortal = sprites.create(assets.image("""
        miniPortal2
        """),
    SpriteKind.SizePortal)
ballPortal = sprites.create(assets.image("""
    ballPortal
    """), SpriteKind.Portal)
flipPortal = sprites.create(assets.image("""
        flipPortal
        """),
    SpriteKind.GravityPortal)
flipPortal2 = sprites.create(assets.image("""
        flipPortal
        """),
    SpriteKind.GravityPortal)
mode2 = "cube"
currentTilemap = 0
gravity = 1
cube.ay = 625
cube.set_position(28, 235)
tiles.set_current_tilemap(tilemap("""
    level
    """))
tiles.place_on_tile(shipPortal, tiles.get_tile_location(123, 6))
tiles.place_on_tile(cubePortal, tiles.get_tile_location(158, 3))
tiles.place_on_tile(wavePortal, tiles.get_tile_location(221, 6))
tiles.place_on_tile(miniPortal, tiles.get_tile_location(138, 8))
tiles.place_on_tile(miniPortal2, tiles.get_tile_location(217, 7))
tiles.place_on_tile(normalPortal, tiles.get_tile_location(180, 6))
tiles.place_on_tile(ballPortal, tiles.get_tile_location(180, 6))
tiles.place_on_tile(flipPortal, tiles.get_tile_location(197, 7))
tiles.place_on_tile(flipPortal2, tiles.get_tile_location(217, 7))
scene.camera_follow_sprite(cube)

def on_on_update():
    if tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color1
            """)):
        scene.set_background_color(1)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color2
            """)):
        scene.set_background_color(2)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color3
            """)):
        scene.set_background_color(3)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color4
            """)):
        scene.set_background_color(4)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color5
            """)):
        scene.set_background_color(5)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color6
            """)):
        scene.set_background_color(6)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color7
            """)):
        scene.set_background_color(7)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color8
            """)):
        scene.set_background_color(8)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color9
            """)):
        scene.set_background_color(9)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color10
            """)):
        scene.set_background_color(10)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color11
            """)):
        scene.set_background_color(11)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color12
            """)):
        scene.set_background_color(12)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color13
            """)):
        scene.set_background_color(13)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color14
            """)):
        scene.set_background_color(14)
    elif tiles.tile_at_location_equals(tiles.get_tile_location(cube.tilemap_location().column, 0),
        assets.tile("""
            color15
            """)):
        scene.set_background_color(15)
game.on_update(on_on_update)

def on_forever():
    global on_floor, count, count2
    if cube.tile_kind_at(TileDirection.CENTER, assets.tile("""
        block
        """)) or (cube.tile_kind_at(TileDirection.CENTER, assets.tile("""
        spike
        """)) or (cube.tile_kind_at(TileDirection.CENTER, assets.tile("""
        spikeLeft
        """)) or cube.tile_kind_at(TileDirection.CENTER, assets.tile("""
        spikeDown
        """)))):
        music.stop_all_sounds()
        game.game_over(False)
    if mode2 == "cube":
        if gravity == 1 and cube.is_hitting_tile(CollisionDirection.TOP):
            music.stop_all_sounds()
            game.game_over(False)
        elif gravity == -1 and cube.is_hitting_tile(CollisionDirection.BOTTOM):
            music.stop_all_sounds()
            game.game_over(False)
    if cube.tile_kind_at(TileDirection.CENTER, assets.tile("""
        goal
        """)):
        scene.camera_shake(8, 1000)
        sprites.destroy(cube)
        pause(1000)
        game.game_over(True)
    cube.x += 4.5
    if cube.tilemap_location().column == 255:
        cube.x = 0
        if currentTilemap == 0:
            pass
        elif False:
            pass
    if gravity == 1:
        if cube.is_hitting_tile(CollisionDirection.BOTTOM):
            on_floor = True
            if mode2 == "cube":
                count = 0
                count2 = 0
                cube.set_image(assets.image("""
                    cube4
                    """))
        else:
            on_floor = False
    elif gravity == -1:
        if cube.is_hitting_tile(CollisionDirection.TOP):
            on_floor = True
            if mode2 == "cube":
                count = 0
                count2 = 0
                cube.set_image(assets.image("""
                    cube4
                    """))
        else:
            on_floor = False
forever(on_forever)

def on_forever2():
    global on_floor, gravity
    if mode2 == "cube" and (aPressed or upPressed) and on_floor:
        on_floor = False
        cube.vy = -200 * cube.scale * gravity
    elif mode2 == "ship":
        if gravity == 1:
            if aPressed or upPressed:
                if cube.vy < -200 / cube.scale:
                    cube.vy = -200 / cube.scale
                else:
                    cube.vy += -7 / cube.scale
            else:
                if cube.vy > 200 / cube.scale:
                    cube.vy = 200 / cube.scale
                else:
                    cube.vy += 7 / cube.scale
        elif gravity == -1:
            if aPressed or upPressed:
                if cube.vy > 200 / cube.scale:
                    cube.vy = 200 / cube.scale
                else:
                    cube.vy += 7 / cube.scale
            else:
                if cube.vy < -200 / cube.scale:
                    cube.vy = -200 / cube.scale
                else:
                    cube.vy += -7 / cube.scale
    elif mode2 == "wave":
        if aPressed or upPressed:
            cube.vy = -0.01 * gravity
            cube.y += -4.5 / cube.scale * gravity
        else:
            cube.vy = 0.01 * gravity
            cube.y += 4.5 / cube.scale * gravity
    elif mode2 == "ball" and (on_floor and (aPressed or upPressed)):
        cube.ay = cube.ay * -1
        gravity = gravity * -1
        cube.vy = 50 * cube.scale * gravity
forever(on_forever2)

def on_forever3():
    global count, count2
    if mode2 == "cube" and not (on_floor):
        count += 1
        if count == 4:
            count = 0
            count2 += 1
            if count2 == 1:
                if gravity == 1:
                    cube.set_image(assets.image("""
                        cube1
                        """))
                elif gravity == -1:
                    cube.set_image(assets.image("""
                        cube3
                        """))
            elif count2 == 2:
                cube.set_image(assets.image("""
                    cube2
                    """))
            elif count2 == 3:
                if gravity == 1:
                    cube.set_image(assets.image("""
                        cube3
                        """))
                elif gravity == -1:
                    cube.set_image(assets.image("""
                        cube1
                        """))
            else:
                count2 = 0
                cube.set_image(assets.image("""
                    cube4
                    """))
    elif mode2 == "ship":
        if cube.vy < -100:
            if gravity == 1:
                cube.set_image(assets.image("""
                    ship3
                    """))
            elif gravity == -1:
                cube.set_image(assets.image("""
                    flipship2
                    """))
        elif cube.vy > 100:
            if gravity == 1:
                cube.set_image(assets.image("""
                    ship2
                    """))
            elif gravity == -1:
                cube.set_image(assets.image("""
                    flipship3
                    """))
        else:
            if gravity == 1:
                cube.set_image(assets.image("""
                    ship1
                    """))
            elif gravity == -1:
                cube.set_image(assets.image("""
                    flipship1
                    """))
    elif mode2 == "wave":
        if cube.vy < 0:
            cube.set_image(assets.image("""
                wave1
                """))
        elif cube.vy > 0:
            cube.set_image(assets.image("""
                wave2
                """))
        else:
            cube.set_image(assets.image("""
                wave0
                """))
        cube.vy = 0
    elif mode2 == "ball":
        count += 1
        if count == 4:
            count = 0
            count2 += 1
            if count2 == 1:
                cube.set_image(assets.image("""
                    ball2
                    """))
            else:
                count2 = 0
                cube.set_image(assets.image("""
                    ball1
                    """))
forever(on_forever3)
