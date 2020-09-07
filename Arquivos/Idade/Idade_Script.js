function verificar (){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    
    if(fano.value.length == 0 || fano.value > ano){
        res.innerHTML=`Verifique os dados e tente novamente.`
    }
    else{
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute("id","foto")
        if (fsex[0].checked){
            gênero = "Homem";
            if(idade < 10){
                //criança
                img.setAttribute('src','garoto---Foto-de-Tuấn-Kiệt-Jr.png')
            }
            else if (idade < 21){
                //adolescente
                img.setAttribute('src','adolescento---Foto-de-nappy-no-Pexels.png')
            }
            else if(idade<50){
                //adulto
                img.setAttribute('src','adulto---Foto-de-Kaysha-no-Pexels.png')
            }
            else{
                //idoso
                img.setAttribute('src','idoso---Foto-de-ROMAN-ODINTSOV-no-Pexels.png')
            }
        }
        else if(fsex[1].checked){
            gênero = "Mulher";
            if(idade < 10){
                //criança;
                img.setAttribute('src','garota---Foto-de-Johan-Bos-no-Pexels.png')
            }
            else if (idade < 21){
                //adolescente
                img.setAttribute('src','adolescenta---Foto-de-Ike-louie-Natividad-no-Pexels.png')
            }
            else if(idade<50){
                //adulta
                img.setAttribute('src',"adulta---Foto-de-Christina-Morillo-no-Pexels.png")
            }
            else{
                //idosa
                img.setAttribute('src','idosa---Foto-de-Edu-Carvalho-no-Pexels.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}