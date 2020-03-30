const resumeButton = document.querySelector("#resume");
const pauseButton = document.querySelector("#pause");
const timerInput = document.querySelector("input");

const circle = document.querySelector("circle");
const perimeter = 2 * circle.getAttribute("r") * Math.PI; 
circle.setAttribute("stroke-dasharray", perimeter);

let offset = 0
let part = []

const stopwatchObj = new Stopwatch(resumeButton, pauseButton, timerInput, {
    timerStarted(totalTIme){
        console.log("Timer Started")
        part.push(totalTIme)
    },
    timerPaused() {
        console.log("Timer Paused")
    },
    timerTicked() {
        console.log("Timer ticked down by one second", part[0])
        offset -= perimeter/(part[0] / 0.01)
        circle.setAttribute("stroke-dashoffset", `${offset}`); 
    },
    timerComplete() {
        timerInput.value = ""
        circle.setAttribute("stroke-dashoffset", "0"); 
        part = [];
        console.log("Timer Completed");
    }
    
});
