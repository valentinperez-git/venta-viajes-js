import{ barcelona, roma, paris, londres} from'./ciudades.js'
//OBTENER ELEMENTOS DEL DOM(DOCUMENT OBJET MODEL)
//QUERY ES CONSULTA DEL DOCUMENTO HACEMOS UNA CONSULTA DE TODOS LOS ELEMENTOS QUE SEAN A Y LO GUARDAMOS EN ENLACES
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//AGREGAR CLICK EVENT A CADA ENLACE
enlaces.forEach(function (enlace) {//CADA VEZ QUE RECORRE, ES UN ENLACE
    enlace.addEventListener('click', function () {//AGREGAR ESCUCHARDOR DE ELEMOTOS CUANDO HAY UN CLICK, HAY UNA ACCION
        //REMOVER LA CLASE ACTIVE DE TODOS LOS ENLACES
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active')
        });
        //AGREGAR LA CLASE ACTIVE AL ENLACE ACTUAL
        this.classList.add('active')
        //Obtener el contenido correspondiente segùn el enlace
        let contenido = obtenerContenido(this.textContent)
        //MOSTRAR CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.ennerHTML = contenido.precio
    })
});
//FUNCION PARA TRAER LA INFORMACION CORRECTA  DESDE CIUDADES.JS
function obtenerContenido(enlace){ //LA FUNCION OBTENER CONTENIDO VA A TENER UN ENLACE(UN DE LOS 4 QUE VAMOS A TOCAR), Y 
    let contenido = {              //ESTE ENLACE A SU VEZ VA A TENER UNA DE ESTAS 4 CIUDADES
        'Barcelona' : barcelona,   //DEVUELVE LAS CONST DE CIUDADES.JS
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}