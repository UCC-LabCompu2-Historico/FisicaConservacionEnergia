 /**
 * Created by AlumnoXP on 19/05/16.
 */

/*var x;
var h;
 var d;         ELIMINADO!!!!
 var mu;
 var m;*/
 var g= 9.8;
 
function comprobarNum(valorIngreso) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.")
    }
}
 /*function altura(){

     h= x;

 }

 function distancia(){    ELIMINADO PORQUE YA NO HAY VARIABLES GLOBALES!!!
     d= x;
 }
 function coeficiente(){
     mu=x;
 }
 function masa(){
     m=x;
 }*/

 function convertirUnidades (valor, unidad){
     if(unidad == "miligramo" || unidad == "milimetro"){
         valor = valor/1000;

     }else if(unidad == "centimetro"){
         valor = valor/100;
     }else if(unidad == "kilogramo" || unidad =="kilometro") {
         valor = valor * 1000;
     }
     return valor;
 }

    function resultadoVelocidad (){ /*  ELIMINADOS LOS PARAMETROS Y  CODIGO!!!!
        alert(uMasa + uLong1 + uLong2);
   if (uMasa != "gramo"){
       convertirMasa(uMasa);
   }
    if (uLong1 != "metro"){     ELIMINADO!!!!
        convertirAltura(uLong1);
    }
    if (uLong2 != "metro"){
        convertirDistancia(uLong2);

    var vB= sqrt(2*Number(h)*Number(g)) 99;
    var vC = 8;
    document.getElementById("VelocidadB").value = vB;
    document.getElementById("VelocidadC").value = vC;
    }
     */
     var el=document.getElementById("formVelocidad").elements;
     var url = 'Resultados.html#'+el["masa"].value+"#"+el["unidadesMasa"].value+"#"+el["altura"].value+"#"+
               el["unidadesAltura"].value + "#" + el["distanciaFreno"].value + "#" + el["unidadesDistancia"].value + "#"+
               el["CoeficienteRozamiento"].value;
     window.location.replace(url);

     }
  function cargarResultado() {   // AGREGADO!!!!
        var myArr = window.location.hash.split('#');
        //var masa=(myArr[1]); //masa
        //var uMasa=(myArr[2]); //unidadesMasa
        var altura=(myArr[3]); //altura
        var uAltura= (myArr[4]); // unidadesAltura
        var distanciaFreno = (myArr[5]); //Distancia
        var uDistancia = (myArr[6]); // Unidades distancia
        var coefRozamiento = (myArr[7]); // Coeficiente de rozamiento



       /*if (uMasa != "gramo"){
           masa = convertirUnidades(masa, uMasa);
          }*/
      if(uAltura != "metro"){
          altura = convertirUnidades(altura, uAltura);
      }
      if(uDistancia != "metro"){
          distanciaFreno = convertirUnidades(distanciaFreno, uDistancia);

      }


        var vB = Math.sqrt((2*g*altura));
        var vC = Math.sqrt((vB*vB)-(2*coefRozamiento*distanciaFreno));
      document.getElementById("VelocidadB").value = vB;
      document.getElementById("VelocidadC").value = vC;
      }



