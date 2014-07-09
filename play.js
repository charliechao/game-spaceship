var play_state = {

    // No more preload, since it is already done in the 'load' state

    create: function() { 

        // background img
        game.add.sprite(0,0, 'background');

        //control keys
        var up_key = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        up_key.onDown.add(this.jump, this);          

        var down_key = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        down_key.onDown.add(this.drop, this); 

        var left_key = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        left_key.onDown.add(this.move_left, this); 

        var right_key = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        right_key.onDown.add(this.move_right, this); 

        // add pipes
        this.pipes = game.add.group();
        this.pipes.createMultiple(100, 'pipe');  
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);           

        this.bird = this.game.add.sprite(180, 300, 'bird');
        score = 0; 
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style); 

        this.jump_sound = this.game.add.audio('jump');
        this.pipe_hit_sound = this.game.add.audio('pipe-hit');


    },

    update: function() {

        if (this.bird.inWorld == false)
            this.restart_game();
            this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this); 
            
            // setup default movements
            this.bird.body.velocity.y = - 20;
            this.bird.body.velocity.x = 0;

    },


    // functions for movements
    jump: function() {
        
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.y -= 2000;
        this.jump_sound.play();
    },


    drop: function() {
        
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.y += 2000;
        this.jump_sound.play();
    },

    move_left: function() {
       
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.x -= 2000;    
        this.jump_sound.play();
    },

    move_right: function() {
       
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.x += 2000;
        this.jump_sound.play();
    },


    // what happens when hits pipes
    hit_pipe: function() {
        if (this.bird.alive == false)
            this.restart_game();

        this.bird.alive = false;
        this.game.time.events.remove(this.timer);

        this.pipes.forEachAlive(function(p){
            p.body.velocity.y = 0;
        }, this);
        this.pipe_hit_sound.play();
    },

    restart_game: function() {
        this.game.time.events.remove(this.timer);

        // This time we go back to the 'menu' state
        this.game.state.start('menu');
    },

    add_one_pipe: function(x, y) {
        var pipe = this.pipes.getFirstDead();
        pipe.reset(y, x);
        pipe.body.velocity.y = 200; 
        pipe.outOfBoundsKill = true;
    },

    add_row_of_pipes: function() {
        var hole = Math.floor(Math.random()*5)+1;
        
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1) 
                this.add_one_pipe(0, i*60+10);   
        
        // Not 'this.score', but just 'score'
        score += 1; 
        this.label_score.content = score;  
    },
};