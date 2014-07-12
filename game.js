// Initialize Phaser
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Our 'highscore' global variable
var highscore = 0;

//For highscoreboard

var highscores = [
		{name: "",
		score: "",},

		{name: "",
		score: "",},

		{name: "",
		score: "",}

];


// Define all the states
game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('play', play_state); 
// level 2 game 
game.state.add('play1', play1_state); 
// level 3 game
game.state.add('play2', play2_state); 


// Start with the 'load' state
game.state.start('load');  