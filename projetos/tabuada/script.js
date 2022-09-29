function calcular() {
    let num = document.getElementById('num').value
    let tab = document.getElementById('selTab')
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num)
        let c = 1
        tab.innerHTML = '' //Limpando a tabuada antes de mostrar outra
        while (c <= 10) {
            let item = document.createElement('option') //criando options do selector (de forma dinâmica)
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // Adicionando elemento filho
            c++
        }
    }
}