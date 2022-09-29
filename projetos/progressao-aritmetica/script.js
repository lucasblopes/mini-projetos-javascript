function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    if (inicio.length == 0 || fim.length == 0) {
        alert('[ERRO] Início e Fim precisam serem preenchidos.')
    } else if (passo == 0) {
        alert('[ERRO] Passo não pode ser igual a zero!')
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (i < f) {
            //Contagem crescente
        for(let c = i; c <= f; c += p) { //Enquanto c (início) não chegar ao fim, ele ganha um passo (razão da PA)
            res.innerHTML += ` ${c} \u{1F449}` //emoji (próximo)
        }
        res.innerHTML += ` \u{1F3C1}` //emoji (bandeira)
    }else {
        //Contagem regressiva
        for(let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
    }
    res.innerHTML += ` \u{1F3C1}`
}
    }
}