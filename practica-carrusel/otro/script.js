var slideIndex = 0;
showSlides();

function showSlides() {

       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;

       if(slideIndex > slides.length) {
       		slideIndex = 1
       }

       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,3000);
}

/*

      function transform(){
            
            let cartas = document.getElementsByClassName("carta");
            let transform = document.getElementById("derecha");
            let i = 0;
            let i = cartas.length;
      
            transform.addEventListener("click", function(){
                  let i = i++;
                  var cartas = document.getElementsByClassName("carta")[i];
                  cartas.classList.add("mirar");
                  alert("hola");
            })
      }
      transform();
*/