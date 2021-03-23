window.addEventListener("load", () => {
	let enlaces = document.querySelectorAll("#nav a");
	enlaces.forEach((elemento) => {
		elemento.addEventListener("click", (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove("activo"))
			evento.target.classList.add("activo");
		})
	});
});