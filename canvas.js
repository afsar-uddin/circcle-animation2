var canvas = document.querySelector('canvas');

canvas.width = 600;
canvas.height = 400;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "white";
		c.stroke();
		// console.log('it works');
	}

	this.update = function() {
		if( this.x + this.radius > canvas.width || this.x - this.radius < 0 ){
			this.dx = -this.dx;
		}
		if( this.y + this.radius > canvas.height || this.y - this.radius < 0 ){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		// console.log('update function');
		this.draw();
	}
}

var circle = new Circle(200, 200, 4, 3, 30);

var circleArray = [];

for(var i = 0; i < 100; i++) {
	var x = Math.random() * (canvas.width - radius * 5) + radius;
	var y = Math.random() * (canvas.height - radius * 2) + radius;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	var radius = 30;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	// circle.update();

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();