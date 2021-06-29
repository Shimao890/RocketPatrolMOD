

  class Menu extends Phaser.Scene  {
    constructor() {
        super("menuScene");
    }
    initial() {

    }
    preload() {
    
    }
    create() {
        let menuConfig = {
            fontFamily: 'Courier',
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
        this.add.text(game.config.width/2, game.config.height-(borderUISize + borderPadding), 'rocket Patrol', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height, 'Use arrow to move and F to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';

    }
    update() {
        
    }
}