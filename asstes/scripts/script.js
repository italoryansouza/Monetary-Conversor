real1.addEventListener (selecionou(), 'onclick')

function selecionou(){
    var valor = document.getElementsByName("chor1");
    for (var i = 0; i < valor.length; i++){
        if(valor[i].checked){
            cifra.innerHTML = valor[i].value;
        }
    }
}

