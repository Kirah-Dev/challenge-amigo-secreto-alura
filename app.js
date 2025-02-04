//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
  const nomeAmigo = inputAmigo.value.trim(); // método trim() remove os espaços em branco do início ou fim de um texto

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }
  // Verifica se o nome do amigo está vazio. Se estiver, exibe um alerta e sai da função.

  if (amigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado!");
    return;
  }
  // Verifica se o nome já existe na lista de amigos. Se existir, exibe um alerta e sai da função. Isso impede a adição de nomes duplicados.

  amigos.push(nomeAmigo); // Adiciona o nome do amigo ao array amigos.
  atualizarListaAmigos();
  inputAmigo.value = ""; // Limpa o campo de texto após adicionar o nome.
  inputAmigo.focus(); // Coloca o foco de volta no campo de texto para facilitar a digitação do próximo nome.
}

function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens. Isso é importante para evitar que os nomes se dupliquem cada vez que a lista é atualizada.

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i]; // Pega o nome do amigo na posição i do array.
    const li = document.createElement("li"); // Cria um novo elemento <li> para cada amigo.
    li.textContent = amigo; // Define o texto do elemento <li> com o nome do amigo.
    listaAmigos.appendChild(li); // Adiciona o elemento <li> à lista HTML (<ul id="listaAmigos">).
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos à lista antes de sortear.");
    return;
  }
  //Verifica se a lista de amigos está vazia. Se estiver, exibe um alerta e sai da função.

  const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um número inteiro aleatório entre 0 (inclusive) e o tamanho do array amigos (exclusive). Este número será usado como índice para selecionar um amigo aleatório.
  const amigoSorteado = amigos[indiceAleatorio]; // Pega o nome do amigo no índice aleatório do array amigos.
  resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`; // Define o HTML interno da lista de resultados (<ul id="resultado">) para exibir o resultado do sorteio dentro de um elemento <li>.
}
