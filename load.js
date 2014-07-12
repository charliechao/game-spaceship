var load_state = {  
    preload: function() { 
        // this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('background', 'assets/background.jpg');
        this.game.load.image('bird', 'assets/spaceship.png');  
        this.game.load.image('pipe', 'assets/pipe1.png');  
        this.game.load.image('star', 'assets/star.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
        this.game.load.audio('pipe-hit', 'assets/pipe.wav');
        this.game.load.audio('music', 'assets/music1.wav');
        // For highscore board
        this.load_highscore();
      
    },



    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    },

     load_highscore: function () {
      // Load the highscore from localstorage
        if(typeof(Storage) !== "undefined") {
            var local_highscores = localStorage.getItem("highscores");

            // Only set the highscore if there is actually a value in localstorage
            if (local_highscores) {
                highscores = JSON.parse(local_highscores);
            }
            
        }
   } 

};