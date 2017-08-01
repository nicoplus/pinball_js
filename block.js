	var Block = function(){
		var o = {
			image: imageFromImage('block.png'),
			x: 20,
			y: 100,
			speed: 10,
			live: true,
		}

		o.kill = function(){
			o.live = false
		}

		return o
	}