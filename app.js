function setClock(){
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

setInterval(setClock, 1000);