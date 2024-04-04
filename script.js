function cadastro() {
    var nome = input_nome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmar = input_confirmar_senha.value;

    var arroba = email.indexOf('@');
    var tamanho_senha = senha.length;
    if (nome == "") {
        alert(`Necessário um nome para continuar cadastro.`);
    }
    else if (arroba < 0) {
        alert(`Necessário '@' em campo E-mail.`);
    } else if (tamanho_senha < 4) {
        alert(`Senha muito fraca. Mínimo 4 caracteres.`);
        input_senha.value = ``;
        input_confirmar_senha.value = ``;
    } else if (senha != confirmar) {
        alert(`Senha inválida.`);
        input_senha.value = ``;
        input_confirmar_senha.value = ``;
    } else {
        alert(`Bem vindo, ${nome}`);
    }
}