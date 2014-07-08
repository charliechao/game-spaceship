var load_state = {  
    preload: function() { 
        // this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('background', 'assets/background.jpg');
        this.game.load.image('bird', 'assets/spaceship.png');  
        this.game.load.image('pipe', 'assets/pipe1.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};