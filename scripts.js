var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var telefone = document.getElementById("Telefone");

var CEP = documment.getElementById("CEP");

var Logradouro = document.getElementById("Logradouro");

var Numero = document.getElementById("Numero");

var Complemento = document.getElementById("Complemento");

var Bairro = document.getElementById("Bairro");

function alertar(){
   //alert(nome.value + " " + "clicou no botao!!!");
   saida.innerText = "Nome:" + " " + nome.value +
   "\n E-mail:" + " " + email.value + 
   "\n Telefone:" + " " + telefone.value + 
   "\n CEP:" + " " + CEP.value +
   "\n Logradouro:" + " " + Logradouro.value +
   "\n Numero:" + " " + Numero.value +
   "\n Complemento:" + " " + Complemento.value +
   "\n Bairro:" + " " + Bairro.value;
}

