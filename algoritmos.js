    
   
//arreglo del 1 al 255
 arreglo=[]

    for (var i=1; i<256; i++) {
             
          contador=i;
          arreglo.push(contador);
        
        }console.log("Este es un arrelo con números desde 1 hasta 255: ",arreglo);    
        
        
        
    //sumatoria pares

    function sumapares (x){        
    b=0;
    for (var i=0; i<=x; i++) {
        if ((i % 2) == 0)  {
            b +=i;
            
        }
    } return b}
    console.log("La suma total de pares es: ",sumapares(1000));


    // sumatoria impares
    function sumaimpares (x){        
        b=0;
    for (var i=0; i<=x; i++) {
        if ((i % 2) != 0)  {
            b +=i;
            
        }
    } return b}
    console.log("La suma total de impares es: ",sumaimpares(5000));


    //4 itera un array
    iteraarray=[71,-3,11,-1];
    contador=0;
    iteraarray.forEach(element => contador +=element);
    console.log("La suma de todos los elementos del array es: ",contador);

    //5 número máximo debo usar max
    iteraarray.sort((a,b)=>b-a);
    console.log("El número mayor es: ",iteraarray[0]);

    console.log("La misma suma usando Math.max.apply: ",Math.max.apply(null, iteraarray)); //usando math.max.apply

    //promedio debo usar avg

    suma = iteraarray.reduce((previus, current) => current+=previus);
    promedio = suma/iteraarray.length;
    console.log("Este es el promedio: ",promedio);

    console.log("Este también: ",suma/iteraarray.length);
    

    //Array impares

        function arrimpares (x){   
            arregloimpares=[];     
         for (var i=0; i<=x; i++) {
            if ((i % 2) != 0)  {
                arregloimpares.push(i);
                
            }
        } return arregloimpares}
        console.log("El arreglo con impares: ",arrimpares(50));

    
        //Mayor que Y

        function mayorqueY (x){
            cont=0;
            for (i=0; i<iteraarray.length; i++){
                if (x<iteraarray[i]){
                    cont++;
                }
            }return cont;           
        } 
        
        console.log("La cantidad de elementos mayores que Y: ",mayorqueY(-100));


        //Cuadrados

        
        function Cuadrados1(x){
            cuadrado=[];
            for (i=0; i<x.length; i++){
                cuadrado[i]=x[i]*x[i];
            }return cuadrado;
        }

        function Cuadrados2(x){
            cuadrado=[];
            x.forEach(element=> cuadrado.push(element*element));
          
        return cuadrado;
        }

        array1 =[2,-4,5];

        console.log("Usando for: ",Cuadrados1(array1));
        console.log("Usando foreach: ",Cuadrados2(array1));
       








    /* 5 
*/
