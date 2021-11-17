window.onload = function () {
    // Variables

    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = [];
    IMAGENES[0] = 'img/img1.jpg';
    IMAGENES[1] = 'img/img2.jpg';
    IMAGENES[2] = 'img/img3.jpg';

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 500;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.getElementById('retroceder');
    let $botonAvanzar = document.getElementById('avanzar');
    let $imagen = document.getElementById('imagen');
    let $botonPlay = document.getElementById('play');
    let $botonStop = document.getElementById('stop');

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        switch (posicionActual) {
            case 0:
                posicionActual++;
                console.log(posicionActual);
                break;
            case 1:
                posicionActual++;
                console.log(posicionActual);
                break;
            case 2:
                posicionActual = 0;
                console.log(posicionActual);
                break;
        }

        // se incrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        switch (posicionActual) {
            case 0:
                posicionActual = 2;
                console.log(posicionActual);
                break;
            case 1:
                posicionActual = 0;
                console.log(posicionActual);
                break;
            case 2:
                posicionActual = 1;
                console.log(posicionActual);
                break;
        }
        // se incrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        setInterval(intervalo);
        $botonStop.disabled = false;
        $botonPlay.disabled = true;
        $botonRetroceder.disabled = true;
        $botonAvanzar.disabled = true;
        // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.


        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        $botonStop.disabled = true;
        $botonPlay.disabled = false;
        $botonRetroceder.disabled = false;
        $botonAvanzar.disabled = false;
        // Desactivar la ejecución de intervalo.

        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

    let zoom = 1;
    const speed = 0.1;

    document.addEventListener("wheel", function(e) {

        if(e.deltaY > 0){
            $imagen.style.transform = `scale(${zoom += speed})`;
            console.log(zoom);
        }else{
            $imagen.style.transform = `scale(${zoom -= speed})`;
            console.log(zoom);
        }

    });



    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.
    $botonPlay.addEventListener("click", playIntervalo);
    $botonStop.addEventListener("click", stopIntervalo);
    $botonAvanzar.addEventListener("click", pasarFoto);
    $botonRetroceder.addEventListener("click", retrocederFoto);
    // Iniciar
    renderizarImagen();
} 
