//var socket = io.connect('http://localhost:8000');
//const socket = io("https://fridgeproject.herokuapp.com")

/*socket.on('welcome', ()=> {
    console.log('this triggers')

    window.location.replace("/welcome")
})*/
if (window.location.pathname === '/shop') {
	function idleLogout() {
		var t;
		window.onload = resetTimer;
		window.onmousemove = resetTimer;
		window.onmousedown = resetTimer;  // catches touchscreen presses as well
		window.ontouchstart = resetTimer; // catches touchscreen swipes as well
		window.onclick = resetTimer;      // catches touchpad clicks as well
		window.onkeydown = resetTimer;
		window.addEventListener('scroll', resetTimer, true); // improved; see comments
	
		function yourFunction() {
			// your function for too long inactivity goes here
			// e.g. window.location.href = 'logout.php';
			window.location.replace("/")
		}
	
		function resetTimer() {
			clearTimeout(t);
			t = setTimeout(yourFunction, 20000);  // time is in milliseconds
		}
	}
	idleLogout();
}

/*
if (window.location.pathname === '/game') {
    socket.on('welcome', ()=> {
        window.location.replace("/welcome")
    })

}

console.log(socket)

socket.on('launch', (data)=> {
    console.log('this came from server')
    if (ball.launched === false) {
		ball.body.setCircle(36);
		ball.body.setCollisionGroup(collisionGroup);
		current_best_text.text = '';
		current_best_score_text.text = '';
		ball.launched = true;
		game.physics.p2.gravity.y = 3000;
		game.add.tween(ball.scale).to({x : 0.6, y : 0.6}, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
		ball.body.velocity.x = data;
		ball.body.velocity.y = -1750;
		ball.body.rotateRight(data / 3);
		whoosh.play();
	}

	//return () => socket.off('launch')
})
/*
socket.on('createball', (data)=> {
    console.log('this came from server')
    spawn.play();
	ball = game.add.sprite(data, 547, 'ball');
	game.add.tween(ball.scale).from({x : 0.7, y : 0.7}, 100, Phaser.Easing.Linear.None, true, 0, 0, false);
	game.physics.p2.enable(ball, false);
	ball.body.setCircle(60); // NOTE: Goes from 60 to 36
	ball.launched = false;
	ball.isBelowHoop = false;
	


})*/
/*
socket.on('release', ()=> {
    release();
})

if (window.location.pathname === '/game') {
var game = new Phaser.Game(500, 625, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
}
function preload() {

    game.load.image('ball', 'assets/images/dairy.png');
    game.load.image('hoop', 'assets/images/basket-4.png');
		game.load.image('side rim', 'assets/images/side_rim.png');
		game.load.image('front rim', 'assets/images/front_rim.png');

		game.load.image('win0', 'assets/images/win0.png');
		game.load.image('win1', 'assets/images/win1.png');
		game.load.image('win2', 'assets/images/win2.png');
		game.load.image('win3', 'assets/images/win3.png');
		game.load.image('win4', 'assets/images/win4.png');
		game.load.image('lose0', 'assets/images/lose0.png');
		game.load.image('lose1', 'assets/images/lose1.png');
		game.load.image('lose2', 'assets/images/lose2.png');
		game.load.image('lose3', 'assets/images/lose3.png');
		game.load.image('lose4', 'assets/images/lose4.png');

		game.load.audio('score', 'assets/audio/score.wav');
		game.load.audio('backboard', 'assets/audio/backboard.wav');
		game.load.audio('whoosh', 'assets/audio/whoosh.wav');
		game.load.audio('fail', 'assets/audio/fail.wav');
		game.load.audio('spawn', 'assets/audio/spawn.wav');

}

var hoop,
 		left_rim,
 		right_rim,
 		ball,
 		front_rim,
 		current_score = 0,
 		current_score_text,
 		high_score = 0,
 		high_score_text,
 		current_best_text;

var score_sound,
		backboard,
		whoosh,
		fail,
		spawn;

var moveInTween,
		fadeInTween,
		moveOutTween,
		fadeOutTween,
		emoji,
		emojiName;

var collisionGroup;

function create() {

    console.log('create function triggered')
	game.physics.startSystem(Phaser.Physics.P2JS);

	game.physics.p2.setImpactEvents(true);

  game.physics.p2.restitution = 0.63;
  game.physics.p2.gravity.y = 0;

	collisionGroup = game.physics.p2.createCollisionGroup();

	score_sound = game.add.audio('score');
	backboard = game.add.audio('backboard');
	backboard.volume = 0.5;
	whoosh = game.add.audio('whoosh');
	fail = game.add.audio('fail');
	fail.volume = 0.1;
	spawn = game.add.audio('spawn');

	game.stage.backgroundColor = "#ffffff";

	// high_score_text = game.add.text(450, 25, 'High Score\n' + high_score, { font: 'Arial', fontSize: '32px', fill: '#000', align: 'center' });
	current_score_text = game.add.text(187, 312, '', { font: 'Arial', fontSize: '40px', fill: '#000', align: 'center' }); // 300, 500
	current_best_text = game.add.text(143, 281, '', { font: 'Arial', fontSize: '20px', fill: '#000', align: 'center' });// 230, 450
	current_best_score_text = game.add.text(187, 312, '', { font: 'Arial', fontSize: '40px', fill: '#00e6e6', align: 'center' }); // 300, 500

	hoop = game.add.sprite(88, 62, 'hoop'); // 141, 100
	left_rim = game.add.sprite(150, 184, 'side rim'); // 241, 296
	right_rim = game.add.sprite(249, 184, 'side rim'); // 398, 296

	game.physics.p2.enable([ left_rim, right_rim], false);

	left_rim.body.setCircle(2.5);
	left_rim.body.static = true;
	left_rim.body.setCollisionGroup(collisionGroup);
	left_rim.body.collides([collisionGroup]);

	right_rim.body.setCircle(2.5);
	right_rim.body.static = true;
	right_rim.body.setCollisionGroup(collisionGroup);
	right_rim.body.collides([collisionGroup]);

	createBall();

	cursors = game.input.keyboard.createCursorKeys();

	game.input.onDown.add(click, this);
	game.input.onUp.add(release, this);


	var instructions = document.createElement("span");
	instructions.innerHTML = "Instructions: Quickly drag the ball to shoot the ball into the hoop!";
	document.body.appendChild(instructions);
}

function update() {

    //console.log('update function triggered')

    //socket.emit('update')

	if (ball && ball.body.velocity.y > 0) {
		front_rim = game.add.sprite(148, 182, 'front rim');
		ball.body.collides([collisionGroup], hitRim, this);
	}

	if (ball && ball.body.velocity.y > 0 && ball.body.y > 188 && !ball.isBelowHoop) {
		ball.isBelowHoop = true;
		ball.body.collideWorldBounds = false;
		var rand = Math.floor(Math.random() * 5);
		if (ball.body.x > 151 && ball.body.x < 249) {
			emojiName = "win" + rand;
			current_score += 1;
			current_score_text.text = current_score;
			score_sound.play();
		} else {
			emojiName = "lose" + rand;
			fail.play();
			if (current_score > high_score) {
				high_score = current_score;
			// 	high_score_text.text = 'High Score\n' + high_score;
			}
			current_score = 0;
			current_score_text.text = '';
			current_best_text.text = 'Current Best';
			current_best_score_text.text = high_score;
		}
		emoji = game.add.sprite(180, 100, emojiName);
		emoji.scale.setTo(0.25, 0.25);
		moveInTween = game.add.tween(emoji).from( { y: 150 }, 500, Phaser.Easing.Elastic.Out, true);
		fadeInTween = game.add.tween(emoji).from( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true, 0, 0, false);
		moveInTween.onComplete.add(tweenOut, this);
	}

	if (ball && ball.body.y > 1200) {
		game.physics.p2.gravity.y = 0;
		ball.kill();
		createBall();
	}

}

function tweenOut() {

    //console.log('tweenOut function triggered')
	moveOutTween = game.add.tween(emoji).to( { y: 50 }, 600, Phaser.Easing.Elastic.In, true);
	moveOutTween.onComplete.add(function() { emoji.kill(); }, this);
	setTimeout(function () {
		fadeOutTween = game.add.tween(emoji).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 0, 0, false);
	}, 450);
}

function hitRim() {

    //console.log('hitRim function triggered')
	backboard.play();

}

function createBall() {

    //console.log('createBall function triggered')

	var xpos = 200;
	/*if (current_score === 0) {
		xpos = 200;
	} else {
		xpos = 60 + Math.random() * 280;
	}
*/
/*
    socket.emit('createball', xpos)
	spawn.play();
	ball = game.add.sprite(xpos, 547, 'ball');
	game.add.tween(ball.scale).from({x : 0.7, y : 0.7}, 100, Phaser.Easing.Linear.None, true, 0, 0, false);
	game.physics.p2.enable(ball, false);
	ball.body.setCircle(60); // NOTE: Goes from 60 to 36
	ball.launched = false;
	ball.isBelowHoop = false;

}

var location_interval;
var isDown = false;
var start_location;
var end_location;

function click(pointer) {

    //console.log('click function triggered')
	var bodies = game.physics.p2.hitTest(pointer.position, [ ball.body ]);
	if (bodies.length) {
		start_location = [pointer.x, pointer.y];
		isDown = true;
		location_interval = setInterval(function () {
			start_location = [pointer.x, pointer.y];
		}.bind(this), 200);
	}

}

function release(pointer) {
    //console.log('release function is triggered')

    //socket.emit('release', pointer)
	if (isDown) {
		window.clearInterval(location_interval);
		isDown = false;
		end_location = [pointer.x, pointer.y];

		if (end_location[1] < start_location[1]) {
			var slope = [end_location[0] - start_location[0], end_location[1] - start_location[1]];
			var x_traj = -2300 * slope[0] / slope[1];
			launch(x_traj);
		}
	}

}

function launch(x_traj) {

    console.log(socket)
    socket.emit('launch', x_traj)
    console.log('launch function triggered')
	if (ball.launched === false) {
		ball.body.setCircle(36);
		ball.body.setCollisionGroup(collisionGroup);
		current_best_text.text = '';
		current_best_score_text.text = '';
		ball.launched = true;
		game.physics.p2.gravity.y = 3000;
		game.add.tween(ball.scale).to({x : 0.6, y : 0.6}, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
		ball.body.velocity.x = x_traj;
		ball.body.velocity.y = -1750;
		ball.body.rotateRight(x_traj / 3);
		whoosh.play();
	}

}*/