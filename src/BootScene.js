class BootScene extends Phaser.Scene {
    
  constructor() {
      super({
        key: 'BootScene'
      });
    }

    preload(){
      this.load.image('logo', 'assets/moov2-logo.png');
    }

    create(){
       this.scene.start('TitleScene');
    }
}

export default BootScene;
