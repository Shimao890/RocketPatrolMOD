

  class Menu extends Phaser.Scene  {
    constructor() {
        super("menuScene");
    }
    initial() {

    }
    preload() {
        this.load.audio('sfx select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx exlopsion', './assets/assets_explosion38.wav');
        this.load.audio('sfx shot', './assets/assets_rocket_shot.wav');
        
        
    }
    create() {
        let menuConfig = {
            fontFamily: 'starcraftFont',
            fontSize: '28px',
            backgroundColor: '#F3b141',
            color: '#843605',
            aligh: 'right',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width / 2, game.config.height / 2 -(borderUIsize + borderPadding), 'rocket Patrol', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/ 2 , 'Use arrow to move and F to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUIsize + borderPadding, 'Use left arrow to start the game', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start('playScene');
        }
        this.sound.play('sfx select');

        
    }
}