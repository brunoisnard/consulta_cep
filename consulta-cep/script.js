function buscarEndereco() {
    var cep = document.getElementById("cep").value;
    var urlViaCEP = "https://viacep.com.br/ws/" + cep + "/json/";

    // Buscar endereço utilizando a API ViaCEP
    fetch(urlViaCEP)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById("endereco").textContent = "CEP não encontrado";
            } else {
                document.getElementById("endereco").textContent = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            }
        })
        .catch(error => console.error('Erro ao buscar endereço:', error));
}

function imprimir() {
    window.print();
}
