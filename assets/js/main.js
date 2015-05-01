var Memealo = function(){
	this.canvas = new fabric.Canvas('canvas');
	this.addText = function(){
		var t= new fabric.Text('Escribe aquí',{left:100,top:100,fontFamily:'Helvetica',fill:'red'});
		this.canvas.add(t);
		return 'created'
	};
	this.handleFiles = function(){
		var canvas = this.canvas;
		function h(){
			var url = window.URL.createObjectURL(this.files[0])
			fabric.Image.fromURL(url,function(img){
				canvas.add(img);
			})
		}
		var token = document.getElementById('file')
			.addEventListener('change',h,false);
	}
	return true;
}
var memealo = new Memealo();
memealo.handleFiles();