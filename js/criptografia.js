var codificar = document.getElementById("btn-criptografar");
var decodificar = document.getElementById("btn-descriptografar");
var entradaDeTexto = document.getElementById("entrada-de-texto");
var saidaDeTexto = document.getElementById("saida-de-texto");
var botaoCopiar = document.getElementById("btn-copiar");

const filtrarMensagem = (rgx, obj) => {

  if(!/^[a-z0-9 ]*$/.test(entradaDeTexto.value)) {
    return ;
  }
  saidaDeTexto.innerHTML = obj ? "criptografada" : "descriptografada";
  saidaDeTexto.value = entradaDeTexto.value.replace(rgx, key => obj[key]);
  entradaDeTexto.value = '';
}

codificar.addEventListener('click', () => {
  filtrarMensagem(/[aeiou]/g,
    {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'})
})

decodificar.addEventListener('click', () => {
  filtrarMensagem(/ai|enter|imes|ober|ufat/g, 
    {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'})
})

botaoCopiar.addEventListener('click', () => {
  saidaDeTexto.select();
  document.execCommand('copy');
  saidaDeTexto.value = '';
})