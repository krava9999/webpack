let interval;
export function tickedStop() {
    clearInterval(interval);
    document.getElementById("timer__result").innerHTML = 0 + "s ";
}

export function ticked(act) {
    let seconds = document.getElementById('inputSecond').value;

    interval = setInterval(function () {
        if (seconds <= 0) {
            document.getElementById("timer__result").innerHTML = "time is out";
            clearInterval(interval);
            playAudio();
        } else {
            seconds = seconds - 1;
            document.getElementById("timer__result").innerHTML = seconds + "s ";
        }
    }, 1000);
}


export function playAudio() {
    let timeToChoose = new Audio('gman.mp3');
    timeToChoose.play();
}