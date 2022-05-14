console.log('Javascript carregado');

function validaCPF(cpf) {
  console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  }
  else {
    // o substring funciona a partir de um ponto final e inicial, ele quebra o texto e retorna somente o que foi pedido
    // ex abaixo: a partir da posição 0, quero pegar 9 caracteres
    let numeros = cpf.substring(0, 9);
    // no exemplo abaixo, o substring percorre todas as posições até a posição 9, e pega todo o restante
    let digitos = cpf.substring(9)

// sobre a função charAt(), https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    let soma = 0;
    for (let i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;

    }
  }

  function validacao() {
    console.log('Iniciando validação do CPF');

    let cpf = document.getElementById('cpf-digitado').value;

    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
      document.getElementById('success').style.display = 'block';
    }
    else {
      document.getElementById('error').style.display = 'block'
    }
  }
}