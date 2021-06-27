class play extends Phaser.Scene {
    constructor() {
        super("playScene");

    }
preload() {
    this.load.image('rocket','./assets/rocket asset.png');
    this.load.image('spaceships','/assets/spaceship asset.png');
    this.laod.image('starfield','/assets/starfield.png')

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

} 
}
