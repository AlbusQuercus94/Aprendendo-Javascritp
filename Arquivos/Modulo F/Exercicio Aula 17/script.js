var conjunto = []
function adicionar() {
    
    var numero =document.getElementById('numero')
    var maior = document.getElementById('coluna2')
    var menor = document.getElementById('coluna1')
    var valor=numero.value

    if(valor==0){
        //alert(`Digite um número e que seja diferente de zero!`)
        alert(`VOCÊ É IDIOTA? Escreva ALGUM NÚMERO e que NÃO seja ZERO!!`)
    }
    else{
        if(conjunto.indexOf(valor)==-1){
            conjunto.push(valor);
            if (valor>0){
                maior.innerHTML+=`O ${valor} é inteiro maior que zero.</br>`
            }
            else{
                menor.innerHTML+=`O ${valor} é inteiro menor que zero.</br>`
            }
        }
        else{
        alert("ESTÁ COM ALZHEIMER? VOCE JÁ PERGUNTOU SOBRE ESSE NUMERO")
        }
    }
    
}
