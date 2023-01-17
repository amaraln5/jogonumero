function verificaSeoChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(ChuteForInvlido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido!</div>`
        return
    }

    if(numeroMaiorQueMaiorValorOuMenorQueMenorValor(numero)){
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if( numero === numeroSecreto){
        document.body.innerHTML =  `
            <h2> Parabéns Você Acertou </h2>
            <h3> O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`

    } else{
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`

    }

}

function ChuteForInvlido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorQueMaiorValorOuMenorQueMenorValor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})
