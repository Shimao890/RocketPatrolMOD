class Spaceship extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 3;
        this.clock = scene.time.delayedCall(30000, () => {
            this.moveSpeed = 6;
        },null, this);
        
    }
    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}

