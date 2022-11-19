function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=3 && hora < 12){
        //BOOM DIA!
        img.src = 'foto_manhã.jpg'
        document.body.style.background = 'lightblue'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#FC9602' 
    } else{
        //BOA NOITE!
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#344D53'
    }
}
