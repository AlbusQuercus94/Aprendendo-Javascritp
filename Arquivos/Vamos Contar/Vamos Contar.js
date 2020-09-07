function contar(){
    var num1= document.getElementById("inicio");
    var num2= document.getElementById("final");
    var pulo= document.getElementById("passos");
    var resultado = document.querySelector("div#resultado")
    var text = ""
    
    if(num1.value.length==0|| num2.value.length==0||pulo.value.length==0){
        resultado.innerHTML='\u{26A0} ERRO \u{26A0} Faltam dados'
    }
    else {
        resultado.innerHTML='Contando: <br>';
        var inicio=Number(num1.value);
        var final=Number(num2.value);
        var passos=Number(pulo.value);
        if(passos < 1){
            resultado.innerHTML='Passos inválidos, considerar-se-á passos = 1.<br>Contando: <br>';
            passos=1;
        }
        if(inicio<final){
            //FORMULA USANDO O FOR
            //Crescente
            for(c=inicio;c<=final;c+=passos){
            resultado.innerHTML+= `     ${c} \u{1F635}`
            }
        }
        else{
            //Decrescente
            for(c=inicio;c>=final;c-=passos){
            resultado.innerHTML+= `     ${c} \u{1F635}`
            }}   
        //FORMULA USANDO O WHILE
        //Crescente
        /*if(inicio<final){
            while(inicio<=final){
                resultado.innerHTML+=`${inicio} `;
                inicio+=passos;
            }
        }
        else{
            while(inicio>final){
                resultado.innerHTML+=`${inicio} `;
                inicio-=passos;
            }
        }

        
        
        */
        //FORMULA USANDO O DO...WHILE
        /*do{
            resultado.innerHTML+=`${inicio} `;
            inicio+=passos;
        }while(inicio<=final)*/

        resultado.innerHTML+= ` \u{1F3C1}`

    }

    /*{
        resultado.innerHTML+=`${inicio}`;
        
    }
 //return resultado.innerHTML+=numero*/
}