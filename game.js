	var Game = function(fps){
		var g = {
			keydowns:{},
			actions:{},
			fps: fps,
		}
		var canvas = document.querySelector('#canvas_id')
		var context = canvas.getContext('2d')

		g.canvas = canvas
		g.context = context

		g.draw_image = function(img_object){
			g.context.drawImage(img_object.image, img_object.x, img_object.y)
		}

		window.addEventListener('keydown', function(event){
			g.keydowns[event.key] = true
		})

		window.addEventListener('keyup', function(event){
			g.keydowns[event.key] = false
		})

		g.register = function(key, callback){
			g.actions[key] = callback
		}



		//timer
		setInterval(function(){
			//update
			var actions = Object.keys(g.actions)
			for (var i = 0; i < actions.length; i++) {
				var key = actions[i]
				if (g.keydowns[key] == true){
					g.actions[key]()
				}
			}
			g.update()	
			//clear
			context.clearRect(0, 0, canvas.width, canvas.height)
			//draw
			g.draw()

		}, 1000/g.fps)
		log('fps', g.fps)

		return g

	}