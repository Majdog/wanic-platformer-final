enum ActionKind {
    Walking,
    Idle,
    Jumping,
    shooting
}
namespace SpriteKind {
    export const slingshot = SpriteKind.create()
    export const firespirit = SpriteKind.create()
    export const fsobstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.firespirit, function (sprite, otherSprite) {
    scene.placeOnRandomTile(sprite, 14)
    music.buzzer.play()
    scene.cameraShake(2, 200)
})
function funccoins () {
    coinlist = scene.getTilesByType(5)
    for (let value of coinlist) {
        coiners = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 1 5 . . . . . 
            . . . 5 5 5 5 5 5 5 1 5 . . . . 
            . . . 5 5 5 4 4 4 5 5 5 . . . . 
            . . . 5 5 4 4 4 4 4 5 5 . . . . 
            . . . 5 5 4 4 4 4 4 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, coiners)
        animation.runImageAnimation(
        coiners,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 1 5 5 5 5 5 . . . . . 
            . . . 5 1 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 4 4 4 5 5 5 . . . . 
            . . . 5 5 4 4 4 4 4 5 5 . . . . 
            . . . 5 5 4 4 4 4 4 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . 5 1 5 5 . . . . . . . 
            . . . . 5 1 5 5 5 5 . . . . . . 
            . . . . 5 5 5 4 4 5 . . . . . . 
            . . . . 5 5 4 4 4 5 . . . . . . 
            . . . . 5 5 4 4 4 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 4 . . . . . . . . 
            . . . . . . 5 4 . . . . . . . . 
            . . . . . . 5 4 . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . 5 1 5 5 . . . . . . . 
            . . . . 5 1 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 1 5 5 5 5 5 . . . . . 
            . . . 5 1 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . 5 1 5 5 . . . . . . . 
            . . . . 5 1 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . 4 5 . . . . . . . . . 
            . . . . . 4 5 . . . . . . . . . 
            . . . . . 4 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . 5 1 5 5 . . . . . . . 
            . . . . 5 1 5 5 5 5 . . . . . . 
            . . . . 5 4 4 5 5 5 . . . . . . 
            . . . . 5 4 4 4 5 5 . . . . . . 
            . . . . 5 4 4 4 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.slingshot, function (sprite, otherSprite) {
    sprite.vy = -300
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    pause(1000)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
function funcslingshots () {
    tanarray = scene.getTilesByType(13)
    for (let value of tanarray) {
        sptlauncher = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e 4 . . . . 4 e e . . . 
            . . . e e 4 . . . . 4 e e . . . 
            . . . e e 4 4 . . 4 4 e e . . . 
            . . . e e . 4 . . 4 . e e . . . 
            . . . e e . . 4 4 . . e e . . . 
            . . . e e e . . . . e e e . . . 
            . . . . e e 2 7 8 2 e e . . . . 
            . . . . . e 2 8 7 2 e . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . b . f f f f . b . . . . 
            . . . . . b b f f b b . . . . . 
            . . . . b . . . . . . b . . . . 
            `, SpriteKind.slingshot)
        scene.place(value, sptlauncher)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mainslime.isHittingTile(CollisionDirection.Bottom)) {
        mainslime.vy = -110
        animation.setAction(mainslime, ActionKind.Jumping)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mainslime, ActionKind.Walking)
})
function funcdestroysprites () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.slingshot)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.firespirit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fsobstacle)) {
        value.destroy()
    }
}
sprites.onOverlap(SpriteKind.firespirit, SpriteKind.fsobstacle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mainslime, ActionKind.Idle)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mainslime, ActionKind.Idle)
})
function funcstartgame () {
    funccreateslime()
    functilemaps()
    funcselectlvl()
    funccoins()
    funcslingshots()
    funcflame_spirits()
}
function funcshooterspawn () {
    pinktile = scene.getTilesByType(3)
    for (let value of pinktile) {
        sptfblauncher = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . . f f b b f f . . . . . 
            . . . . f f b b b b f f . . . . 
            . . . f f b b b b b b f f . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b 2 2 2 2 b b f . . . 
            . . . f b 2 2 4 4 2 2 b f . . . 
            . . . f b 2 4 5 5 4 2 b f . . . 
            . . . f b 2 4 5 5 4 2 b f . . . 
            . . . f b 2 2 4 4 2 2 b f . . . 
            . . . f b b 2 2 2 2 b b f . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b b b b b b f . . . 
            . . . f f f f f f f f f f . . . 
            `, SpriteKind.Player)
        scene.place(value, sptfblauncher)
    }
}
function funcflame_spirits () {
    orangearray = scene.getTilesByType(4)
    for (let value of orangearray) {
        sptfs = sprites.create(img`
            2 2 . . 2 2 . 2 . . . . . . . . 
            2 . . 2 2 2 . 2 . 2 2 . . 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 4 4 4 4 4 2 2 2 . . . . 
            2 2 4 4 4 4 5 4 4 4 2 2 2 . . 2 
            2 4 4 4 5 5 5 5 5 4 4 2 2 2 2 . 
            2 4 4 5 1 f 5 1 f 5 4 4 2 2 . . 
            2 4 4 5 f f 5 f f 5 4 4 2 2 . . 
            2 4 4 5 5 5 5 5 5 5 4 4 2 2 . . 
            2 2 4 5 5 f f f 5 5 4 4 2 2 . . 
            . 2 4 4 4 5 5 4 4 4 4 2 2 2 . . 
            . 2 4 4 4 4 4 4 4 4 2 2 2 . . . 
            . 2 2 4 4 4 4 4 2 2 2 2 . . . . 
            . . 2 2 2 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.firespirit)
        scene.place(value, sptfs)
    }
    purpobstaclearray = scene.getTilesByType(12)
    for (let value of purpobstaclearray) {
        sptblock_fs = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 5 . . . . . 
            5 . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 5 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.fsobstacle)
        scene.place(value, sptblock_fs)
    }
}
scene.onHitTile(SpriteKind.firespirit, 9, function (sprite) {
    sprite.vx = sprite.vx * -1
})
function functilemaps () {
    if (varlevelselect >= 0 && varlevelselect <= 3) {
        scene.setTile(7, img`
            7 6 6 7 7 7 7 7 7 7 7 7 7 7 6 7 
            7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 
            7 7 7 7 7 6 7 7 7 7 6 6 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 e e e 7 d e 7 e 7 e e e e e 7 
            7 e 7 7 e e e e e 7 7 7 e e d e 
            7 e e e e e e e 7 e e 7 e e e d 
            e 7 7 e e e e 7 e e e e e e e e 
            e e e e e e e e d e e e e e e e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e d e e e d e e e 
            e e d e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e d e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
        scene.setTile(1, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 f . . . . . . . . . . . 
            . 1 f f 1 1 f . . 1 f . . . . . 
            . f 1 1 f f 1 1 f f f . . . . . 
            . 1 f f 1 1 f f 1 1 f . . . . . 
            . f 1 1 f f 1 1 f f f . . . . . 
            . 1 f . . 1 f f 1 1 f . . . . . 
            . . . . . . . 1 f . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            `, true)
        scene.setTile(6, img`
            e e e e e e e e e d e e e e e e 
            e e d e e e e e e e e e e e d e 
            e d e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e d e e d e e e e e e e 
            e e d e e e e e e e e e e e d e 
            e e e e e e e e e e e d e e e d 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e d e e e e e e e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e d e e e d e e e 
            e e d e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e d e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, false)
        scene.setTile(15, img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a 3 3 a a a a a a a a a a a 
            a a 3 a a 3 a a a a a a a a a a 
            a a 3 a a 3 a a a a a a a a a a 
            a a a 3 3 a a a a a a a a a a a 
            a a a a a a a a a a 3 3 a a a a 
            a a a a a a a a a 3 a a 3 a a a 
            a a a a a a a a a 3 a a 3 a a a 
            a a a a a a a a a a 3 3 a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, false)
        scene.setTile(14, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(13, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(2, img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a 3 a a a a a a a a a a 
            a a a a a a a a a a a a 3 a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a 3 a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a 3 a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, true)
        scene.setTile(9, img`
            f e e e e e e e e e e e e e e e 
            e e e e e e e e e f e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e f e e e e e e 
            e e e e e e e f e e e e e e f e 
            e e e e f e e e e f e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e f e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e f e e e e 
            e e e e f e e e e f e e e e e e 
            e e e e e e e e e e e e e f e e 
            e f e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
            9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
            99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
            99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
            9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
            999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
            d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
            dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
            dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
            d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
            ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
            dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
            ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
        scroller.setCameraScrollingMultipliers(0.25, 0)
    }
    if (varlevelselect >= 4 && varlevelselect <= 6) {
        scene.setTile(7, img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
            4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4 
            4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 5 5 5 5 5 4 5 5 5 5 5 4 5 5 4 
            5 5 5 5 4 4 4 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 
            5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, true)
        scene.setTile(1, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 f . . . . . . . . . . . 
            . 1 f f 1 1 f . . 1 f . . . . . 
            . f 1 1 f f 1 1 f f f . . . . . 
            . 1 f f 1 1 f f 1 1 f . . . . . 
            . f 1 1 f f 1 1 f f f . . . . . 
            . 1 f . . 1 f f 1 1 f . . . . . 
            . . . . . . . 1 f . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            `, true)
        scene.setTile(6, img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 
            5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 
            5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 
            5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, false)
        scene.setTile(15, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 
            2 2 4 5 2 4 2 2 2 2 2 2 2 2 2 2 
            2 2 4 2 5 4 2 2 2 2 2 2 2 2 2 2 
            2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 
            2 2 2 2 2 2 2 2 2 4 2 5 4 2 2 2 
            2 2 2 2 2 2 2 2 2 4 5 2 4 2 2 2 
            2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, false)
        scene.setTile(14, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(13, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(2, img`
            a a a a a a a a a a a a a 3 a a 
            a a a a a a a a 3 a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a 3 a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a 3 a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a 3 a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, true)
        scene.setTile(9, img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 5 4 4 4 
            4 5 4 4 4 4 4 4 4 5 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 
            4 4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 5 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, true)
        scene.setTile(4, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(12, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888
            8888888888888888888888858888888888888888888888888888888888888888888555888888888888888888888888888888888588888888888888888888888888888888888888888885558888888888
            8888888888888888888888555888888888888888888888888888888888888888885555588888888888888888888888888888885558888888888888888888888888888888888888888855555888888888
            8888888888888888888888858888888888888888888888888888888888888888888555888888888888888888888888888888888588888888888888888888888888888888888888888885558888888888
            8888888888888888888888888888888888888888888888888111888888888888888585888888888888888888888888888888888888888888888888888888888881118888888888888885858888888888
            88888d11d8888888888888888888888888888888888888881111188888888888888888888888888888888d11d88888888888888888888888888888888888888811111888888888888888888888888888
            88881111118888888888888888888888888888888881188111111d8888888888888888888888888888881111118888888888888888888888888888888881188111111d88888888888888888888888888
            8881111111d88888888888888888888888888888881111d1111111188888888888888888888888888881111111d88888888888888888888888888888881111d111111118888888888888888888888888
            88811111111d11888888888888888888888888888d1111111111111d88888888888888888888888888811111111d11888888888888888888888888888d1111111111111d888888888888888888888888
            881111111111111888888888888888888888888d11111111111111111d8888888888888888888888881111111111111888888888888888888888888d11111111111111111d8888888888888888888888
            1d1111111111111d81118888888888888888888888888888888888888888888866688888888888811d1111111111111d8111888888888888888888888888888888888888888888886668888888888881
            1111111111111111111118888888888888888888888888888888888888888886776688888888881111111111111111111111188888888888888888888888888888888888888888867766888888888811
            1111111111166666111118888888888888588888888888888888888888888866777688888888881111111111111666661111188888888888885888888888888888888888888888667776888888888811
            111111111166777661111111d888888885558888888888888888888888888867777668888888d111111111111166777661111111d888888885558888888888888888888888888867777668888888d111
            8888888886677777668888888888888855555888888888888888888888888867777768888888888888888888866777776688888888888888555558888888888888888888888888677777688888888888
            8888888886777777768888888888888885558888888888888888888888888867777768888888888888888888867777777688888888888888855588888888888888888888888888677777688888888888
            8888888866777777766888888888888885858888888888888888888888888867777768888888888888888888667777777668888888888888858588888888888888888888888888677777688888888888
            8888888867777777776888888888888888888888888888888885888888888867777768888888888888888888677777777768888888888888888888888888888888858888888888677777688888888888
            8888888867777777776888866888888888888888888888888855588888888867777768888888888888888888677777777768888668888888888888888888888888555888888888677777688888888888
            8888888867777777776888677688888888888888888888888885888886688867777768888888888888888888677777777768886776888888888888888888888888858888866888677777688888888888
            8888888867777777776886677668888888888888888888888888888867768867777768888888888888888888677777777768866776688888888888888888888888888888677688677777688888888888
            8888888867777777776886777768888888888888888888888888888867768867777768888888888888888888677777777768867777688888888888888888888888888888677688677777688888888888
            8888888867777777776886777768888888888888888888888888888867768867777768888888888888888888677777777768867777688888888888888888888888888888677688677777688888888888
            6666888867777777776666777768888888888666666888888888888867768867777768888888888666668888677777777766667777688888888886666668888888888888677688677777688888888886
            7776688867777777777777777768888888886666666688888888888867768867777768886688886677766888677777777777777777688888888866666666888888888888677688677777688866888866
            7777688867777777777777777688888888866666666668888888888867768867777768867668866777776888677777777777777776888888888666666666688888888888677688677777688676688667
            7777768867777777777777776688888888866666666668888888888867768867777768867768867777777688677777777777777766888888888666666666688888888888677688677777688677688677
            7777768867777777776666666888888888666666666668888888888867768867777768867768867777777688677777777766666668888888886666666666688888888888677688677777688677688677
            7777776867777777776888888888888888666666666668888888888867776667777768677768867777777768677777777768888888888888886666666666688888888888677766677777686777688677
            7777776867777777776888888888888888666666666666888888888866777777777766677766667777777768677777777768888888888888886666666666668888888888667777777777666777666677
            7777776867777777776888666666666888666666666666888888888886677777777776677666677777777768677777777768886666666668886666666666668888888888866777777777766776666777
            7777776667777777776866677777776668666666666666888888888888666677777777777666677777777766677777777768666777777766686666666666668888888888886666777777777776666777
            7777776667777777776667777777777766666666666666888866666688888677777777777666677777777766677777777766677777777777666666666666668888666666888886777777777776666777
            7777776667777777776677777777777776666666666666866677777666888677777777776666677777777766677777777766777777777777766666666666668666777776668886777777777766666777
            7777777667777777776777777777777777666666666666667777777776688677777766666666677777777776677777777767777777777777776666666666666677777777766886777777666666666777
            7777777667777777766777777777777777666666666666677777777777668677777766666666677777777776677777777667777777777777776666666666666777777777776686777777666666666777
            7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
            7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
            7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
            7777777667777766666666777777777777776666666666777777776666666677777766666666677777777776677777666666667777777777777766666666667777777766666666777777666666666777
            777777766777666dddddd6666777777777776666666666777777666dddddd6666777666666666777777777766777666dddddd6666777777777776666666666777777666dddddd6666777666666666777
            7777777666666ddddddddddd66677777777766666666667777666ddddddddddd66676666666667777777777666666ddddddddddd66677777777766666666667777666ddddddddddd6667666666666777
            77777776666ddddddddddddddd6667777777666666666677766ddddddddddddddd6666666666677777777776666ddddddddddddddd6667777777666666666677766ddddddddddddddd66666666666777
            7777777666dddddddddddddddddd6666777766666666666666dddddddddddddddddd6666666667777777777666dddddddddddddddddd6666777766666666666666dddddddd4ddddddddd666666666777
            66777666ddddddddddddddddddddddd66666666666666666ddddddddddddddddddddddd66666666666777666dddddddddddd4dddddddddd66666666666666666ddddddddddddddddddddddd666666666
            d66666ddddddddddddddddddddddddddd66dddddd66666ddddddddddddddddddddddddddd66dddddd66666ddddddddddddddddddddddddddd66dddddd66666ddddddddddddddddddddddddddd66ddddd
            ddd66ddddddddddddddddddddddddd666dddddddddd66ddddddddddddddddddddddddd666dddddddddd66ddddddddddddddddddddddddd666dddddddddd66ddddddddddddddddddddddddd666ddddddd
            ddddd66ddddddddddddddddddddd66ddddddddddddddd66dddddddddddddddd4dddd66ddddddddddddddd66dddddddddddd4dddddddd66ddddddddddddddd66ddddddddddddddddddddd66dddddddddd
            ddddddd666dddddddddddddddd66ddddddddddddddddddd666dddddddddddddddd66ddddddddddddddddddd666dddddddddddddddd66ddddddddddddddddddd666dddddddddddddddd66dddddddddddd
            dddddddddd666ddddddddddd66dddddddddddddddddddddddd666ddddddddddd66ddddddddddddddd4dddddddd666ddddddddddd66ddddddddddddddddd666dddd666ddddddddddd66dddddddddddddd
            dddddddddddd666ddddddd66dddddddddddddddddddddddddddd666ddddddd66dddddddddddddddddddddddddddd666ddddddd66ddddddddddddddddddd67766666d666ddddddd66dddddddddddddddd
            dddddddddddddd666ddd66dddddddddddddddddddddddddddddddd666ddd66dddddddddddddddddddddddddddddddd666ddd66ddddddddddddddddddddd67776766666666ddd66dddddddddddddddddd
            dddddddddddddddd6666ddddddddddddddddd4dddddddddddddddddd6666dddddddddddddddddddddddddddddddddddd6666ddddddddddddddddddddddd66777767776666666dddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd67766777676666ddd6666666ddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666776677767666667677666666ddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666677766777767767767766666ddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666ddd66766667776667677677667766ddddd
            ddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd67777766667677766666767677677677776ddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd667777776677667766777767667766666676ddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666777766776767777766677766ddd6666ddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddd6777667777677666777776d667666dddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd667777767776777666666676d6766ddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd67776666666667e66eee66676d666ddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd67766d6ddddd666eeebeee6676dddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddd6666dddddddddddddeebbee676dddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddebbbed66dddddddddddddddd
            dddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeebbeddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddebeeddddddddddddddddddd
            ddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeebeddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68666666668ddddddddddddddddddebbeddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd866999666996666668ddddddddddddddebbedddddddddddd4dddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd866669999999699969999968ddddddddddddeeeeedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8699999999999699669999996ddddddddddddebbbedddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd896999999999999996999999668dd86dddddddebbbedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd899666999999999999699699669666698ddddddeeeeedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd86699996999999999999699666699999996ddddddebbbedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd699999669999999999966999999999999996dddddeeeeedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd86699999999999999999999999999999999996ddddebbbeedddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddd69999999999999999999999999999999999996ddddeebbeddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8699999996999999999999999999999996999996dddebebeeddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddd4dddddddddddddddd6999999966699999999999999999999996999996ddeebeeedddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66999999966699994449999999999999999669996deeeeeeedddddddddddddddddddd
            dddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd86666999999999444444999999999999999969996dddddeeedddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd669996999999994444444999999999999999969996dddddddedddddddddddddddddddd
            dddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8699999999999994444444499999999969999966968dddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd699999999999999999999999999999966999999696ddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6699999999999999999999999999996669999999668ddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8699999999999999999999999999999699999999966dddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddd699999999999999999999999999999969999999998ddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6699999999999999999999969999999669999999966ddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd899999999999999999999996999999669999999686ddd4dddddddddddddddddddddddddddd
            dddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6999999999999999999999996999999666866686dddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd69999699999999999999999969996686dddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd69999969999999996999999669966ddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8686669999999999699999969968dddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddd6699999999996669999996666ddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8699999966999999999668ddddddddddddddddddddddddddddddddddddddddddddd4dd
            ddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8669966999999999996ddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddd66869999999999986ddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6686999999966dddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66866668dddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddd4dddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
        scroller.setCameraScrollingMultipliers(0.25, 0)
    }
    if (varlevelselect >= 7 && varlevelselect <= 10) {
        scene.setTile(7, img`
            4 2 4 4 2 5 5 4 4 4 5 5 4 2 2 4 
            7 5 7 7 7 7 5 2 7 7 7 4 4 7 4 5 
            7 7 7 7 7 6 7 4 7 7 6 6 7 4 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 e e e 7 d e 7 e 7 e e e e e 7 
            7 e 7 7 e e e e e 7 7 7 e e d e 
            7 e e e e e e e 7 e e 7 e e e d 
            e 7 7 e e e e 7 e e e e e e e e 
            e e e e e e e e d e e e e e e e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e d e e e d e e e 
            e e d e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e d e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
        scene.setTile(1, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 f . . . . . . . . . . . 
            . 1 f f 1 1 f . . 1 f . . . . . 
            . f 1 1 f f 1 1 f f f . . . . . 
            . 1 f f 1 1 f f 1 1 f . . . . . 
            . f 1 1 f f 1 1 f f f . . . . . 
            . 1 f . . 1 f f 1 1 f . . . . . 
            . . . . . . . 1 f . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            `, true)
        scene.setTile(6, img`
            e e e e e e e e e d e e e e e e 
            e e d e e e e e e e e e e e d e 
            e d e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e d e e d e e e e e e e 
            e e d e e e e e e e e e e e d e 
            e e e e e e e e e e e d e e e d 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e d e e e e e e e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e d e e e d e e e 
            e e d e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e d e 
            e e e e e d e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, false)
        scene.setTile(15, img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a 3 3 a a a a a a a a a a a 
            a a 3 a a 3 a a a a a a a a a a 
            a a 3 a a 3 a a a a a a a a a a 
            a a a 3 3 a a a a a a a a a a a 
            a a a a a a a a a a 3 3 a a a a 
            a a a a a a a a a 3 a a 3 a a a 
            a a a a a a a a a 3 a a 3 a a a 
            a a a a a a a a a a 3 3 a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, false)
        scene.setTile(14, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(13, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(2, img`
            a a a a a a a a a a a a a 3 a a 
            a a a a a a a a 3 a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a 3 a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a 3 a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a 3 a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, true)
        scene.setTile(9, img`
            f e e e e e e e e e e e e e e e 
            e e e e e e e e e f e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e f e e e e e e 
            e e e e e e e f e e e e e e f e 
            e e e e f e e e e f e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e f e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e f e e e e 
            e e e e f e e e e f e e e e e e 
            e e e e e e e e e e e e e f e e 
            e f e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
        scene.setTile(4, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(12, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(3, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddd
            ddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3dddddddddddddddd
            ddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333ddddddddddddddd
            dddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddd
            ddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333dddddddddddddd
            ddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3dddddddddddddd
            ddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333dddddddddddddddd
            ddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333dddddddddddddd
            ddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333dddddddddddddd
            ddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333dddddddddddd
            dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
            d33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbddddd
            33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd
            333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd
            d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
            d333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3d
            33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd
            333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
            3333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd33
            3333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd33
            3333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd33
            3333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd33
            3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
            3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
            3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
            333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
            33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
            33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
            33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
            3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
            3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
            3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
            3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
            bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
            3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
            3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
            3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
            44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
            44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
            44444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
            44444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
            44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
            3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
            33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
            33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
            33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
            33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
            333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
            333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
            333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
            3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
            33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
            33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
            33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
            33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
            33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
            33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
            33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
            33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
            33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
            33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
            3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
            3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
            3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
            dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
            3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
            3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
            3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
            ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
            ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
            ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
            ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
            ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
            ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
            ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
            ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
            ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
            ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
            ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
            ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
            ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
            ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
            ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
            ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
            443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
            44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444454444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444244444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444424444444444444444444444444444444454444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444445444444444444444444444444444444444444444445444444444544444444444444444444445444444444444445444424444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444445444444444444444444444444444444444444444444444444442444444444444444444444
            4444444444444444444444444444444544444444444444444244444444444444444444444444444444444444444444444444444444444444454444444444444444444444444444444444444444444444
            4444444444444444444424444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444244444444444444444444444444444444444444444444444444444444444444444444444444444444544444444444444444444444444444444442444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444442444444444444444444444444444444444444444444444444444444445444444244444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444224444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444445444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444244444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444544444444444444444444444444444444444444444444444444544444444444445444444444444444444444444444444444444444444444244444444424444
            4444444444444444444444444444444444444444424444444444444445444444444444444444444444444444444444444444444444444444454444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445444444444444444444444454444444444444444444544444444444444444444444444
            4444444444444444444444444444444444444444444444442444444444444444244444444444444444444444444444444444444444444444444444444444444444444444442444444444444444444444
            4444444444444444544444445444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444442444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444244444444444444444444444444444444444444444444444444544444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444442444444444444444444444444444444444444444444444444444442444444444444244444444444444444444444444444444244444444454424444444444444444444444444444442444444
            4444444444444444244444444444444444554444444444444444444444444444444424444444444444444444444444444444442444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444445444444444444444444444444444444444444444444444444444444444444444444444444444444444445444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444545444444444
            4444444444444444444444444444444444444444444444444445444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            `)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
        scroller.setCameraScrollingMultipliers(0.25, 0)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mainslime, ActionKind.Walking)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mainslime, ActionKind.Idle)
})
sprites.onCreated(SpriteKind.firespirit, function (sprite) {
    sprite.setVelocity(20, 0)
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    varlevelselect += 1
    funcnewlvl()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.beamUp.play()
})
function funcnewlvl () {
    funcdestroysprites()
    functilemaps()
    funcselectlvl()
    funccoins()
    funcslingshots()
    funcflame_spirits()
}
function funccreateslime () {
    mainslime = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mainslime, 50, 0)
    scene.cameraFollowSprite(mainslime)
    mainslime.ay = 150
    funcslime_anim()
    animation.setAction(mainslime, ActionKind.Idle)
    varlevelselect = 6
}
function funcslime_anim () {
    slimewalk = animation.createAnimation(ActionKind.Walking, 200)
    slimewalk.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimewalk.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 . . 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimewalk.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 8 8 8 8 . 8 8 8 8 8 . . . . 
        . 8 8 8 8 . . . 8 8 8 8 8 . . . 
        . 8 8 8 8 . . . . 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimewalk.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 . . 8 8 8 8 8 . . 
        . . 8 8 8 8 . . . . 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimerest = animation.createAnimation(ActionKind.Idle, 1000)
    slimerest.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimerest.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimejump = animation.createAnimation(ActionKind.Jumping, 200)
    slimejump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 . . 8 8 8 8 8 . . 
        . . 8 8 8 8 . . . . 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimejump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 . . 8 8 8 8 8 . . . . 
        . 8 8 8 . . . . 8 8 8 8 8 . . . 
        . 8 8 8 . . . . . . 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimejump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 . . . . . . . 
        . . 8 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 8 8 8 . . . 8 8 8 8 8 . . . 
        8 8 8 8 . . . . . 8 8 8 8 . . . 
        8 8 8 . . . . . . 8 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimejump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 . . . . . . . 
        . . 8 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 8 8 8 . . . 8 8 8 8 8 . . . 
        . 8 8 8 . . . . . 8 8 8 8 . . . 
        8 8 8 . . . . . . 8 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimejump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 8 8 8 . . . 8 8 8 8 8 . . . 
        . 8 8 8 . . . . . 8 8 8 8 . . . 
        8 8 8 . . . . . . 8 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    slimejump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 . . . . . . . 
        . . 8 8 8 8 8 8 8 8 . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 8 8 8 . . . 8 8 8 8 8 . . . 
        8 8 8 8 . . . . . 8 8 8 8 . . . 
        8 8 8 . . . . . . 8 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        8 8 8 . . . . . . . 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(mainslime, slimewalk)
    animation.attachAnimation(mainslime, slimerest)
    animation.attachAnimation(mainslime, slimejump)
}
function funcselectlvl () {
    if (varlevelselect == 1) {
        scene.setTileMap(img`
            .e..................
            ....................
            ....................
            ....................
            ....................
            ......7.........1...
            7777..6..7..777777..
            6666226226..666666..
            6666666666..666666..
            6666666666..........
            6666666666....5.....
            6666666666.........d
            66666666667777777777
            66666666666666666666
            66666666666666666666
            22222222222222222222
            `)
    } else if (varlevelselect == 2) {
        scene.setTileMap(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ..1.................
            ..7777..............
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .........d..........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .........d..........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .........d..........
            ....................
            ....................
            ....................
            ...................5
            ................d...
            ................7777
            ................6666
            .........d......6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            .........d......6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            .........d......6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            .........d......6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            .........d......6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            .........d......6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            ................6666
            .......e.d.....66666
            .............6666666
            22222777772222222222
            `)
    } else if (varlevelselect == 3) {
        scene.setTileMap(img`
            e.............................
            ..............................
            ..........7................1..
            77......7.6..7..7..7.....777..
            66......6.6..6..6..6.7...666.2
            267...7.6222f2ff2..6.67..6222f
            222...22222222ff2222f222222222
            222222222f2222ff2222f22f22f222
            22f22222222222ff2222f222222222
            22222222222229.......92222f222
            2222222222f229...5...922222222
            22f22222222229.....9d922222222
            222222222222299999999922f22222
            222222222222222222222222222222
            222222222222222222f22222222222
            222222222222222222222222222222
            `)
    } else if (varlevelselect == 4) {
        scene.setTileMap(img`
            ..5.....................................
            ..77777.................................
            ..66666.................................
            ...666..7........7......................
            .................6.7....................
            ..e.......7.....76.67...................
            .................2266.................1.
            ..777.......7..7.222c...4..c........777.
            ..666............222.777777.........666.
            22266.7...7.....22222666666.7.....7..222
            22222.6...6....222222222666.6.....6.2222
            22222222222222222222222222226.7..7622222
            22222222222222222222222222222.6..2222222
            2222222222222222222222222222222222222222
            2222222222222222222222222222222222222222
            2222222222222222222222222222222222222222
            `)
    } else if (varlevelselect == 5) {
        scene.setTileMap(img`
            ..........
            ..........
            ..........
            ..........
            1.........
            7.........
            .7........
            ..........
            .7........
            ..........
            ..7.......
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ....d.....
            ...77.....
            ...66.....
            ..7..7....
            .....c..4c
            .7....777.
            ......666.
            7........7
            ..........
            7......7..
            ..........
            .7....7...
            c..4...c..
            .77..7777.
            c.4.....c.
            7777..77..
            c...4..c..
            .77..77...
            ..........
            ...77.....
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            d.........
            7.........
            ..7.......
            ..........
            ....7.....
            ......7...
            ..........
            ..7....7..
            .....7....
            7.........
            ..........
            .7........
            ..........
            ..77......
            ..66......
            ..........
            .........5
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ......d...
            ......7...
            ..........
            .e...7....
            ..........
            .777......
            .666......
            ..........
            ..........
            222222222d
            `)
    } else if (varlevelselect == 6) {
        scene.setTileMap(img`
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            .e........
            ..........
            7777......
            9......4.9
            9......4.9
            9......4.9
            9......4.9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9.4......9
            9.4......9
            9.4......9
            9.4......9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9......4.9
            9......4.9
            9......4.9
            9......4.9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9.4......9
            9.4......9
            9.4......9
            9.4......9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9......4.9
            9......4.9
            9......4.9
            9......4.9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9.4......9
            9.4......9
            9.4......9
            9.4......9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9......4.9
            9......4.9
            9......4.9
            9......4.9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9.4......9
            9.4......9
            9.4......9
            9.4......9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9......4.9
            9......4.9
            9......4.9
            9......4.9
            9.....4..9
            9.....4..9
            9.....4..9
            9.....4..9
            9....4...9
            9....4...9
            9....4...9
            9....4...9
            9...4....9
            9...4....9
            9...4....9
            9...4....9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            9.4......9
            9.4......9
            9.4......9
            9.4......9
            9..4.....9
            9..4.....9
            9..4.....9
            9..4.....9
            ..........
            .....1....
            7777777777
            `)
    } else {
        game.over(true)
    }
    scene.placeOnRandomTile(mainslime, 14)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    scene.placeOnRandomTile(mainslime, 14)
    music.smallCrash.play()
    scene.cameraShake(4, 500)
})
let slimejump: animation.Animation = null
let slimerest: animation.Animation = null
let slimewalk: animation.Animation = null
let varlevelselect = 0
let sptblock_fs: Sprite = null
let purpobstaclearray: tiles.Tile[] = []
let sptfs: Sprite = null
let orangearray: tiles.Tile[] = []
let sptfblauncher: Sprite = null
let pinktile: tiles.Tile[] = []
let mainslime: Sprite = null
let sptlauncher: Sprite = null
let tanarray: tiles.Tile[] = []
let coiners: Sprite = null
let coinlist: tiles.Tile[] = []
funcstartgame()
game.onUpdateInterval(5000, function () {
	
})
