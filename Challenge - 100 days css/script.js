
function prender(){

	let luz = document.getElementById("luz_1");
	let contenido = document.getElementById("cont_043");

	luz.addEventListener("click", function(){

		contenido.style.background = "url(./img/1.jpg)";
		
	})
}

prender();