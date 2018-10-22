const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + "\nMinute: " + min + "\nSecond: " + sec);

//360 degrees, 12 hours on clock face. take into account min hand, moving hour hand incrementally
let hrPosition = (hr*360/12) + min*(360/60)/12;
//multiply by 360 degrees and divide by 60 for number of min/sec in hour
let minPosition = (min*360/60) + (sec*(360/60)/60); //take into account seconds hand
let secPosition = sec*360/60;

function updateClock(){
    
    hrPosition += 3/360; //3 * 12 hours = 36. Divide by 360 degrees
    minPosition += 6/60; //similar to seconds, but divide by 60 to space out minutes
    secPosition += 6; //6 * 60 seconds = 360 degrees

    //position hour, min, sec hands
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//by default setInterval updates every millisecond. Update every 1k ms, so once per sec
var interval = setInterval(updateClock, 1000);

