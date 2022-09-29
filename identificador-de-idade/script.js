function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 6) {
                //bebe
                img.setAttribute('src', 'imagens/bebe_masc.png')
            }else if (idade < 13) {
                //criança
                img.setAttribute('src', 'imagens/crianca_masc.png')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_masc.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_masc.png')
            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'imagens/idoso_masc.png')
            } else {
                //podre
                img.setAttribute('src', 'imagens/podre.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 6) {
                //bebe
                img.setAttribute('src', 'imagens/bebe_fem.png')
            }else if (idade < 13) {
                //criança
                img.setAttribute('src', 'imagens/crianca_fem.png')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_fem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta_fem.png')
            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'imagens/idosa_fem.png')
            } else {
                //podre
                img.setAttribute('src', 'imagens/podre.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}