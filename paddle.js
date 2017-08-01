	var Paddle = function(){
		var o = {
			image: imageFromImage('paddle.png'),
			x: 150,
			y: 250,
			speed: 10,
		}
		o.moveLeft = function(canvas){
			if (o.x < 0){
				o.x = 0
			}
			o.x -= o.speed
		}
		o.moveRight = function(canvas){
			if (o.x + o.image.width > canvas.width){
				o.x = canvas.width - o.image.width
			}
			o.x += o.speed
		}
		return o
	}