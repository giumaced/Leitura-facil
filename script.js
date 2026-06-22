let tamanhoFonte: 20;

function aumentarFonte(){
    if (tamanhoFonte <68){
        tamanhoFonte += 2;
    document.getElementById("texto").style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte(){
      if (tamanhoFonte > 14){
        tamanhoFonte -= 2;
        document.getElementById("texto").style.fontSize = tamanhoFonte + "px";
    }
}

function ativarContraste(){
    document.body.classList.toggle("contraste")
}