function carregar(){
   var msg=window.document.getElementById('msg')
    var foto=window.document.getElementById('imagem') 
    var data=new Date()
    var hora=data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora>=0 && hora<12){
        foto.src='fotos/fotomanha.jpg'
        document.body.style.background='#DBE2EA'
    }
    else if(hora >=12 && hora <18){
        foto.src='fotos/fototarde.jpg'
        document.body.style.background='#C8834E'
    
    }
    else{
        foto.src='fotos/fotonoite.jpg'
        document.body.style.background='#031A36'
    
    }
}

