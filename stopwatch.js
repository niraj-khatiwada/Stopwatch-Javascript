class Stopwatch{
    constructor(resumeButton, pauseButton, timerInput, callbacks){
        this.resumeButton = resumeButton;
        this.pauseButton = pauseButton;
        this.timerInput = timerInput;
        
        this.resumeButton.addEventListener("click", this.start);
        this.timerInput.addEventListener("keydown", (evt) => {
            if (evt.code == "Enter"){
                this.start()
            }
        })
        this.pauseButton.addEventListener("click", this.pause);

        

        if (callbacks) {
            this.timerStarted = callbacks.timerStarted;
            this.timerTicked = callbacks.timerTicked;
            this.timerComplete = callbacks.timerComplete;
            this.timerPaused = callbacks.timerPaused
        }

    }
    
    start = () => {
        if (this.timerStarted) {
            this.timerStarted(this.timerInput.value)
        };
        this.timerInterval = setInterval(this.tick, 10);
        
    }
    
    pause = () => {
        if (this.timeLeft !== 0){

            if (this.timerPaused){
                this.timerPaused()
            }
        }
        clearInterval(this.timerInterval);
    }
    
    tick = () => {
        if (this.timerInput.value > 0) {
            this.timeLeft = this.timeLeft - 0.01;
            if (this.timerTicked) {
                this.timerTicked()
            };
            return console.log(this.timerInput.value);
        } 
        this.pause()
        if (this.timerComplete) {
            this.timerComplete()
        };     
    };

    get timeLeft() {
        return parseFloat(this.timerInput.value);
    };

    set timeLeft(time) {
        this.timerInput.value = time.toFixed(2);
    };
}
