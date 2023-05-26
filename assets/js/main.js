const form = document.querySelector('#formulario'); //a gente capturou o formulário aqui.

//adicionou um escutador, um evento aqui no formulário, que é o evento de submit.
form.addEventListener('submit', function (e) { /*e = event*/
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');/*target: vai me informar o elemento que esta recebendo o evento, ou qual elemento foi clicado*/
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) { //Se o peso for falso "NaN" 
    setResultado('Peso inválido', false);
    return; //usando return para quebrar o codigo aqui. Evitando de que continue rodando caso de um erro
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
/*Nao precisa do else ja que estamos colando o return que ira parar o codigo quanto chegar no resultado certo*/

  if (imc >= 39.9) {
    return nivel[5];
  } 

  if (imc >= 34.9) {
    return nivel[4];
  } 

  if (imc >= 29.9) {
    return nivel[3];
  } 

  if (imc >= 24.9) {
    return nivel[2];
  } 

  if (imc >= 18.5) {
    return nivel[1];
  } 

  if (imc < 18.5) {
    return nivel[0];
  }
  
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2)
}

function criaP () {
  const p = document.createElement('p');
  //p.classList.add('paragrafo-resultado'); adicionar uma classe para a tag criada "p"
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
 
  const p = criaP();

  if (isValid) {
    p.classList.add(`paragrafo-resultado`);
  } else {
    p.classList.add(`bad`);
  }
  p.innerHTML = msg;
  resultado.appendChild(p); //insere um "filho"
}