/* Questão 1 
Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.*/

  function numerosPrimo() {
  var DigiteNumero = prompt('Digite um número de 1 a 1000.');

  if (isNaN(DigiteNumero) || DigiteNumero < 1 || DigiteNumero > 1000) {
      return alert('Erro. Esse número não é válido.');
  }
 
  else {
      DigiteNumero = parseInt(DigiteNumero);

      if (DigiteNumero < 2) {
          return alert('O número ' + DigiteNumero + ' não é primo.');
      }
      if (DigiteNumero === 2) {
          return alert('O número ' + DigiteNumero + ' é primo.');
      }
      if (DigiteNumero % 2 === 0) {
          return alert('O número ' + DigiteNumero + ' não é primo.');
      }

      for (var i = 3; i <= Math.sqrt(DigiteNumero); i += 2) {
          if (DigiteNumero % i === 0) {
              return alert('O número ' + DigiteNumero + ' não é primo.');
          }
      }

      return alert('O número ' + DigiteNumero + ' é primo.');
  }
}
numerosPrimo();


/* Questão 2 
Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.*/

function criarSenha() {
    var senha = prompt('Digite a senha. (Requisitos: pelo menos 8 caracteres, pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número.)');

    if (senha.length < 8) {
        return alert('A senha deve ter pelo menos 8 caracteres.');
    }

    if (!/[A-Z]/.test(senha)) {
        return alert('A senha deve conter pelo menos uma letra maiúscula.');
    }

    if (!/[a-z]/.test(senha)) {
        return alert('A senha deve conter pelo menos uma letra minúscula.');
    }

    if (!/\d/.test(senha)) {
        return alert('A senha deve conter pelo menos um número.');
    }

    return alert('Senha válida.');
}

criarSenha()


/* Questão 3
Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.*/

function calcularFatorial() {
    var numero = prompt('Digite um número de 1 a 10');
    numero = parseInt(numero);

    if (numero > 10 || numero < 1) {
        return alert('Digite um número válido de 1 a 10.');
    }

    var fatorial = 1;

    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return alert('O fatorial de ' + numero + ' é ' + fatorial + '.');
}


/* Questão 4
Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.*/

function quadradoPerfeito() {
    var numero = prompt('Digite um número.')

    if (numero < 0) {
        return alert('O número não pode ser negativo.');
    }

    var raiz = Math.sqrt(numero);

    if (raiz % 1 === 0) {
        return alert('É um quadrado perfeito.');
    } else {
        return alert('Não é um quadrado perfeito.');
    }
}
