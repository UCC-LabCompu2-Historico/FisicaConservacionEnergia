 /**
 * Created by AlumnoXP on 19/05/16.
 */

 
function comprobarNum(valorIngreso) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.")
    }
}
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

    function valoresVelocidad (){
         var el=document.getElementById("formVelocidad").elements;
         var url = 'ResultadosV.html#'+ 1 + "#" + el["masa"].value+"#"+el["unidadesMasa"].value+"#"+el["altura"].value+"#"+
                   el["unidadesAltura"].value + "#" + el["distanciaFreno"].value + "#" + el["unidadesDistancia"].value + "#"+
                   el["CoeficienteRozamiento"].value;
         window.location.replace(url);

     }
    function valoresTiempo (){

    }
 
    function valoresEnergia (){
         var el=document.getElementById("formEnergia").elements;
         var url = 'ResultadosE.html#'+ 3 + "#" + el["masa"].value+"#"+el["unidadesMasa"].value+"#"+el["altura"].value+"#"+
             el["unidadesAltura"].value + "#" + el["distanciaFreno"].value + "#" + el["unidadesDistancia"].value + "#"+
             el["CoeficienteRozamiento"].value;
         window.location.replace(url);

    }

    function valoresResorte(){
        var el2 = document.getElementById("formResorte").elements;
        var url2 = 'ResultadosR.html#'+ 4 + "#" + el2["masa"].value+"#"+el2["unidadesMasa"].value+"#"+el2["altura"].value+"#"+
            el2["unidadesAltura"].value + "#" + el2["distanciaFreno"].value + "#" + el2["unidadesDistancia"].value + "#"+
            el2["CoeficienteRozamiento"].value + "#" + el2["CoeficienteElasticidad"].value;
        window.location.replace(url2);

    }
 
  function cargarResultado() {   // AGREGADO!!!!

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



       if (uMasa != "gramo"){
           masa = convertirUnidades(masa, uMasa);
          }
      if(uAltura != "metro"){
          altura = convertirUnidades(altura, uAltura);
      }
      if(uDistancia != "metro"){
          distanciaFreno = convertirUnidades(distanciaFreno, uDistancia);

      }


        var vB = Math.sqrt((2*g*altura));
        var vC = Math.sqrt((vB*vB)-(2*coefRozamiento*distanciaFreno*g));
        var x = Math.sqrt((2*masa*g*(altura-(coefRozamiento*distanciaFreno)))/coefElasticidad);
        var energiaAB= masa*g*altura;
        var energiaCR = energiaAB - (coefRozamiento*masa*g*distanciaFreno);


       
      if(myArr[1] == 1) {
          document.getElementById("VelocidadB").value = vB;
          document.getElementById("VelocidadC").value = vC;
      }else if(myArr[1] ==2){
            // llamar al Tiempo!
      }else if(myArr[1] == 3){
          document.getElementById("EnergiaAB").value = energiaAB;
          document.getElementById("EnergiaCR").value = energiaCR;
      }else if(myArr[1] == 4){
          document.getElementById("xResorte").value = x;
      }



  }

 





