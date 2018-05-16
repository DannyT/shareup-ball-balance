class GameScene extends Phaser.Scene {
  
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  preload() {
  }

  create() {
    // draw a ball
    this.ballGraphics = this.make.graphics();
    this.ballGraphics.fillStyle(0x000000, 1.0);
    this.ballGraphics.fillCircle(100, 100, 100);

    this.ballGraphics.generateTexture('ballGraphics', 200, 200);
    this.ball = this.physics.add.image(100, 100, 'ballGraphics');

    this.ball.setVelocity(100, 200);
    this.ball.setBounce(1, 1);
    this.ball.setCollideWorldBounds(true);
  }

  update(time, delta) {
  }

  
}

export default GameScene;