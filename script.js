var dicionario = {
  "A": "2",
  "B": "22",
  "C": "222",
  "D": "3",
  "E": "33",
  "F": "333",
  "G": "4",
  "H": "44",
  "I": "444",
  "J": "5",
  "K": "55",
  "L": "555",
  "M": "6",
  "N": "66",
  "O": "666",
  "P": "7",
  "Q": "77",
  "R": "777",
  "S": "7777",
  "T": "8",
  "U": "88",
  "V": "888",
  "W": "9",
  "X": "99",
  "Y": "999",
  "Z": "9999",
  "*": "+",
  "0": " "
};

var clear_text = false;

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function converter_texto() {
  let texto = document.getElementById("display").value;
  let texto_convertido = "";
  let texto_cortado = texto.trim().split(' ');
  for(x in texto_cortado) {
    let letra = getKeyByValue(dicionario,texto_cortado[x]);
    if(letra != null) {
      texto_convertido += letra
      document.getElementById("display").value = texto_convertido;
    }
  };
  clear_text = true;
}

function adicionar_texto(numero) {
  let x = document.getElementById("display");
  if(numero == " ") {
    var lastChar = x.value[x.value.length -1];
    if(lastChar == " ") return;
  }
  if(clear_text) {
    x.value = "";
    clear_text = false;
  };
  x.value += numero;
}

function limpar() {
  let x = document.getElementById("display");
  x.value = "";
}
