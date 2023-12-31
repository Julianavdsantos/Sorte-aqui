let copy = document.querySelectorAll('.copy');

function pegarValoresHtml() {
  const valorMaximo = document.getElementById('valor-maximo').value
  const quantidadeNumeros = document.getElementById(
    'quantidade-de-numeros'
  ).value

  return {
    valorMaximo: Number(valorMaximo),
    quantidadeNumeros: Number(quantidadeNumeros)
  }
}

function gerarNumeroAleatorio(valorMaximo) {
  return Math.ceil(Math.random() * valorMaximo)
}

function criarTdComNumero(numero) {
  const td = document.createElement('td')

  td.textContent = numero

  if (numero < 10) {
    td.textContent = '0' + numero
  }

  return td
}

function mostraNumerosNoHTML(numeros) {
  const { quantidadeNumeros } = pegarValoresHtml()

  const listaE = document.getElementById('lista')

  for (let i = 0; i < quantidadeNumeros; i++) {
    const td = criarTdComNumero(numeros[i])
    listaE.appendChild(td)
  }
}



function sortear() {
  debugger
  // limpar números anteriores

  const { valorMaximo, quantidadeNumeros } = pegarValoresHtml()

  if (valorMaximo < quantidadeNumeros) {
    alert('Valor máximo não pode ser menor que a quantidade de números')
    return
  }
  if (valorMaximo == '' || quantidadeNumeros == '') {
    alert('Preencha todos os campos')
    return
  }

  const numeros = new Set(gerarNumerosAleatorios())

  if (numeros.size < quantidadeNumeros) {
    while (numeros.size < quantidadeNumeros) {
      numeros.add(gerarNumeroAleatorio(valorMaximo))
      
    }
  }

  mostraNumerosNoHTML([...numeros])
    
  if (copy.length > 0) {
    copy[0].style.display = 'block';
  }


}

document.addEventListener("DOMContentLoaded", function () {
  let copy = document.querySelectorAll('.copy');

  

  copy[0].addEventListener('click', function (e) {
    const listaConteudo = document.getElementById('lista').innerText;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = listaConteudo;

    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    alert('Conteúdo copiado com sucesso!');
  });

  
});


function gerarNumerosAleatorios() {
  const { valorMaximo, quantidadeNumeros } = pegarValoresHtml()

  let numeros = []
  for (let i = 0; i < quantidadeNumeros; i++) {
    const numeroAleatorio = gerarNumeroAleatorio(valorMaximo)
    numeros.push(numeroAleatorio)
  }

  return numeros
}


