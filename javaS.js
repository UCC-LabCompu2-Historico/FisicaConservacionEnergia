 /**
 * Created by AlumnoXP on 19/05/16.
 */



 var vB;
 var vC;            // ESTAS VARIABLES SON LOS DISTINTOS RESULTADOS POSIBLES
 var distanciaR;             // LOS DECLARO GLOBALES PARA USARLOS EN LAS ANIMACIONES DE GRAFICOS.
 var energiaAB;
 var energiaCR;
 var tiempoB;
 var tiempoC;
 

 
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
            el2["CoeficienteRozamiento"].value;
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
      
       if (uMasa != "gramo"){
           masa = convertirUnidades(masa, uMasa);
          }
      if(uAltura != "metro"){
          altura = convertirUnidades(altura, uAltura);
      }
      if(uDistancia != "metro"){
          distanciaFreno = convertirUnidades(distanciaFreno, uDistancia);
      }
      
         vB = Math.sqrt((2*g*altura));  //VELOCIDAD EN B
            if( ((vB*vB)-(2*coefRozamiento*distanciaFreno*g)) >0 )
                 vC = Math.sqrt((vB*vB)-(2*coefRozamiento*distanciaFreno*g)); //VELOCIDAD EN C
            else  vC = 0;
         distanciaR = Math.sqrt((2*masa*g*(altura-(coefRozamiento*distanciaFreno)))/coefElasticidad); //DISTANCIA ACORTADA DEL RESORTE
         energiaAB= masa*g*altura;  //ENERGIA EN A Y EN B
         energiaCR = energiaAB - (coefRozamiento*masa*g*distanciaFreno); //ENERGIA EN C Y EN EL RESORTE
         tiempoB = vB/ g;
         tiempoC = tiempoB +(vC-vB)/(coefRozamiento*g*(-1));

       
      if(myArr[1] == 1) {
          document.getElementById("VelocidadB").value = vB;
          document.getElementById("VelocidadC").value = vC;
      }else if(myArr[1] == 2){
          document.getElementById("TiempoB").value = tiempoB;
          document.getElementById("TiempoC").value = tiempoC;
      }else if(myArr[1] == 3){
          document.getElementById("EnergiaAB").value = energiaAB;
          document.getElementById("EnergiaCR").value = energiaCR;
      }else if(myArr[1] == 4){
          document.getElementById("xResorte").value = x;
      }

  }

 function graficar(){
     var canvas = document.getElementById("grafico");
     var curva = canvas.getContext("2d"); // BAJADA CURVA
     var freno = canvas.getContext("2d"); // PARTE CON FRICCION
     var linea5 = canvas.getContext("2d"); // LINEAS 1, 2, 3, 4, 5 DE ESTRUCTURA
     var linea2 = canvas.getContext("2d"); 
     var linea1 = canvas.getContext("2d");
     var linea3=canvas.getContext("2d");
     var linea4=canvas.getContext("2d");
     var objeto = canvas.getContext("2d"); // OBJETO PARA ANIMAR
     var resorte1 = canvas.getContext("2d");// RESORTE AL FINAL
     var resorte2 = canvas.getContext("2d");
     var resorte3 = canvas.getContext("2d");
     var resorte4 = canvas.getContext("2d");
     var resorteCab = canvas.getContext("2d");


     function animar() {
         var x=288;
         var y=272;
         var r = 170;
         var ang =0.5*Math.PI + Math.PI;
         var aux=10;

         function moveCurva() {              // EN PROCESO PARA GENERAR ANIMACION!!!

             canvas.width = canvas.width;
             objeto.beginPath();
             objeto.arc(r*Math.sin(ang)+302 , r*Math.cos(ang)+102 , 30, 0, 2 * Math.PI);
             objeto.stroke();

             curva.beginPath();
             curva.arc(300, 100, 200, (1/2)*Math.PI, Math.PI);
             curva.stroke();

             var grd=freno.createLinearGradient(500, 0, 750, 0);
             grd.addColorStop(0,"red");
             grd.addColorStop(1,"white");
             freno.fillStyle=grd;
             freno.fillRect(300, 300, 400, 3);

             linea5.moveTo(900, 300);
             linea5.lineTo(900, 250);
             linea5.stroke();

             linea2.moveTo(100, 100);
             linea2.lineTo(50, 100);
             linea2.stroke();

             linea1.moveTo(50, 100);
             linea1.lineTo(50, 300);
             linea1.stroke();

             linea3.moveTo(50, 300);
             linea3.lineTo(300, 300);
             linea3.stroke();

             linea4.moveTo(700, 300);
             linea4.lineTo(900, 300);
             linea4.stroke();

             resorte1.moveTo(900, 250);
             resorte1.lineTo(870, 295);
             resorte1.stroke();

             resorte2.moveTo(870, 295);
             resorte2.lineTo(840, 250);
             resorte2.stroke();

             resorte3.moveTo(840, 250);
             resorte3.lineTo(810, 295);
             resorte3.stroke();

             resorte4.moveTo(810, 295);
             resorte4.lineTo(780, 250);
             resorte4.stroke();

             resorteCab.moveTo(780, 250);
             resorteCab.lineTo(780, 295);
             resorteCab.stroke();
             
             ang += 0.1 ;

             if(ang >= 2*Math.PI){
                 ang=0;
                 clearInterval(id);
                 function moveFreno() {
                     canvas.width = canvas.width;
                     objeto.beginPath();
                     objeto.arc(x, y-2 , 30, 0, 2 * Math.PI);
                     objeto.stroke();

                     curva.beginPath();
                     curva.arc(300, 100, 200, (1 / 2) * Math.PI, Math.PI);
                     curva.stroke();

                     var grd = freno.createLinearGradient(500, 0, 750, 0);
                     grd.addColorStop(0, "red");
                     grd.addColorStop(1, "white");
                     freno.fillStyle = grd;
                     freno.fillRect(300, 300, 400, 3);

                     linea5.moveTo(900, 300);
                     linea5.lineTo(900, 250);
                     linea5.stroke();

                     linea2.moveTo(100, 100);
                     linea2.lineTo(50, 100);
                     linea2.stroke();

                     linea1.moveTo(50, 100);
                     linea1.lineTo(50, 300);
                     linea1.stroke();

                     linea3.moveTo(50, 300);
                     linea3.lineTo(300, 300);
                     linea3.stroke();

                     linea4.moveTo(700, 300);
                     linea4.lineTo(900, 300);
                     linea4.stroke();

                     resorte1.moveTo(900, 250);
                     resorte1.lineTo(870, 295);
                     resorte1.stroke();

                     resorte2.moveTo(870, 295);
                     resorte2.lineTo(840, 250);
                     resorte2.stroke();

                     resorte3.moveTo(840, 250);
                     resorte3.lineTo(810, 295);
                     resorte3.stroke();

                     resorte4.moveTo(810, 295);
                     resorte4.lineTo(780, 250);
                     resorte4.stroke();

                     resorteCab.moveTo(780, 250);
                     resorteCab.lineTo(780, 295);
                     resorteCab.stroke();


                     x+= aux;
                     aux -= 0.108;

                         if (x >= 750) {
                             clearInterval(id2);
                         }


                 }
                 var id2 = setInterval(moveFreno, 50);
             }
         }
         var id = setInterval(moveCurva, 50);
     }
     animar();
 }

