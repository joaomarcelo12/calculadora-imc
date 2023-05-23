const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado')

const getText = (imc) => {
    if (imc > 40) return 'Obesidadade grau III'
    if (imc > 35) return 'Obesidadade grau II'
    if (imc > 30) return 'Obesidadade grau I'
    if (imc > 25) return 'Levemente acima do peso'
    if (imc > 18.5) return 'Peso ideal'
    return 'Abaixo do peso'
}

const imcCalc = () => {
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc); 