function calcular(){
    var txtnum = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')

    if(txtnum.value.length == 0){
        window.alert("Insira um número!");
    } else{
        var numero = Number(txtnum.value);
        tabuada.innerHTML ='';
        
        for(i=0; i<=10; i++){
            var item = document.createElement('option');
            item.text =`${numero} X ${i} = ${numero*i}`;
            tabuada.appendChild(item);
        }
        
    }
}