function test_pilot () {
    if (play_full == 1) {
        game.splash("Season 1: Test Pilot", "Quack meets Quick")
    }
    quack = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    quack.setPosition(40, 60)
    quack.sayText("quack quack quack quack quack quack quack quack quack quack quack quack quack quack")
    scene.setBackgroundColor(5)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    pause(2000)
    quick = sprites.create(assets.image`quick`, SpriteKind.Player)
    quick.setPosition(120, 60)
    quick.sayText("what...")
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
    pause(2000)
    effects.clouds.startScreenEffect()
    pause(5000)
    game.showLongText("Plot Twist: They can float.", DialogLayout.Bottom)
    game.splash("The End.")
}
let quick: Sprite = null
let quack: Sprite = null
let play_full = 0
music.play(music.createSong(assets.song`floating_ducks_theme`), music.PlaybackMode.LoopingInBackground)
game.splash("Floating Ducks: ALl Seasons")
play_full = 0
if (game.ask("Play All Seasons", "Season and Episode Selection")) {
    music.stopAllSounds()
    play_full = 1
    test_pilot()
} else if (game.ask("Season 1 (Early Access)", "Season 2 (Coming Soon)")) {
    if (game.ask("Test Pilot", "Others")) {
        music.stopAllSounds()
        test_pilot()
    } else if (game.ask("Episode 1: Exploring", "Others")) {
    	
    }
}
