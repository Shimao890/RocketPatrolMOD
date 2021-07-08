

  class Menu extends Phaser.Scene  {
    constructor() {
        super("menuScene");
    }
    initial() {

    }
    preload() {
        this.load.audio('sfx select', './rocketpatrolMOD/assets/mousedown2.wav');
        this.load.audio('sfx exlopsion', './rocketpatrolMOD/assets/ship explode.wav');
        this.load.audio('sfx shot', './rocketpatrolMOD/assets/rocket shot.wav');
        
        
    }
    create() {
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '40px',
            backgroundColor: '#F3b141',
            color: '#843605',
            aligh: 'center',
            padding:{
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width / 2, game.config.height / 2 -(borderUIsize + borderPadding), 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/ 2 , 'Use arrow to move and F to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUIsize + borderPadding, 'Use left arrow to start the game', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.sound.play('sfx select');
            this.scene.start('playScene');
        }
    }
}