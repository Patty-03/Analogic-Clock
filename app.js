function setAnalogicClock(){
    let ticTacSound = new Audio('./Media/tic-tac.mp3');
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hrValue = (hours * 30) + (minutes * 6) / 12;
    minValue = minutes * 6;
    secValue = seconds * 6;

    document.querySelector('.hr-hand').style.transform = "rotate(" + hrValue + "deg)";
    document.querySelector('.min-hand').style.transform = "rotate(" + minValue + "deg)";
    document.querySelector('.sec-hand').style.transform = "rotate(" + secValue + "deg)";
    ticTacSound.play();
}

function setDigitalClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    if(seconds < 10){
        document.querySelector('.seconds').textContent = '0' + seconds;
    }
    else
    document.querySelector('.seconds').textContent = seconds;


    let amPm = document.querySelector('.meridian');

    if(hours < 12){
        amPm.textContent = 'AM';
    }
}

const toggleBtn = document.querySelector('.btn');

function toggleClock(){
    let analogic = document.querySelector('.analog-clock');
    let digital =  document.querySelector('.digital-clock');

    analogic.classList.toggle('invisible');
    digital.classList.toggle('invisible');

    if(toggleBtn.textContent === 'Digital Clock'){
        toggleBtn.textContent = 'Analogic Clock';
    }
    else{
        toggleBtn.textContent = 'Digital Clock';
    }

}

setInterval(setAnalogicClock, 1000);
setInterval(setDigitalClock, 1000);
toggleBtn.addEventListener('click', toggleClock);