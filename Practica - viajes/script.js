/*click*/

function cambiar(li,imagenBase,imagen){
	let evento = document.getElementById(li);

	evento.addEventListener("click", function(){
		function cambiarImagen(){
			document.getElementById(imagenBase).src=imagen;
			
		}
		cambiarImagen();
	});
}

cambiar("ofertas_cont_cont_lista_1","img1","img/uk/1.jpg");
cambiar("ofertas_cont_cont_lista_2","img1","img/uk/2.jpg");
cambiar("ofertas_cont_cont_lista_3","img1","img/uk/3.jpg");
cambiar("ofertas_cont_cont_lista_4","img1","img/uk/4.jpg");