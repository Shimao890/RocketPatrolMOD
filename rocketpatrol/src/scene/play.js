class play extends Phaser.scene {
    constructor() {
        super("playScene");

    }
preload() {
    this.load.image();
}
create() {
    this.add.text(20,20, "Rocekt Patrol Play");
    //green UI background

}
}
