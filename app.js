document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addButton").addEventListener("click", adicionarAmigo);
    document.getElementById("sortButton").addEventListener("click", sortearAmigo);
});

// Variáveis globais
let sorteioRealizado = false; // Variável para controlar se o sorteio já foi feito
let nomes = [];


// Função para adicionar um amigo à lista

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    nomes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

// Função para atualizar a lista de amigos

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong>!</li>`;

    // Bloqueia a adição de novos nomes
    sorteioRealizado = true;
    document.getElementById("amigo").disabled = true;
    document.getElementById("addButton").disabled = true;

}

document.getElementById("clearButton").addEventListener("click", limparLista);

// Função para limpar a lista APENAS se um amigo já foi sorteado
function limparLista() {
    if (!sorteioRealizado) {
        alert("Você só pode limpar a lista após sortear um amigo!");
        return;
    }

    nomes = [];
    sorteioRealizado = false; // Permite novos nomes
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";

    // Reativa o campo de entrada e o botão
    document.getElementById("amigo").disabled = false;
    document.getElementById("addButton").disabled = false;
}
