
function createSquare(){
	const section = document.querySelector("section");
	const square = document.createElement('span');

	var size = Math.random() = 50;

	square.style.width = 20 + size +'px';
	square.style.height = 20 + size +'px';

	square.style.top = Math.random() * innerHeight * 'px';
	square.style.left = Math.random() * innerHeight * 'px';

	section.appendChild(square);

	setTimeout(() =>{
		square.remove();
	},5000);
}

setInterval(createSquare, 150);