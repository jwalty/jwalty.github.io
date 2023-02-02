const dryFebOver = new Date(1677646800000);

function updateTimer() {
    let currentTime = new Date();
    let remainingDays = parseInt((dryFebOver.getTime()-currentTime.getTime()) / (1000*3600*24));
    let remainingHours = parseInt((dryFebOver.getTime()-currentTime.getTime()) / (1000*3600));
    let remainingMinutes = parseInt((dryFebOver.getTime()-currentTime.getTime()) / (1000*60));
    let remainingSeconds = parseInt((dryFebOver.getTime()-currentTime.getTime()) / (1000));

    let countdownHours = remainingHours - (remainingDays * 24);
    let countdownMinutes =  remainingMinutes - (remainingHours * 60);
    let countdownSeconds = remainingSeconds - (remainingMinutes * 60);
    
    document.getElementById("countdownTimer").innerHTML = remainingDays + 'd ' + countdownHours + 'h ' + countdownMinutes + 'm ' + countdownSeconds + 's ';

}

setInterval(updateTimer, 1000);


