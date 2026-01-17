function atualizar() {
    fetch("php/dados-dashboard.php")
        .then(r => r.json())
        .then(d => {
            clientes.innerText = d.clientes;
            profissionais.innerText = d.profissionais;
            agendamentos.innerText = d.agendamentos;
            checkins.innerText = d.checkins;
        });
}

setInterval(atualizar, 5000);
atualizar();
