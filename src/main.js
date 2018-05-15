import 'phaser';
import BootScene from './BootScene';
import GameScene from './GameScene';
import TitleScene from './TitleScene';


let config = {
    type: Phaser.WEBGL,              // Uses WebGL if available
    parent: 'content',              // container div to load into
    backgroundColor: '0xffffff',
    width: window.innerWidth,       // grab the browser width
    height: window.innerHeight,     // and height
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        }
    },
    scene: [
        BootScene,                  // First scene to load, sets up config and remains loaded
        TitleScene,                 // Show splash screen, instructions, "press space to play" etc
        GameScene,                  // Actual game scene
    ]
};

let game = new Phaser.Game(config);

// listen for browser resize and invoke the game's resize function
window.addEventListener('resize', function (event) {
    game.resize(window.innerWidth, window.innerHeight);
}, false);