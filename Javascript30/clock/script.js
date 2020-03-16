const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const date = new Date();
    const seconds= date.getSeconds();
    const secondDegree = ((seconds / 60) * 360) +90;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = date.getMinutes();
    const minDegree = ((minutes / 60) * 360) + 90;

    minsHand.style.transform = `rotate(${minDegree}deg)`;

    const hours = date.getHours();
    const hourDegree = ((hours / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    console.log(seconds);
}

setInterval(setDate, 1000);

setDate();
