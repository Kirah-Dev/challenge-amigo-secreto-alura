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
  inputAmigo.value = ""; // Limpa o campo de texto após adicionar o nome.
  inputAmigo.focus(); // Coloca o foco de volta no campo de texto para facilitar a digitação do próximo nome.
}
