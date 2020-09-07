function calcular(){
    var resultado= document.getElementById('res');
    var num=document.getElementById('num');
    var max=document.getElementById('max')

    if(Number(num.value.length)==0||Number(max.value.length)==0){
        resultado.innerHTML = `Favor digite um Numero`;
    }
    else{
        resultado.innerHTML = `Calculando:<br>`
        var maxi = Number(max.value);
        var numero = Number(num.value);
        var n= 0;
        
        while(n<=maxi){
            resultado.innerHTML+= `O número ${numero} vezes ${n} é igual a ${numero*n}<br>`;
            n++
        }
    }
}