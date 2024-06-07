// Colocar o valor DE na tela quando alterado:

function selecionou(){
    var valor = document.getElementsByName("chor1");
    for (var i = 0; i < valor.length; i++){
        if(valor[i].checked){
            cifra.innerHTML = valor[i].value ;
        }
    }
}

function calcular(){
    var n = document.getElementById("cifra");
    var vde = n.innerHTML;
    var valor2 = document.getElementsByName("chor2");

    for (var p = 0; p < valor2.length; p++){
        if(valor2[p].checked){
            var vpara = valor2[p].value;
        }
    }

    // Cálculos:

    //Reais
    if(vde == "R$" && vpara == "real2"){
        resultado.innerHTML = 'Você escolheu Reais no De e Reais no Para'
    }
    else if(vde == "R$" && vpara == "euro2"){
        resultado.innerHTML = 'Você escolheu Reais no De e Euro no Para'
    }
    else if(vde == "R$" && vpara == "libra2"){
        resultado.innerHTML = 'Você escolheu Reais no De e libra no Para'
    }
    else if(vde == "R$" && vpara == "iene2"){
        resultado.innerHTML = 'Você escolheu Reais no De e Iene no Para'
    }
    else if(vde == "R$" && vpara == "dolar2"){
        resultado.innerHTML = 'Você escolheu Reais no De e Dolar no Para'
    }

    //Euro
    if(vde == "€" && vpara == "real2"){
        resultado.innerHTML = 'Você escolheu Euro no De e Reais no Para'
    }
    else if(vde == "€" && vpara == "euro2"){
        resultado.innerHTML = 'Você escolheu Euro no De e Euro no Para'
    }
    else if(vde == "€" && vpara == "libra2"){
        resultado.innerHTML = 'Você escolheu Euro no De e libra no Para'
    }
    else if(vde == "€" && vpara == "iene2"){
        resultado.innerHTML = 'Você escolheu Euro no De e Iene no Para'
    }
    else if(vde == "€" && vpara == "dolar2"){
        resultado.innerHTML = 'Você escolheu Euro no De e Dolar no Para'
    }

    //Libra
    if(vde == "£" && vpara == "real2"){
        resultado.innerHTML = 'Você escolheu Libra no De e Reais no Para'
    }
    else if(vde == "£" && vpara == "euro2"){
        resultado.innerHTML = 'Você escolheu Libra no De e Euro no Para'
    }
    else if(vde == "£" && vpara == "libra2"){
        resultado.innerHTML = 'Você escolheu Libra no De e libra no Para'
    }
    else if(vde == "£" && vpara == "iene2"){
        resultado.innerHTML = 'Você escolheu Libra no De e Iene no Para'
    }
    else if(vde == "£" && vpara == "dolar2"){
        resultado.innerHTML = 'Você escolheu Libra no De e Dolar no Para'
    }

    //Iene
    if(vde == "¥" && vpara == "real2"){
        resultado.innerHTML = 'Você escolheu Iene no De e Reais no Para'
    }
    else if(vde == "¥" && vpara == "euro2"){
        resultado.innerHTML = 'Você escolheu Iene no De e Euro no Para'
    }
    else if(vde == "¥" && vpara == "libra2"){
        resultado.innerHTML = 'Você escolheu Iene no De e libra no Para'
    }
    else if(vde == "¥" && vpara == "iene2"){
        resultado.innerHTML = 'Você escolheu Iene no De e Iene no Para'
    }
    else if(vde == "¥" && vpara == "dolar2"){
        resultado.innerHTML = 'Você escolheu Iene no De e Dolar no Para'
    }

    // Dólar

    if(vde == "$" && vpara == "real2"){
        resultado.innerHTML = 'Você escolheu dolar no De e Reais no Para'
    }
    else if(vde == "$" && vpara == "euro2"){
        resultado.innerHTML = 'Você escolheu dolar no De e Euro no Para'
    }
    else if(vde == "$" && vpara == "libra2"){
        resultado.innerHTML = 'Você escolheu dolar no De e libra no Para'
    }
    else if(vde == "$" && vpara == "iene2"){
        resultado.innerHTML = 'Você escolheu dolar no De e Iene no Para'
    }
    else if(vde == "$" && vpara == "dolar2"){
        resultado.innerHTML = 'Você escolheu dolar no De e Dolar no Para'
    }
}

