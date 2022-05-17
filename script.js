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

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

// Validação do primeiro dígito
    if (resultado != digitos.charAt(0)) {
      return false;
    }
    soma = 0;
    numeros = cpf.substring(0, 10);
    for (let k =11; k > 1; k --) {
      soma += numeros.charAt(11 - k) * k;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

// Validacao do Segundo Digito
    if (resultado != digitos.charAt(1)) {
      return false;
    }
    return true;
  }
}

function validacao() {
  console.log('Iniciando validação do CPF');
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  let cpf = document.getElementById('cpf-digitado').value;
  let resultadoValidacao = validaCPF(cpf);

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block';
  }
  else {
    document.getElementById('error').style.display = 'block'
  }
}
