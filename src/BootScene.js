class BootScene extends Phaser.Scene {
    
  constructor() {
      super({
        key: 'BootScene'
      });
    }

    preload(){
      this.load.image('logo', 'assets/moov2-logo.png');
      this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');
      this.load.image('terrain', 'assets/tilesets/snow-expansion.png');
    }

    create(){
       this.scene.start('TitleScene');
    }
}

export default BootScene;
