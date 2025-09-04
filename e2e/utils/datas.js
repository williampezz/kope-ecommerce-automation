function generateEmail() {
  var random = Math.floor(Math.random() * 100000);
  return "user" + random + "@teste.com";
}

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

function randomPhone() {
  return "11" + Math.floor(900000000 + Math.random() * 99999999);
}

const senha = '@SenhaTeste1'; // Senha fixa

// Objeto exposto pro Maestro
output.datas = {
  email: generateEmail(),   // 
  cpf: randomCPF(),
  password: senha

};
