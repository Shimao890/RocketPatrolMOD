class play extends Phaser.Scene {
    constructor() {
        super("playScene");

    }
preload() {
    this.load.image('rocket','./rocketpatrolMOD/assets/rocket asset.png');
    this.load.image('spaceships','./rocketpatrolMOD/assets/spaceship asset.png');
    this.load.image('spaceship2','./rocketpatrolMOD/assets/spaceshipNew.png');
    this.load.image('starfield','./rocketpatrolMOD/assets/starfield.jpg');
    this.load.spritesheet('explosion', './rocketpatrolMOD/assets/explosion asset.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9} );
    this.load.audio('sfx select', './rocketpatrolMOD/assets/mousedown2.wav');
    this.load.audio('sfx shot','./rocketpatrolMOD/assets/rocket shot.wav');
    this.load.audio('background music','./rocketpatrolMOD/assets/Starcraft Main Title.mp3');
    this.load.audio('explosion1','./rocketpatrolMOD/assets/explo1.wav');
    this.load.audio('explosion3','./rocketpatrolMOD/assets/explo3.wav');
    this.load.audio('explosion4','./rocketpatrolMOD/assets/explo4.wav');
    this.load.audio('explosion','./rocketpatrolMOD/assets/explo0.wav');


}
create() {
    this.add.text(20,20, "Rocekt Patrol Play");
    this.starfield = this.add.tileSprite(0,0,640,480,'starfield').setOrigin(0,0);
    //green UI background
    this.add.rectangle(0,borderUIsize + borderPadding, game.config.width, borderUIsize * 2,0x00ff00).setOrigin(0,0);
    this.add.rectangle(0, 0,game.config.width,borderUIsize,0xFFFFFF).setOrigin(0,0);
    this.add.rectangle(0, game.config.height - borderUIsize, game.config.width,borderUIsize,0xFFFFFF).setOrigin(0,0);
    this.add.rectangle(0, 0, borderUIsize,game.config.height,0xFFFFFF).setOrigin(0,0);
    this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize,game.config.height,0xFFFFFF).setOrigin(0,0);

    this.p1Rocket = new Rocket (this, game.config.width/2,game.config.height - (borderUIsize + borderPadding), 'rocket').setOrigin(0.5,0);
    this.ship01 = new Spaceship (this, game.config.width + borderUIsize * 6, borderUIsize * 4, 'spaceships', 0, 30).setOrigin(0,0);
    this.ship02 = new Spaceship (this, game.config.width + borderUIsize * 3, borderUIsize * 5 + borderPadding * 2, 'spaceships', 0, 20).setOrigin(0,0);
    this.ship03 = new Spaceship (this, game.config.width, borderUIsize * 6 + borderPadding * 4, 'spaceships', 0, 10).setOrigin(0,0);
    this.ship05 = new Spaceship (this, game.config.width  + borderUIsize * 6, borderUIsize * 6 + borderPadding * 6, 'spaceships', 0, 10).setOrigin(0,0);
    this.ship04 = new Spaceship2 (this, game.config.width  + borderUIsize * 6, borderUIsize * 6 + borderPadding * 8, 'spaceship2', 0, 40).setOrigin(0,0);
    

    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    input = this.input;
    mouse = this.input.mousePointer;
    
    this.anims.create({
        key: 'explode', 
        frames: this.anims.generateFrameNumbers('explosion',{start:0, end: 9, first: 0}), 
        frameRate:30});
    //add score part from Nathan Altice
    this.p1Score = 0;
    let scoreConfig = {
        fontFamily: 'Gerogia',
        fontSize: '28px',
        backgroundColor: '#F3B141' ,
        color: '#843605',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 100
    }
    this.scoreLeft = this.add.text(borderUIsize + borderPadding, borderUIsize + borderPadding * 2, this.p1Score ,scoreConfig);
    this.gameOver = false;
    scoreConfig.fixedWidth = 0;
    this.clock = this.time.delayedCall(60000, () => {
        this.add.text(game.config.width /2, game.config.height/2, 'Game Over', scoreConfig).setOrigin(0.5);
        this.add.text(game.config.width /2, game.config.height/2 + 64, 'Press R to restart or M to Menu', scoreConfig).setOrigin(0.5);
        this.gameOver = true;
    },null, this);
    this.sound.play('background music');
}
update() {
    this.starfield.tilePositionX -= 4;
    if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
        this.load.audio('sfx select', './assets/mousedown2.wav');
        this.scene.restart('background music')
    }
    if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyM)){
        this.load.audio('sfx select', './assets/mousedown2.wav');
        this.sound.get('background music').stop();
        this.scene.start('menuScene');
    }

    if(!this.gameOver) {
    this.p1Rocket.update();
    this.ship01.update();
    this.ship02.update();
    this.ship03.update();
    this.ship04.update();
    this.ship05.update();
    }
    if(this.checkCollision(this.p1Rocket,this.ship03)){
        this.p1Rocket.reset();
        this.shipExplode(this.ship03);
    }
    if(this.checkCollision(this.p1Rocket,this.ship02)){
        this.p1Rocket.reset();
        this.shipExplode(this.ship02);
    }
    if(this.checkCollision(this.p1Rocket,this.ship01)){
        this.p1Rocket.reset();
        this.shipExplode(this.ship01);
    }
    if(this.checkCollision(this.p1Rocket,this.ship04)){
        this.p1Rocket.reset();
        this.shipExplode(this.ship04);
    }
    if(this.checkCollision(this.p1Rocket,this.ship04)){
        this.p1Rocket.reset();
        this.shipExplode(this.ship05);
    }

}
checkCollision(rocket, ship){
    if(rocket.x < ship.x + ship.width && 
        rocket.x + rocket.width > ship.x &&
        rocket.y < ship.y + ship.height &&
        rocket.y + rocket.height > ship.y) {
        return true;
    }
    return false;

}
getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
shipExplode(ship) {
    ship.alpha = 0;
    let boom = this.add.sprite(ship.x,ship.y,'explosion').setOrigin(0,0);
    boom.anims.play('explode');
    boom.on('animationcomplete', () => {
        ship.reset();
        ship.alpha = 1;
        boom.destroy();
    });
    this.p1Score += ship.points;
    this.scoreLeft.text = this.p1Score;
    if(this.getRandomInt(5) == 0 || this.getRandomInt(5) == 1) {
    this.sound.play('exlopsion');
    }
    if(this.getRandomInt(5) == 2) {
        this.sound.play('explosion1');
    }
    if(this.getRandomInt(5) == 3) {
            this.sound.play('explosion3');
    }
    if(this.getRandomInt(5) == 4) {
        this.sound.play('explosion4');
    }    

}   
}
