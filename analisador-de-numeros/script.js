let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista') //select
let res = document.querySelector('div#res')
let valores = [] //Array

//DETERMINANDO LIMITES DE ENTRADA

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) { //n entre 1 e 100
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // -1 => valor não encontrado na lista
        return true
    } else {
        return false
    }
}

//BOTÃO ADICIONAR


function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Ativa apenas se forem true
        valores.push(Number(num.value)) // Adicionando os valores na Array
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //Adiciona o item
        res.innerHTML = '' // Limpa depois de adicionar um elemento
    }else {
        window.alert('Valor indevido ou já encontrado na lista.')
    }
    num.value = '' //Esvazia o campo após adicionar
    num.focus() //Indica que o campo pode receber valores
}

//BOTÃO FINALIZAR:

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores ante de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) { //Se o último elemento adicionado é maior que o anterior, ele será o novo "maior"
                maior = valores[pos]
            } if (valores[pos] < menor) { //idem
                menor = valores[pos]
            }
        }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>\u{1F535} Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>\u{1F535} O menor valor informado foi o ${menor} .</p>`
    res.innerHTML += `<p>\u{1F535} O maior valor informado foi o ${maior} .</p>`
    res.innerHTML += `<p>\u{1F535} A soma dos valores é ${soma} .</p>`
    res.innerHTML += `<p>\u{1F535} A média dos valores é ${media} .</p>`

    }
}