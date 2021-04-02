function SelecionaMoeda() {
    let nomeMoeda=(document.getElementById("nomeMoeda"))
    let moeda=(document.getElementById("moeda"))
    if (nomeMoeda.value=="dolar") {
        alert (`A conversão de dolar para reais é R$${Number(moeda.value)*5.71.toFixed(2)}`)
    }
    if (nomeMoeda.value=="euro") {
        alert (`A conversão de euro para reais é R$${Number(moeda.value)*6.72.toFixed(2)}`)
    }
    if (nomeMoeda.value=="pesoA") {
        alert (`A conversão de peso argentino para reais é R$${Number(moeda.value)*0.062.toFixed(2)}`)
    }
    if (nomeMoeda.value=="iene") {
        alert (`A conversão de iene para reais é R$${Number(moeda.value)*0.052.toFixed(2)}`)
    }
    
}