const inputs = document.querySelectorAll('input')


inputs.forEach(element => {
    element.addEventListener('click', e => {
        const valorDaConta = document.getElementById('account-value').value
        const numeroDePessoas = document.getElementById('number-people').value
        const option = e.target.value

        inputs.forEach(e => {
            if (e.name === 'tip-percentage' && e.checked === true) {
                e.parentNode.classList.add('ativo')

            } else {
                e.parentNode.classList.remove('ativo')
            }
        })


        // Opção personalizada
        if (e.target.id === 'percentage-custom') {
            const radio = document.querySelector('#percentage-custom')
            const valor = e.target

            if (valor.id === 'percentage-custom' && !isNaN(Number(valor.value))) {
                radio.checked = true
                radio.parentNode.classList.add('ativo')
            }
        }


        // Number of People
        if (e.target.id == 'number-people' && e.target.value < 0) {
            console.log("erro");
        }


        const tip = document.querySelector('.form__currency-tip')
        tip.textContent = tipValue(valorDaConta, option, Number(numeroDePessoas))

        const total = document.querySelector('.form__currency-total')
        total.textContent = divisao(valorDaConta, option, Number(numeroDePessoas))

        const reset = document.querySelector('[data-reset]')
        console.log(reset);
        reset.addEventListener('click', e => {
            tip.textContent = '0,00'
            total.textContent = '0,00'
    
        })
    
    })
})


function tipValue(value, percent, people) {
    const converterNumero = Number(value)
    const converterNumero2 = Number(percent.replace('%', ''))
    const totalTip = ((converterNumero * ((converterNumero2 / 100))) / people).toFixed(2).replace('.', ',')

    return totalTip
}


function divisao(total, perc, people) {
    const converterNumero = Number(total)
    const converterNumero2 = Number(perc.replace('%', ''))
    const totalPorPessoa = ((converterNumero + (converterNumero * (converterNumero2 / 100))) / people).toFixed(2).replace('.', ',')

    return totalPorPessoa
}

