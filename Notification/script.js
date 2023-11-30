let show = document.querySelector(".show");
let close = document.querySelector(".close");

let notificationBox = document.querySelector(".notification");
let progressBar = document.querySelector(".progress-bar");
let timer;
show.addEventListener("click", () => {
    notificationBox.style.right = 0;
    progress = 100;
    
    if(timer) {
        clearInterval(timer)
    }

    timer = setInterval(()=> {
        
        if(progress < 1) {
            close.click();
            clearInterval(timer)
        }
        progressBar.style.width = `${progress + "%"}`;
        progress = progress - 0.1;
    })
})

close.addEventListener("click", () => {
    notificationBox.style.right = "-400px";
})