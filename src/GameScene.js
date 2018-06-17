class GameScene extends Phaser.Scene {
  
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  preload() {
    
  }

  create() {

    var map = this.make.tilemap({ key: 'map' });
    var tileset = map.addTilesetImage('terrain');
    var ground = map.createStaticLayer('ground', tileset, 0, 0);
    var path = map.createStaticLayer('path', tileset, 0, 0);

    this.cameras.main.setBounds(0, 0, ground.width, ground.height);
    this.physics.world.setBounds(0, 0, ground.width, ground.height);

    // draw a ball
    this.ballGraphics = this.make.graphics();
    this.ballGraphics.fillStyle(0x000011, 1.0);
    this.ballGraphics.fillCircle(10, 10, 10);

    this.ballGraphics.generateTexture('ballGraphics', 100, 100);
    this.ball = this.physics.add.image(0, 0, 'ballGraphics');

    this.ball.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.ball, true, 0.05, 0.05, 0.5, 0.5);

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