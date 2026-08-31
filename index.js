let fate=document.querySelector("#data");
let ff=document.querySelector(".hh");
let tela_data=document.querySelector("#tela_data");
let niver_motta=document.querySelector("#niver_motta");
let body=document.querySelector(".corpo");
let instagram=document.querySelector(".instagram");
let relogio=document.querySelector("#relogiom");
let musica=document.querySelector("#musica_motta");
let botaoMusica=document.querySelector("#botao_music");
let quem_ta_de_niver=0
//a var quem_ta_de_niver e usada para setar quem e o aniversariante, e servir como uma state machine
//=1 =>motta
//=2 =>LEONARDO
//=3 =>ARTHUR
//=4 =>AMABILY
//=5 =>LUCAS//

let musicas = [
  "./Musicas/Pabllo_parabens.mp3",
  "./Musicas/MTG PRA FICAR LEGAL.mp3"
];
let musicaAtual = 0;

fate.addEventListener("change", () => {
  if (fate.value==="2008-09-01"){
    motta();
    quem_ta_de_niver=1;
  }
  
})

function motta() {
  body.style.backgroundColor="#ffd6e7df";
  ff.textContent="feliz aniversario motta";
  instagram.href="https://www.instagram.com/anallumotta_?igsi=amdtNnV4YW43Zzdx";

  musica.play();

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
    }, index * 500);
  });
}

botaoMusica.addEventListener("click", () => {
  musicaAtual = (musicaAtual + 1) % musicas.length;
  musica.src = musicas[musicaAtual];
  musica.load();
  musica.play();
});

let data_chegada_motta= new Date("2026-06-01T00:00:00");

function atualizarRelogio() {
  let agora = new Date();
  let diferenca = agora - data_chegada_motta;

  let dias = Math.floor(diferenca / 86400000);
  let horas = Math.floor((diferenca % 86400000) / 3600000);
  let minutos = Math.floor((diferenca % 3600000) / 60000);
  let segundos = Math.floor((diferenca % 60000) / 1000);

  relogio.textContent=`~${dias} dias,${horas}h, ${minutos}m, ${segundos}s`;
}

setInterval(atualizarRelogio, 1000);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    musica.pause();
  } else if (quem_ta_de_niver !== 0) {
    musica.play();
  }
});