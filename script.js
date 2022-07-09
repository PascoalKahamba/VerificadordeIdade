var textano = document.querySelector('#textano')
var res = document.querySelector('.res')
var butao = document.querySelector('#butao')
butao.addEventListener('click', clicar)
var data = new Date()
var ano = data.getFullYear()

function clicar() {
    var idade = ano - textano.value
    if (textano.value.length == 0 || textano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        // alert('Tudo OK!')
        var img = document.createElement('img')
            // img.setAttribute('id', 'foto')
        var fsexo = document.getElementsByName('textsex')
        var genero = ''
        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'img/homembebe.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'img/homemjovem.png')

            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'img/homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/homemidoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'img/mulherbebe.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'img/mulherjovem.png')

            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'img/mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/mulheridoso.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }

}