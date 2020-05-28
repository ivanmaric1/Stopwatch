let stopWatch = document.querySelector('.output')
let startaj = document.querySelector('#start')
let stopiraj = document.querySelector('#stop')
let resetiraj = document.querySelector('#reset')


let ms = 0;
let s = 0;
let m = 0;

let timer;

function start() {
    if(!timer) {
        timer = setInterval(run, 10) 
    }
}

function run() {
    stopWatch.textContent = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}:${ms < 10 ? '0' + ms : ms}`;
    ms++;
    if(ms == 100) {
        ms = 0;
        s++
    }
    if(s == 60) {
        s = 0;
        m++
    }
}

function stop() {
    clearInterval(timer)
    timer = false
}

function reset() {
   stopWatch.textContent = '00:00:00'
}

startaj.addEventListener('click', start)
stopiraj.addEventListener('click', stop)
resetiraj.addEventListener('click', reset)