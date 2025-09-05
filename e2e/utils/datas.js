// Gera um email aleatório para cada execução de teste
// Decisão técnica: evitar colisão com registros existentes no sistema, 
// permitindo rodar múltiplos testes consecutivos sem falha.
function generateEmail() {
  var random = Math.floor(Math.random() * 100000);
  return "user" + random + "@teste.com";
}


// Gera um CPF válido aleatório
// Decisão técnica: necessário para testes que validam campos obrigatórios e regras de negócio
// O cálculo do dígito verificador segue a regra oficial do CPF, garantindo que o sistema aceite.
function randomCPF() {
  function rand(digits) {
    var arr = [];
    for (var i = 0; i < digits; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  }

  var n = rand(9);
  var d1 = (n[0]*10 + n[1]*9 + n[2]*8 + n[3]*7 + n[4]*6 + n[5]*5 + n[6]*4 + n[7]*3 + n[8]*2) % 11;
  d1 = d1 < 2 ? 0 : 11 - d1;

  var d2 = (n[0]*11 + n[1]*10 + n[2]*9 + n[3]*8 + n[4]*7 + n[5]*6 + n[6]*5 + n[7]*4 + n[8]*3 + d1*2) % 11;
  d2 = d2 < 2 ? 0 : 11 - d2;

  return n.join("") + d1 + d2;
}

// Gera um telefone aleatório fixando DDD 11
// Decisão técnica: telefones válidos mas não reais, para não interferir em dados de produção
function randomPhone() {
  return "11" + Math.floor(900000000 + Math.random() * 99999999);
}

// Senha fixa para todos os testes
// Decisão técnica: facilita a manutenção e evita gerar senhas inválidas que quebrem os testes
const senha = '@SenhaTeste1'; 

// Objeto exposto para uso nos testes Maestro
// Decisão técnica: centralizar todos os dados de teste em um único objeto melhora reutilização, 
// DRY e facilita alterações futuras.
output.datas = {
  email: generateEmail(),   
  cpf: randomCPF(),
  password: senha

};
