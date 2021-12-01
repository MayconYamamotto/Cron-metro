let tempo = {
  intervalo: null,
  horas: 0,
  minutos: 0,
  segundos: 0,
};

let acoes = {
  botaoIniciar: document.getElementById("start"),
  mostrarCronometro: document.getElementById("clock"),
};

function iniciarCronometro() {
  tempo.intervalo = setInterval(cronometro, 1000);
  acoes.botaoIniciar.disabled = true;
}

function pararCronometro() {
  clearInterval(tempo.intervalo);

  acoes.botaoIniciar.disabled = false;
}

function resetarCronometro() {
  clearInterval(tempo.intervalo);
  acoes.botaoIniciar.disabled = false;

  tempo.horas = 0;
  tempo.minutos = 0;
  tempo.segundos = 0;

  acoes.mostrarCronometro.textContent = "00:00:00";
}

function cronometro() {
  tempo.segundos++;

  if (tempo.segundos > 59) {
    tempo.minutos++;
    tempo.segundos = 0;
    if (tempo.minutos > 59) {
      tempo.horas++;
      tempo.minutos = 0;
    }
  }

  acoes.mostrarCronometro.textContent = `${("00" + tempo.horas).slice(-2)}:${("00" + tempo.minutos).slice(-2)}:${("00" + tempo.segundos).slice(-2)}`;
}
