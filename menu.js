var menu_state = {
    create: function() {
        // Call the 'start' function when pressing the spacebar
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.start, this); 

        // play music
            music = this.game.add.audio("music");        
            music.play();

        // background img
        game.add.sprite(0,0, 'background');

        // Defining variables
        var style = { font: "40px Arial", fill: "#ff4d95", };
        var style2 = { font: "26px Arial", fill: "#ffffff", };
        var style3 = { font: "26px Arial", fill: "#3fffde", };
        var x = game.world.width/2, y = game.world.height/2;
        
        // Adding a text centered on the screen
       
        var text = this.game.add.text(x, y-80, "Welcome to Charlie's Spaceship", style2);
        text.anchor.setTo(0.5, 0.5); 

         var text = this.game.add.text(x, y-50, "Press space to start", style);
        text.anchor.setTo(0.5, 0.5); 

         var text = this.game.add.text(x, y-15, "Arrow keys to control directions", style3);
        text.anchor.setTo(0.5, 0.5); 



        // If the user already played
        if (score > 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+50, "score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5); 
        }
    },

    // Start the actual game
    start: function() {
        this.game.state.start('play');
    }
};