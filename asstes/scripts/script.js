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

    number = document.getElementById('ivalor')
    numberval = Number(number.value);

    // Cálculos:

    //Reais
    if(vde == "R$" && vpara == "real2"){
        resultado.style.display = 'block'
        var conta = numberval*1
        resultado.innerHTML = String(`R$${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>R$</strong>${conta.toFixed(2).replace('.',',')}`)
    }

    else if(vde == "R$" && vpara == "euro2"){
        resultado.style.display = 'block'
        var conta = numberval/5.73
        resultado.innerHTML = String(`R$${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>€</strong> ${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "R$" && vpara == "libra2"){
        resultado.style.display = 'block'
        var conta = numberval/6.79
        resultado.innerHTML = String(`R$${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>£</strong> ${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "R$" && vpara == "iene2"){
        resultado.style.display = 'block'
        var conta = numberval/0.034
        resultado.innerHTML = String(`R$${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>¥</strong> ${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "R$" && vpara == "dolar2"){
        resultado.style.display = 'block'
        var conta = numberval/5.35
        resultado.innerHTML = String(`R$${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>$</strong> ${conta.toFixed(2).replace('.',',')}`)
    }
    

    //Euro
    if(vde == "€" && vpara == "real2"){
        resultado.style.display = 'block'
        var conta = numberval*5.73
        resultado.innerHTML = String(`€${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>R$</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "€" && vpara == "euro2"){
        resultado.style.display = 'block'
        var conta = numberval*1
        resultado.innerHTML = String(`€${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>€</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "€" && vpara == "libra2"){
        resultado.style.display = 'block'
        var conta = numberval/1.17
        resultado.innerHTML = String(`€${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>£</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "€" && vpara == "iene2"){
        resultado.style.display = 'block'
        var conta = numberval/0.0059
        resultado.innerHTML = String(`€${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>¥</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "€" && vpara == "dolar2"){
        resultado.style.display = 'block'
        var conta = numberval/0.92
        resultado.innerHTML = String(`€${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>$</strong>${conta.toFixed(2).replace('.',',')}`)
    }

    //Libra
    if(vde == "£" && vpara == "real2"){
        resultado.style.display = 'block'
        var conta = numberval/0.15
        resultado.innerHTML = String(`£ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>R$</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "£" && vpara == "euro2"){
        resultado.style.display = 'block'
        var conta = numberval/0.85
        resultado.innerHTML = String(`£ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>€</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "£" && vpara == "libra2"){
        resultado.style.display = 'block'
        var conta = numberval/1
        resultado.innerHTML = String(`£ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>£</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "£" && vpara == "iene2"){
        resultado.style.display = 'block'
        var conta = numberval/0.005
        resultado.innerHTML = String(`£ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>¥</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "£" && vpara == "dolar2"){
        resultado.style.display = 'block'
        var conta = numberval/0.79
        resultado.innerHTML = String(`£ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>$</strong>${conta.toFixed(2).replace('.',',')}`)
    }

    //Iene
    if(vde == "¥" && vpara == "real2"){
        resultado.style.display = 'block'
        var conta = numberval/29.32
        resultado.innerHTML = String(`¥ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>R$</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "¥" && vpara == "euro2"){
        resultado.style.display = 'block'
        var conta = numberval/169.09
        resultado.innerHTML = String(`¥ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>€</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "¥" && vpara == "libra2"){
        resultado.style.display = 'block'
        var conta = numberval/199.05
        resultado.innerHTML = String(`¥ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>£</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "¥" && vpara == "iene2"){
        resultado.style.display = 'block'
        var conta = numberval/1
        resultado.innerHTML = String(`¥ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>¥</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "¥" && vpara == "dolar2"){
        resultado.style.display = 'block'
        var conta = numberval/156.73
        resultado.innerHTML = String(`¥ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>$</strong>${conta.toFixed(2).replace('.',',')}`)
    }

    // Dólar

    if(vde == "$" && vpara == "real2"){
        resultado.style.display = 'block'
        var conta = numberval/0.19
        resultado.innerHTML = String(`$ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>R$</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "$" && vpara == "euro2"){
        resultado.style.display = 'block'
        var conta = numberval/1.08
        resultado.innerHTML = String(`$ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>€</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "$" && vpara == "libra2"){
        resultado.style.display = 'block'
        var conta = numberval/1.27
        resultado.innerHTML = String(`$ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>£</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "$" && vpara == "iene2"){
        resultado.style.display = 'block'
        var conta = numberval/1
        resultado.innerHTML = String(`$ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>¥</strong>${conta.toFixed(2).replace('.',',')}`)
    }
    else if(vde == "$" && vpara == "dolar2"){
        resultado.style.display = 'block'
        var conta = numberval/0.0064
        resultado.innerHTML = String(`$ ${numberval.toFixed(2).replace('.',',')} equivale(m) a <strong>$</strong>${conta.toFixed(2).replace('.',',')}`)
    }
}