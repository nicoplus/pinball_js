	var Ball = function(){
		var o = {
			image: imageFromImage('ball.png'),
			x: 150,
			y: 220,
			speedx: 5,
			speedy: 5,
			fired: false,
			paused: false,
		}

		o.fire = function(){
			o.fired = true
	
		}

		o.pause = function() {
			o.paused = !o.paused
		}

		o.move = function(canvas){
			if(o.paused == true) {
				return
			}
			if (o.fired == true){
				if ( o.x<0 || o.x+o.image.width > canvas.width ){
					o.speedx *= -1
				}
				if (o.y<0 || o.y+o.image.height > canvas.height) {
					o.speedy *= -1
				}
				o.y += o.speedy
				o.x += o.speedx
			}
		}

		o.rebound = function(){
			o.speedy *= -1
		}

		window.addEventListener('keydown', function(event){
			if (event.key == 'b') {
				o.pause()
			}
		})

		return o
	}