function verificar(){
  var data =new Date()
  var ano = data.getFullYear()
  var fano=document.getElementById('txtano')
  var res =document.querySelector('div#res')
  if(fano.value.length == 0 || Number(fano.value)>ano){
    window.alert('[ERRo] Verifique os dados e tente novamente')
  }
  else{
    var fsex=document.getElementsByName('radsex')
    var idade =ano -Number(fano.value)
    var gener= ' '
    var img=document.createElement('img')
    img.setAttribute('id','fotos')
    if(fsex[0].checked){
        gener='Homem';
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'criança-homen.jpg');

        } else if(idade < 21){
            img.setAttribute('src','jovem-homen.jpg')
             
        } else if(idade < 50){
            img.setAttribute('src','homen-aduto.jpg')
           
        } else {
            img.setAttribute('src','idoso-homen.jpg')

           
        }
    } else if (fsex[1].checked){ 
        gener='Mulher';
        if(idade >= 0 && idade < 10){
            img.setAttribute('src','criança-mulher.jpg');
        } else if(idade < 21){
            img.setAttribute('src','jovem-mulher.jpg');
        } else if(idade < 50){
            img.setAttribute('src','mulher-aduta.jpg');
        } else {
            img.setAttribute('src','idosa-mulher.jpg');
        }
    }
    res.innerHTML=`Detectamos ${gener} com ${idade} anos`
    res.appendChild(img)
  }
}

