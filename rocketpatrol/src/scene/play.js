class play extends Phaser.Scene {
    constructor() {
        super("playScene");

    }
preload() {
    this.load.image('rocket','./assets/rocket asset.png');
    this.load.image('spaceships','./assets/spaceship asset.png');
    this.load.image('starfield','./assets/starfield.png');
    this.load.spritesheet('explosion', './assets/explosion asset.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9} );

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
    

    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    KeyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
    this.anims.create({
        key: 'explode', 
        frames: this.anims.generateFrameNumber('explosion',{start:0, end: 9, first: 0}), 
        frameRate:30});
}
update() {
    this.starfield.tilePositionX -= 4;
    this.p1Rocket.update();
    this.ship01.update();
    this.ship02.update();
    this.ship03.update();
    if(this.checkCollision(this.p1Rocket,this.ship03)){
        this.p1Rocket.reset();
        this.shipeExplode(ship03);
        this.ship03.reset();
    }
    if(this.checkCollision(this.p1Rocket,this.ship02)){
        this.p1Rocket.reset();
        this.shipeExplode(ship02);
        this.ship02.reset();
    }
    if(this.checkCollision(this.p1Rocket,this.ship01)){
        this.p1Rocket.reset();
        this.shipeExplode(ship01);
        this.ship01.reset();
    }
}
checkCollision(rocket, ship){
    if(rocket.x < ship.x + ship.width && 
        rocket.x + rokect.width > ship.x &&
        rocket.y < ship.y + ship.height &&
        rocket.y + rocket.height > ship.y) {
        return true;
    }
    return false;

}
shipeExplode(ship) {
    ship.alpha - 0;
    let boom = this.add.sprite(ship.x,ship.y,'explosion').setOrigin(0,0);
    boom.anims.Play('explode');
    boom.on('animationComplete', () => {
        ship.reset();
        ship.alpha = 1;
        boom.destroy();
    })

}   
}
