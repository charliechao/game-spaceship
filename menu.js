var menu_state = {
    create: function() {
        // Call the 'start' function when pressing the spacebar
        var one_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        one_key.onDown.add(this.start, this); 

        // start key for level 2
         var two_key = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        two_key.onDown.add(this.start1, this); 

        // start key for level 3
         var three_key = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        three_key.onDown.add(this.start2, this);

        // play music
            music = this.game.add.audio("music");        
            music.play();

        // background img
        game.add.sprite(0,0, 'background');

        // Defining style variables
        var style = { font: "30px Arial", fill: "#d0ffe2", };
        var style2 = { font: "26px Arial", fill: "#ff6bda", };
        var style3 = { font: "26px Arial", fill: "#3fffde", };
        var style4 = { font: "40px Arial", fill: "#ff1b37", };
        var x = game.world.width/2, y = game.world.height/2;
        
        // Adding text centered on the screen
       
        var text = this.game.add.text(x, y-180, "Welcome to Charlie's Spaceship", style2);
        text.anchor.setTo(0.5, 0.5); 

         var text = this.game.add.text(x, y-125, "Press '1' for easy", style);
        text.anchor.setTo(0.5, 0.5); 

         var text = this.game.add.text(x, y-90, "Press '2' for hard", style);
        text.anchor.setTo(0.5, 0.5); 

         var text = this.game.add.text(x, y-50, "Press '3' if you are INSANE!!!", style);
        text.anchor.setTo(0.5, 0.5); 

         var text = this.game.add.text(x, y, "Arrow keys to control directions", style3);
        text.anchor.setTo(0.5, 0.5); 



        // If the user already played, display highscore board
           if (highscores.length > 0) {
         var highscore_label = this.game.add.text(x, y+50, "Highscore", style);
            highscore_label.anchor.setTo(0.5, 0.5);  
           
        var highscores_summary = this.game.add.text(x, y+75,this.highscores_summary_text(), style);            highscores_summary.anchor.setTo(0.5, 0);        
                   
       } 
    },

    highscores_summary_text: function () {
        var summary ="";
        for (var i = 0; i< highscores.length; i++) { 
          summary = summary + highscores[i].name + " \t\t\t " + highscores[i].score + "\n"; 
        }
        return summary;       
    },

    // Start the actual game
    start: function() {
        this.game.state.start('play');
    },
    // level 2 game
    start1: function() {
        this.game.state.start('play1');
    },
    start2: function() {
        this.game.state.start('play2');
    },
};