/** Inicializo oculto */

function inicializar_vista(){
    visualizacion_laboral.style.display = "none";
    visualizacion_estudios.style.display = "none";
}


/** funcion muestra/oculta div ademas de cambiar icono +/-  
 *  pasando por paremetros el div a mostrar/ocultar y el contenedor
 * del icono +/-
*/
function mostrar_ocultar_div(div_mostrar,icon_mas_menos) {

    var el_div = document.getElementById(div_mostrar);
    var icono = document.getElementById(icon_mas_menos);

    if (el_div.style.display === "none") {

        el_div.style.display = "block";
        icono.className = "fa fa-minus-square-o";

    } else {
        el_div.style.display = "none";
        icono.className = "fa fa-plus-square-o";
    }
}