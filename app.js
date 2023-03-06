var msec = document.getElementById('msec')
var sec = document.getElementById('sec')
var min = document.getElementById('min')

var milisec = 0
var seconds = 0
var minutes = 0
var interval;
function started(){

     interval = setInterval(function(){
        milisec++
         msec.innerHTML = milisec
         if(milisec >= 100){
            seconds++
            sec.innerHTML = seconds
            milisec = 0
         }
         else if(seconds >=5){
            minutes++
            min.innerHTML = minutes
            seconds = 0
        }
    },10)
    document.getElementById('btn').disabled = true
    
    
}


function stoped(){
    clearInterval(interval)
    document.getElementById('btn').disabled = false

}

function reset(){
    document.getElementById('btn').disabled = false

    clearInterval(interval)
    milisec = 0
    seconds = 0
    minutes = 0
    msec.innerHTML = milisec
    min.innerHTML = minutes
    sec.innerHTML = seconds

}























