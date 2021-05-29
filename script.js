window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var tickingTens = document.getElementById("tens");
    var tickingSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById('button-start');
    var btnStop = document.getElementById('button-stop');
    var btnReset = document.getElementById('button-reset');
    var Interval ;
  
    btnStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        document.getElementById("status").innerHTML = "Watch has started..."
        document.getElementById("hidden").style.visibility = "visible";
    }
    
    btnStop.onclick = function() {
        clearInterval(Interval);

        if (!(document.getElementById("status").innerHTML == "Watch is idle, Start the watch.")) {
            document.getElementById("status").innerHTML = "Watch has stopped!!"
        }
        document.getElementById("hidden").style.visibility = "hidden";
    }
    
  
    btnReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        tickingTens.innerHTML = tens;
        tickingSeconds.innerHTML = seconds;
        document.getElementById("status").innerHTML = "Watch is idle, Start the watch."
        document.getElementById("hidden").style.visibility = "hidden";
    }
        
    function startTimer () {
        tens++; 
      
        if(tens <= 9){
            tickingTens.innerHTML = "0" + tens;
        }
      
        if (tens > 9){
            tickingTens.innerHTML = tens;
        } 
      
        if (tens > 99) {
            console.log("1 second");
            seconds++;
            tickingSeconds.innerHTML = "0" + seconds;
            tens = 0;
            tickingTens.innerHTML = "0" + 0;
        }
      
        if (seconds > 9){
            tickingSeconds.innerHTML = seconds;
        }
    
    }
     
}