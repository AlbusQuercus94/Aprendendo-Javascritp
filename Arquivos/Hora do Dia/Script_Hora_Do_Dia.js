function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML =`Agora são ${hora} horas.`
    if(hora<5 || hora>=18){
        msg.innerHTML+= `</br>Boa noite. Bom descanso.`;
        img.src = "./Fotos/noite---Foto-de-Elijah-O'Donnell-no-Pexels2.png";
        document.body.style.background = "#323130";
    }
    else if(hora>=12 || hora<18){
        msg.innerHTML+=`</br>Boa Tarde. Não perca o pique.`;
        img.src = './Fotos/tarde---Foto-de-Johannes-Plenio-no-Pexels.png'
        document.body.style.background = "#FF6100";
    }
    else{
        msg.innerHTML+= `</br>Bom dia começa com alegria`;
        img.src = "./Fotos/manhã---Foto-de-Micah-Boerma-no-Pexels.png"
        document.body.style.background = "#F3FF00";
    }
}
