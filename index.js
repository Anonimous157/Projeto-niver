let fate=document.querySelector("#data");
let ff=document.querySelector(".hh");
let tela_data=document.querySelector("#tela_data");
let niver_motta=document.querySelector(".niver_motta");
let body=document.querySelector(".corpo");
let textao=document.querySelector(".texto_principal")
let instagram=document.querySelector(".instagram");
let relogio=document.querySelector("#relogiom")
let quem_tá_de_niver=0
//a var quem_tá_de_niver é usada para setar quem é o aniversariante, e servir como uma state machine
//=1 =>motta
//=2 =>LEONARDO
//=3 =>ARTHUR
//=4 =>AMABILY
//=5 =>LUCAS//
const rosa="#ee92c7d8";

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
  body.style.backgroundColor="#FFD6E7";
  ff.textContent="feliz aniversario motta";
  instagram.href="https://www.instagram.com/anallumotta_?igsi=amdtNnV4YW43Zzdx";

  document.querySelector("#musica_motta").play();

  tela_data.style.opacity="0";
  tela_data.addEventListener("transitionend" , ()=>{
    tela_data.style.display="none";} , {once:true});

  niver_motta.style.display="block";
  setTimeout(()=>{
    niver_motta.style.opacity="1";}
            ,50);
  revelarAosPoucos();
  
}

function revelarAosPoucos() {
  let elementos = document.querySelectorAll(".aparece");

  elementos.forEach((elemento, index) => {
    setTimeout(() => {
      elemento.style.opacity = "1";
    }, index * 500); // cada um espera 500ms a mais que o anterior
  });
  }

let data_chegada_motta= new Date("2026-06-01T00:00:00");

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
  