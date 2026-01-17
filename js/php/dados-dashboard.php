<?php
include "conexao.php";

function total($t) {
    global $conn;
    return $conn->query("SELECT COUNT(*) total FROM $t")
                ->fetch_assoc()['total'];
}

echo json_encode([
    "clientes" => total("clientes"),
    "profissionais" => total("profissionais"),
    "agendamentos" => total("agendamentos"),
    "checkins" => total("checkins")
]);
