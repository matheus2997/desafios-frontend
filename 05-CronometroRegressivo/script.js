const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const endDate = new Date();
endDate.setHours(23, 59, 59); // Definir a data de término (23:59:59 do dia atual)

const relogio = setInterval(function () {
  let dateToday = new Date();
  let timeDiff = endDate.getTime() - dateToday.getTime(); //horario atual - horario final

  // Verificar se o tempo já acabou
  if (timeDiff <= 0) {
    clearInterval(relogio);
    hours.textContent = '00'; //a string 00 será adicionada caso o horario seja exemplos 00:59
    minutes.textContent = '00';
    seconds.textContent = '00';
    return;
  }

  let hr = Math.floor(timeDiff / (1000 * 60 * 60)); 
  //(1000 * 60 * 60) é a quantidade de milissegundos em uma hora.
  //Dividindo timeDiff por essa quantidade, obtemos a quantidade de horas restantes.
  //Dividindo timeDiff por essa quantidade, obtemos a quantidade de horas restantes.
  let min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((timeDiff % (1000 * 60)) / 1000);

  if (hr < 10) hr = '0' + hr; //adiciona o  caso o horario seja na casa dos 0 a 9
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = s;

}, 1000);
