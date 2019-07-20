/*  
Develop a StopWatch using OOP in JS.
*/

function StopWatch() {
    //variables
    //let startTime, endTime, status, duration = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.status = 0;
    this.duration = 0;

    // Getter
    // Object.defineProperty(this, 'duration', {
    //     get: function() { return duration; }
    // }); 
}

    //Methods
    StopWatch.prototype.start = function(){
        if (this.status) {
            throw new Error('Start already pressed!');
        } 
            this.status = true;
            this.startTime = new Date();
    }

    StopWatch.prototype.stop = function(){
        if (!this.status) {
            throw new Error('Stop already pressed!');
        }  
        this.status = false;
        this.endTime = new Date();
        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration += seconds;
    }

    StopWatch.prototype.reset = function() {
        this.status = false;
        this.startTime = null;
        this.endTime = null;
        this.duration = 0;
    }
//}

let sw = new StopWatch();