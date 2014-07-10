var load_state = {  
    preload: function() { 
        // this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('background', 'assets/background.jpg');
        this.game.load.image('bird', 'assets/spaceship.png');  
        this.game.load.image('pipe', 'assets/pipe1.png');  
        this.game.load.image('star', 'assets/star.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
        this.game.load.audio('pipe-hit', 'assets/pipe.wav');
        this.game.load.audio('music', 'assets/music.wav');
        //check if there is local storage
        if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
      var  local_highscore = localStorage.getItem("highscore");
    // only set the highscore if there is a actual value in localStorage 
            if (local_highscore) {
               highscore = local_highscore;     
            }

        } 

    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};