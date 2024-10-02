var tarjetitas = [
    "1.jpg","1.jpg","2.jpg","2.jpg","3.jpg","3.jpg",
    "4.jpg","4.jpg", "5.jpg","5.jpg","6.jpg","6.jpg",
    "7.jpg","7.jpg","8.jpg","8.jpg", "9.jpg", "9.jpg",
]; 

var imagen_temporal,esperando = false;
var contador = 0;

function CambiarImagen(imagen,indice){
    imagen.src = `./IMG/${tarjetitas[indice]}`;
    imagen.removeAttribute("onclick");
    if (!esperando) imagen_temporal = imagen;
    else{
        if (imagen_temporal.src == imagen.src) {
            //alert("¡Encontramos un par!");
            setTimeout(function(){EliminarPar(imagen_temporal,imagen)},500);
        } else {
            //alert("No es par :c");
            setTimeout(function(){Regresar(imagen_temporal,imagen)},500);
        }
    }
    esperando = !esperando;
}

function Regresar(imagen1,imagen2){
    imagen1.src = "./IMG/0.jpg";
    imagen2.src = "./IMG/0.jpg";
    imagen1.setAttribute("onclick", `CambiarImagen(this,${imagen1.id})`);
    imagen2.setAttribute("onclick",`CambiarImagen(this,${imagen2.id})`);
}

function EliminarPar(imagen1,imagen2){
    //Desaparece imagen pero ajusta tabla
    /*imagen1.src = "";
    imagen1.style.display = "none";
    imagen2.src = "";
    imagen2.style.display = "none";
    */

    //Desaparece imagen pero no ajusta tabla
   imagen1.style.visibility = "hidden";
   imagen2.style.visibility = "hidden";
   imagen1.removeAttribute("onclick");
   imagen2.removeAttribute("onclick");
   contador++;
   if (contador!=9) {
    document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador}`;
   } else {
    document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador} ¡Ganaste!`;
    
   }
}

function Shuffle(){
    var j = 0;
    for (let i = 17; i > 0; i--) {
        j = Math.floor(Math.random() * (i+1));
        [tarjetitas[i],tarjetitas[j]] = [tarjetitas[j],tarjetitas[i]];                
    }
    //document.getElementById("Salida").innerHTML = tarjetitas.join(" - ");
}

function Fondo(){
    var fondo = Math.floor(Math.random()*4)+1;
    document.getElementById("tablita").style = `background-image: url("./IMG/fondo${fondo}.jpg");`;
}

function Reiniciar(){
    location.reload();
}