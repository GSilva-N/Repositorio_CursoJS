function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.getElementById('txtano');
    var resultado = document.getElementById('resultado');
    if(formularioAno.value.length == 0 || formularioAno.value> ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var formularioSexo = document.getElementsByName('radsexo');
        var idade = ano - Number(formularioAno.value);
        var genero = " ";
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto')
        if(formularioSexo[0].checked){
            genero = "Homem";
            document.body.style.background = '#80b4f8';
            if(idade >= 0 && idade < 12){
                imagem.setAttribute('src','menino-homem.png');
            } else if (idade < 21){
                imagem.setAttribute('src','adolescente-homem.png');
            } else if (idade < 50){
                imagem.setAttribute('src','adulto-homem.png');
            } else{
                imagem.setAttribute('src','idoso-homem.png');
            }
        } else if (formularioSexo[1].checked){
            genero = "Mulher";
            document.body.style.background = 'pink';
            if(idade >= 0 && idade < 12){
                imagem.setAttribute('src','menina-mulher.png');
            } else if (idade < 21){
                imagem.setAttribute('src','adolescente-mulher.png');
            } else if (idade < 50){
                imagem.setAttribute('src','adulto-mulher.png');
            } else{
                imagem.setAttribute('src','idosa-mulher.png');
            }
        }
        resultado.style.textAlign ='center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resultado.appendChild(imagem);
    }
}