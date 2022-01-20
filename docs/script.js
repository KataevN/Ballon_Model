const CANVAS = document.querySelector("#canvas");
const CTX = CANVAS.getContext("2d");
const PARTICLE_RADIUS = 1;
const PARTICLE_COLOR = "#0000FF";
const DEFAULT_COLOR = "#000000";
const SPRING_COLOR = DEFAULT_COLOR; 
const VECTOR_COLOR = "#0000FF";
const WALL_COLOR = "#0000FF";
const DOT_RADIUS = 1;
const WIDTH = 700;
const HEIGHT = 700;
const dt = 0.01;

const NUMBER_OF_PARTICLES = 100;
const BALL_RADIUS = 100;
const PARTICLE_MASS = 1;
const SPRING_ELASTICITY = 10;
const PRESSURE_PARAMETER = 200;
const START_X = WIDTH / 4;
const START_Y = HEIGHT / 2;
const BALL_VELOCITY_X = -10;
const BALL_VELOCITY_Y = 5;
const WALL_X = 40;
const WALL_Y = 40;
const WALL_WIDTH = 10;
const WALL_HEIGHT = WIDTH - WALL_Y * 2;

const EPSILON = 1;
const SIGMA = 1;

let _max_vector_length = 0;

CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;

const START_BUTTON = document.getElementById("start");
const STOP_BUTTON = document.getElementById("stop");

function drawDot(ctx, dot, dot_color){
    let x = dot[0];
    let y = dot[1];

    ctx.fillStyle = dot_color;
    ctx.beginPath();
    ctx.arc(x, y, DOT_RADIUS, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = DEFAULT_COLOR;
}

function drawLine(ctx, x_0, y_0, x_1, y_1, color){
    
}

function clearCanvas(ctx){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

let ball = null;
let wall = null;

function main(){
    clearCanvas(CTX);
    wall.draw(CTX);
    ball.draw(CTX);
    ball.recalculatePositions(CTX, WIDTH, HEIGHT, wall);
}

let timerId = null;



START_BUTTON.addEventListener("click", () => {
	ball = null;
	wall = null;
	//debugger
	if (timerId == null){
		ball = new Ball(
		NUMBER_OF_PARTICLES,
		BALL_RADIUS, 
		PARTICLE_MASS, 
		SPRING_ELASTICITY, 
		PRESSURE_PARAMETER, 
		START_X, 
		START_Y, 
		BALL_VELOCITY_X, 
		BALL_VELOCITY_Y,
		dt
		);

		wall = new Wall(WALL_X, WALL_Y, WALL_WIDTH, WALL_HEIGHT, WALL_COLOR);

		ball.init(WIDTH, HEIGHT);
		timerId = setInterval(main, 1);
	} 	
	else {
}
});

STOP_BUTTON.addEventListener("click", () => {
	if (timerId != null){
		clearInterval(timerId);
		timerId = null;
		clearCanvas(CTX);
		ball = null;
		wall = null;
	}
});