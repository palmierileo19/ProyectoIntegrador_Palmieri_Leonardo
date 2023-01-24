/** Inicializo oculto */

function inicializar_vista(){
    visualizacion_laboral.style.display = "none";
    visualizacion_estudios.style.display = "none";
}



function mostrar_ocultar_div(div_mostrar,icon_mas_menos) {

    var x = document.getElementById(div_mostrar);
    var icono = document.getElementById(icon_mas_menos);

    if (x.style.display === "none") {

        x.style.display = "block";
        icono.className = "fa fa-minus-square-o";

    } else {
        x.style.display = "none";
        icono.className = "fa fa-plus-square-o";
    }
}