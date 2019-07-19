/*  
Develop a StopWatch using OOP in JS.
*/

function StopWatch() {
    //variables
    let startTime, endTime, status, duration = 0;

    //Methods
    this.start = function(){
        if (status) {
            throw new Error('Start already pressed!');
        } else { 
            status = true;
            startTime = new Date();
        }
    }

    this.stop = function(){
        if (!status) {
            throw new Error('Stop already pressed!');
        } else { 
            status = false;
            endTime = new Date();
            const seconds = endTime.getTime() - startTime.getTime() / 1000;
            duration += seconds;
         }
    }

    this.reset = function() {
        status = false;
        startTime = null;
        endTime = null;
        duration = 0;
    }

    // Getter
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    }); 
}

const sw = new StopWatch();