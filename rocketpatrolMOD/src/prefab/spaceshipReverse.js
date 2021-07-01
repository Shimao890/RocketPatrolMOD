class SpaceshipReverse extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 4;
    }
    update() {
        this.x += this.moveSpeed;
        if(this.x >= game.config.wdith + this.width){
            this.reset();
        }
    }
    reset() {
        this.x = 0;
    }
}