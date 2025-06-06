function tabuada(){
    let num=document.getElementById('txtn')
    let tab=document.getElementById('seltab')
    if(num.value.length==0){
       window.alert('[ERRO]Por favor, digite um numero!!')
    }
    else{ 
        tab.innerHTML=''
        let n=Number(num.value)
        for(let cont=0;cont<=10;cont++){
            let item=document.createElement('option')
            item.text=`${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            
        }
        
    }
    

    
}