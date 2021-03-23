class Slider {
	constructor(selector){
		this.move = this.move.bind(this);
		this.slider = document.querySelector(selector);
		this.interval = null;
		this.contador = 0;
		this.start();
	}

	start(){
		this.interval =  window.setInterval(this.move,1000);
	}

	move(){
		//this -> Objeto


		//hubo un error aca lo demas esta bien
		
		/*let itemsCount = this.slider.queryselectorAll(".cont_slider > *").length;*/
		this.contador++;
		/*if (this.contador > itemsCount) this.contador = 0;*/
		this.moveTo(this.contador);
	}

	moveTo(index){
		let left = index * 100;

		this.slider.querySelector(".cont_slider").style.left = "-"+left+"%";
	}
}

	(function(){

		new Slider(".slider");

	})();