const min = document.getElementById("min");
const sec = document.getElementById("sec");
const milisec = document.getElementById("milisec");

const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const stop = document.querySelector(".fa-stop");
const pausePlay = document.querySelector(".pause-play")


let count = 0
let intervalId =""
pausePlay.addEventListener("click", () => {
    count++

    if(count%2 !==0){
       play.style.display = "none"
    pause.style.display ="block" 
  intervalId = startTimer()
    }else{
        play.style.display = "block"
        pause.style.display ="none"
        play.style.color = "coral"
pauseFunc()
    }
    
 function startTimer() {
  return  setInterval(() => {
        if (Number(milisec.innerText) < 99) {
          milisec.innerText = (Number(milisec.innerText) + 1)
            .toString()
            .padStart(2, "0");
        } else if (Number(milisec.innerText) === 99) {
          milisec.innerText = "00";
    
          if (Number(sec.innerText) < 59) {
            sec.innerText = (Number(sec.innerText) + 1)
              .toString()
              .padStart(2, "0");
          } else {
            sec.innerText = "00";
    
            if (Number(min.innerText) < 59) {
              min.innerText = (Number(min.innerText) + 1)
                .toString()
                .padStart(2, "0");
            } else {
            //   resetTimer()
            }
          }
        }
    
      }, 10);
 } 
  

});

function pauseFunc(){
    clearInterval(intervalId)
}

stop.addEventListener("click",resetTimer)

function resetTimer(){
    pauseFunc()
    play.style.display = "block"
    pause.style.display ="none"
    min.innerText="00"
    sec.innerText="00"
    milisec.innerText="00"
    count = 0
    stop.style.color = "orangered"
}
