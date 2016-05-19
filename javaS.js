/**
 * Created by AlumnoXP on 19/05/16.
 */

var h;

function comprobarAltura(valorIngreso){
    if(isNaN(valorIngreso)){
        alert("Altura ingresada no numerica, ingresar de nuevo.")
    }else {
        h= valorIngreso;
    }

}

function velocidadB (){
    var g= 9.8;
    //h=  document.getElementById("altura").value;
    var vB= sqrt(2*Number(h)*Number(g));
    return vB;
}



