let label = document.querySelector(".progress-bar-label");

let progress = document.querySelector(".inner-text");
let progressValue = parseInt(progress.innerHTML);

let progressBar = document.querySelector('.progress');

let interval = 20;

let timer = setInterval(() => {
    if(parseInt(progressValue) === 100) {
        clearInterval(timer)
        label.innerHTML = "Completed!";
        progressBar.style.backgroundColor = "green";
    } else {
        progressValue += 1;
        progress.innerHTML = progressValue
        if(progressValue < 20) {
            progressBar.style.backgroundColor = "rgb(0, 200, 0);";
        } else if(progressValue > 20 && progressValue < 50) {
            progressBar.style.backgroundColor = "rgb(0, 180, 0)";
        } else if(progressValue > 50 && progressValue < 75) {
            progressBar.style.backgroundColor = "rgb(0, 160, 0)";
        } else if(progressValue > 75 && progressValue < 99) {
            progressBar.style.backgroundColor = "rgb(0, 140, 0)";
        }
    }
    progressBar.style.width = progressValue + "%";
}, interval);