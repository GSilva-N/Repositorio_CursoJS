function contar(){
var txtInicio = document.getElementById('txtinicio');
var txtFim = document.getElementById('txtfim');
var txtPasso = document.getElementById('txtpasso');
var resultado = document.getElementById('resultado');

if (txtInicio.value.length == 0 ||txtFim.value.length == 0 || txtPasso.value.length == 0 || txtPasso.value <= 0){
    window.alert("Verifique os dados e tente novamente");
} else{
    resultado.innerHTML = "Contando:";
    var inicio = Number(txtInicio.value);
    var fim = Number(txtFim.value);
    var passo = Number(txtPasso.value);
    
    if (inicio>fim){
        for (i=inicio; i>=fim; i-=passo){
            resultado.innerHTML += ` ${i} \u{1F449} `;
        }
    } else{
        for(i=inicio; i<=fim; i+=passo){
            resultado.innerHTML += ` ${i} \u{1F449} `;
        }
    }
}
}
