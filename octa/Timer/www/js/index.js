// $(document).ready(function(){
//     $("#start").click(function(){
//         console.log("start button clicked")
//     });

// });
// document.getElementById("start").addEventListener("click",showConsole)
// function showConsole(){
//     console.log("hi santhi start button clicked")
// }

var sec=0,min=0;hrs=0;
var dsec,dmin,dhrs;
var clearTimer;
function stopWatch(){

    if(sec===60){
        sec=0;
        min=min+1;
    }
    if(min===60){
        min=0;
        sec=0;
        hrs=hrs+1;
    }
    console.log("stopwatch called")
    dsec=sec<10?'0'+sec:sec;
    dmin=min<10?"0"+min+":":min+":";
    dhrs=hrs<10?"0"+hrs+":":hrs+":" ;   
    var x=document.getElementById("timer");
    x.innerHTML="Timer :"+dhrs+dmin+dsec;
    sec++;

    clearInterval=setTimeout("stopWatch()",1000);
    
}
function startTimer(){
    document.getElementById("elapsed").innerHTML=""
        this.style.display="none";
        document.getElementById("pause").style.display="inline"
        stopWatch();
    
}
function pauseTimer(){
    clearTimeout(clearInterval);
    document.getElementById("start").style.display="inline"
    this.style.display="none"
}
function stopTimer(){
    sec=min=hrs=0;
    document.getElementById("timer").innerHTML="Timer :00:00:00";
    document.getElementById("start").style.display="inline";
    document.getElementById("pause").style.display="none"
    document.getElementById("elapsed").innerHTML="Elapsed Time :"+dhrs+dmin+dsec
    clearTimeout(clearInterval);
}
window.addEventListener("load",function(){
    var start=document.getElementById("start");
    start.addEventListener("click",startTimer);
    var pause=document.getElementById("pause");
    pause.addEventListener("click",pauseTimer);
    var stop=document.getElementById('stop');
    stop.addEventListener("click",stopTimer);
});
