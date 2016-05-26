 /**
 * Created by AlumnoXP on 19/05/16.
 */

var x;
var h;
 var d;
 var mu;
 var m;
 var g= 9.8;
 
function comprobarNum(valorIngreso) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.")
    } else {
        x = valorIngreso;
    }
}
 function altura(){
     h= x;
 }

 function distancia(){
     d= x;
 }
 function coeficiente(){
     mu=x;
 }
 function masa(){
     m=x;
 }
 function convertirMasa (valor){
     if(valor == "miligramo"){
         m= m/1000;
     }else if(valor == "kilogramo"){
         m= m*1000;
     }
 }

 function convertirAltura (valor){
     if(valor == "milimetro"){
         h = h /1000;
     } else if(valor == "centimetro"){
         h = h / 100;
     } else
     {h = h * 1000;}
 }
 function convertirDistancia (valor){
     if(valor == "milimetro"){
         d = d /1000;
     } else if(valor == "centimetro"){
         d = d / 100;
     } else
     {d = d * 1000;}
 }
    function resultadoVelocidad (uMasa, uLong1, uLong2){
   if (uMasa != "gramo"){
       convertirMasa(uMasa);
   }
    if (uLong1 != "metro"){
        convertirAltura(uLong1);
    }
    if (uLong2 != "metro"){
        convertirDistancia(uLong2);
    }
    
    var vB= /*sqrt(2*Number(h)*Number(g))*/ 99;
    var vC = 8;
    document.getElementById("VelocidadB").value = vB;
    document.getElementById("VelocidadC").value = vC;
}



