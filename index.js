let fate=document.querySelector("#data");
let ff=document.querySelector(".hh");
let tela_data=document.querySelector("#tela_data");
let niver_motta=document.querySelector("#niver_motta");
let body=document.querySelector(".corpo");
let relogio=document.querySelector("#relogiom")
let quem_tá_de_niver=0
//a var quem_tá_de_niver é usada para setar quem é o aniversariante, e servir como uma state machine
//=1 =>motta
//=2 =>LEONARDO
//=3 =>ARTHUR
//=4 =>AMABILY
//=5 =>LUCAS//

fate.addEventListener("change", () => {
  if (fate.value==="2026-09-01"){
    motta();
    quem_tá_de_niver=1;
  }
  else{
    ff.textContent=fate.value;
  }
})
function motta() {
  body.style.backgroundColor="#ee92c7d8";
  tela_data.style.display="none";
  niver_motta.style.display="block";
  ff.textContent="feliz aniversario motta";
}

let data_chegada_motta= new Date("2026-05-01T00:00:00");

function atualizarRelogio() {
  let agora = new Date();
  
    let diferenca = agora - data_chegada_motta; // em milissegundos

    let dias = Math.floor(diferenca / 86400000);
    let horas = Math.floor((diferenca % 86400000) / 3600000);
    let minutos = Math.floor((diferenca % 3600000) / 60000);
    let segundos = Math.floor((diferenca % 60000) / 1000);

    relogio.textContent=`~${dias} dias,${horas}h, ${minutos}m, ${segundos}s`;
}

setInterval(atualizarRelogio, 1000);
  