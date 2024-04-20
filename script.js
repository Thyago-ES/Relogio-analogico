const ponteiroHora = document.querySelector(".ponteiro-h");
const ponteiroMinuto = document.querySelector(".ponteiro-m");
const ponteiroSegundo = document.querySelector(".ponteiro-s");


const recuperarTempo = () => {
    const data = new Date();

    return {
        horas: data.getHours() * 30 + data.getMinutes() / 2,
        minutos: data.getMinutes() * 6,
        segundos: data.getSeconds() * 6,
    };
}

const rodarPonteiro = (horas, minutos, segundos) => {
    ponteiroHora.style.transform = `translate(0, -50%) rotate(${horas}deg)`;
    ponteiroMinuto.style.transform = `translate(0, -50%) rotate(${minutos}deg)`;
    ponteiroSegundo.style.transform = `translate(0, -50%) rotate(${segundos}deg)`;
};

setInterval(() => {
    const { horas, minutos, segundos } = recuperarTempo();

    rodarPonteiro( horas, minutos, segundos );
}, 1000);