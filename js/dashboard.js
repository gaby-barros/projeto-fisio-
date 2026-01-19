function atualizar() {
    fetch("dados.json")
        .then(r => r.json())
        .then(d => {
            clientes.innerText = d.clientes;
            profissionais.innerText = d.profissionais;
        });
}

setInterval(atualizar, 3000);
atualizar();
