 /**
 * Created by AlumnoXP on 19/05/16.
 */

 
function comprobarNum(valorIngreso) {     //COMPRUEBA SI EL VALOR ES NUMERICO
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.")
    }
}
 function convertirUnidades (valor, unidad){ //CONVIERTE LAS UNIDADES DE VALORES AL CONVENCIONAL
     if(unidad == "miligramo" || unidad == "milimetro"){
         valor = valor/1000;

     }else if(unidad == "centimetro"){
         valor = valor/100;
     }else if(unidad == "kilogramo" || unidad =="kilometro") {
         valor = valor * 1000;
     }
     return valor;
 }

    function valoresVelocidad (){          //CONCATENA LOS VALORES DE VELOCIDAD
         var el=document.getElementById("formVelocidad").elements;
         var url = 'ResultadosV.html#'+ 1 + "#" + el["masa"].value+"#"+el["unidadesMasa"].value+"#"+el["altura"].value+"#"+
                   el["unidadesAltura"].value + "#" + el["distanciaFreno"].value + "#" + el["unidadesDistancia"].value + "#"+
                   el["CoeficienteRozamiento"].value;
         window.location.replace(url);

     }
    function valoresTiempo (){ // CONCATENA LOS VALORES DE TIEMPO
        var el2 = document.getElementById("formTiempo").elements;
        var url2 = 'ResultadosT.html#'+ 2 + "#" + el2["masa"].value+"#"+el2["unidadesMasa"].value+"#"+el2["altura"].value+"#"+
            el2["unidadesAltura"].value + "#" + el2["distanciaFreno"].value + "#" + el2["unidadesDistancia"].value + "#"+
            el2["CoeficienteRozamiento"].value + "#" + el2["CoeficienteElasticidad"].value + "#" + el2["Radio"].value + "#"+
            el2["unidadesRadio"].value;
        window.location.replace(url2);
    }
 
    function valoresEnergia (){    //CONCATENA LOS VALORES DE ENERGIA
         var el=document.getElementById("formEnergia").elements;
         var url = 'ResultadosE.html#'+ 3 + "#" + el["masa"].value+"#"+el["unidadesMasa"].value+"#"+el["altura"].value+"#"+
             el["unidadesAltura"].value + "#" + el["distanciaFreno"].value + "#" + el["unidadesDistancia"].value + "#"+
             el["CoeficienteRozamiento"].value;
         window.location.replace(url);

    }

    function valoresResorte(){    //CONCATENA LOS VALORES DE RESORTE
        var el2 = document.getElementById("formResorte").elements;
        var url2 = 'ResultadosR.html#'+ 4 + "#" + el2["masa"].value+"#"+el2["unidadesMasa"].value+"#"+el2["altura"].value+"#"+
            el2["unidadesAltura"].value + "#" + el2["distanciaFreno"].value + "#" + el2["unidadesDistancia"].value + "#"+
            el2["CoeficienteRozamiento"].value + "#" + el2["CoeficienteElasticidad"].value;
        window.location.replace(url2);

    }
 
  function cargarResultado() {   // CALCULA TODOS LOS RESULTADOS Y GENERA EL ARRAY DE VALORES

        var g= 9.8;
      
        var myArr = window.location.hash.split('#');
        var masa=(myArr[2]); //masa
        var uMasa=(myArr[3]); //unidadesMasa
        var altura=(myArr[4]); //altura
        var uAltura= (myArr[5]); // unidadesAltura
        var distanciaFreno = (myArr[6]); //Distancia
        var uDistancia = (myArr[7]); // Unidades distancia
        var coefRozamiento = (myArr[8]); // Coeficiente de rozamiento
        var coefElasticidad = (myArr[9]); // Coeficiente de elasticidad
        var radio = (myArr[10]); //  Radio de la Rampa
        var uRadio = (myArr[11]); // Unidades de Radio


       if (uMasa != "gramo"){
           masa = convertirUnidades(masa, uMasa);
          }
      if(uAltura != "metro"){
          altura = convertirUnidades(altura, uAltura);
      }
      if(uDistancia != "metro"){
          distanciaFreno = convertirUnidades(distanciaFreno, uDistancia);
      }

      if (uRadio != "metro"){
          radio = convertirUnidades(radio, uRadio);
      }


        var vB = Math.sqrt((2*g*altura));  //VELOCIDAD EN B
        var vC = Math.sqrt((vB*vB)-(2*coefRozamiento*distanciaFreno*g)); //VELOCIDAD EN C
        var x = Math.sqrt((2*masa*g*(altura-(coefRozamiento*distanciaFreno)))/coefElasticidad); //DISTANCIA ACORTADA DEL RESORTE
        var energiaAB= masa*g*altura;  //ENERGIA EN A Y EN B
        var energiaCR = energiaAB - (coefRozamiento*masa*g*distanciaFreno); //ENERGIA EN C Y EN EL RESORTE
        var tiempoB = 5;
        var tiempoC = 8;
        var tiempoR = 7;



       
      if(myArr[1] == 1) {
          document.getElementById("VelocidadB").value = vB;
          document.getElementById("VelocidadC").value = vC;
      }else if(myArr[1] == 2){
          document.getElementById("TiempoB").value = tiempoB;
          document.getElementById("TiempoC").value = tiempoC;
          document.getElementById("TiempoR").value = tiempoR;
      }else if(myArr[1] == 3){
          document.getElementById("EnergiaAB").value = energiaAB;
          document.getElementById("EnergiaCR").value = energiaCR;
      }else if(myArr[1] == 4){
          document.getElementById("xResorte").value = x;
      }

  }

 





