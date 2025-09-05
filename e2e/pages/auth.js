// Escolhi separar os dados de login válido para facilitar reutilização em múltiplos testes.
// Isso permite que se a credencial mudar, só precisamos atualizar aqui, mantendo DRY.
// Para melhorias futuras, pode ser externalizado para um arquivo seguro ou serviço de gestão de segredos.
// Por exemplo, no Maestro é possivel usar variaveis de ambients de shellseguindo um padrao de arquivo MAESTRO_

// Exemplo de uso de como ficaria essa abordagem: 
   // export MAESTRO_CPF=XXXXX
   // e no meu yml chamaria dessa forma -tapOn: "${MAESTRO_CPF}"

output.login = {
     email: 'govele2776@futurejs.com',
     password: '@SenhaTeste1',
     cpf: '00120854058',
     telefone: '11999999999'
}

output.signup = {
      email: output.datas.email,
      password: output.datas.password,
      cpf: output.datas.cpf,
      telefone: output.datas.telefone
}


output.invalidLogin = {
      email: 'williamteste@teste.com',
      password: '@Senhaerrada1',
}