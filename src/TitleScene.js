class TitleScene extends Phaser.Scene {
    
    constructor() {
      super({
        key: 'TitleScene'
      });
    }

    /**
     * Called when browser window resizes
     */
    resize (width, height) {
      console.log("resizing bootscene");
      if (width === undefined) { width = this.sys.game.config.width; }
      if (height === undefined) { height = this.sys.game.config.height; }

      this.cameras.resize(width, height);
      this.physics.world.setBounds(0,0, width, height);
    }

    preload() {
    }

    create() {
        this.events.on('resize', this.resize, this);
        
        this.logo = this.physics.add.image(400, 100, 'logo'); // image was preloaded in the BootScene and given this reference
        this.logo.setVelocity(100, 200);
        this.logo.setBounce(1, 1);
        this.logo.setCollideWorldBounds(true);
    }

    update(time, delta) {
    }

    
}

export default TitleScene;
