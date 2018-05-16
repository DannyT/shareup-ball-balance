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
    this.ballGraphics.fillCircle(50, 50, 50);

    this.ballGraphics.generateTexture('ballGraphics', 100, 100);
    this.ball = this.physics.add.image(100, 100, 'ballGraphics');

    
    this.ball.setBounce(1, 1);
    this.ball.setCollideWorldBounds(true);

    if (window.DeviceOrientationEvent) {
		
      window.addEventListener("deviceorientation", (event) => {
        this.ball.setVelocity(event.gamma*25, event.beta*25);
      });
    }
    else {
      console.log("Sorry, your browser doesn't support Device Orientation");
    };
  }

  update(time, delta) {
  }

  
}

export default GameScene;