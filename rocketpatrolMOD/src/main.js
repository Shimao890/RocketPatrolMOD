let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, play]
}
let game = new Phaser.Game(config);
let borderUIsize = game.config.height / 15;
let borderPadding = borderUIsize/3;
let keyF,keyR, keyLEFT, keyRIGHT, keyM;
// rubric: I finished the tutorial. 
//Implement the speed increase. 
//new scrolling background. 
// replace the UI boarder with a new menu UI. 
// Create a new title screen. 
//I used a new in game sound effect when firing the rocket and when the ship explode. 
//I added a new animatated sprite to the spaceship enemy.
// add new background music in the play scene.
//The sound effect is from StarCraft main theme sound.
//
