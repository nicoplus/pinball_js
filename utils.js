	var log = console.log.bind(console)

	var imgCollid = function(imgA, imgB){
		//判断两个矩形图像是否相交
		//imgA为静止物体， imgB为移动物体
		var a_x0 = imgA.x
		var a_y0 = imgA.y
		var a_x1 = imgA.x + imgA.image.width
		var a_y1 = imgA.y + imgA.image.height

		var b_x0 = imgB.x
		var b_y0 = imgB.y
		var b_x1 = imgB.x + imgB.image.width
		var b_y1 = imgB.y + imgB.image.height

		var center_x = Math.abs(a_x0+a_x1- b_x1- b_x0)
		var center_y = Math.abs(a_y1+ a_y0 - b_y0 - b_y1)
		var margin_x = imgA.image.width+imgB.image.width
		var margin_y = imgA.image.height+imgB.image.height

		if (center_x <= margin_x && center_y <= margin_y){
			return true
		} else {
			return false
		}
	}

	var imageFromImage = function(path){
		var image = new Image()
		image.src = path
		return image		
	}