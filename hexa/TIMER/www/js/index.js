/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
var timer;
var hours=00;
var mins=00;
var secs=00;
var millisecs=00;
const displayall=document.querySelector('.display')
const display = document.querySelector('#displaytimer')
const button = document.querySelector(".button")
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const resume=document.getElementById("resume")
const restart=document.getElementById("restart")
displayall.addEventListener("click", e=>{
    if (e.target.matches("button")) {
        const key=e.target
        const action=key.dataset.action
        if(action=="start"){
                stop.style.display="inline"
                start.style.display="none"
            startTimer();
        }
        else if(action==="stop"){
            restart.style.display="inline";
            resume.style.display="inline";
            stop.style.display="none";
            stopTimer();
        }
        else if(action==="resume"){
            restart.style.display="none";
            resume.style.display="none";
            stop.style.display="inline";
            startTimer();
        }
        else if(action==="restart"){
              restart.style.display="none";
              resume.style.display="none";
              start.style.display="inline";
              clearInterval(timer);
              hours=0;mins=0;secs=0;millisecs=0;
              document.getElementById("displaytimer").innerHTML="0:0:0:0"
        }
    }
});
startTimer=()=>{
     timer = setInterval(setIntervalFunction,10);
}
setIntervalFunction=()=> {
    millisecs=millisecs+1;
            if(millisecs===100){
                 secs=secs+1
                 millisecs=0
                if(secs===60){
                    mins=mins+1
                    secs=0;
                    if(mins===60){
                        hours=hours+1
                        mins=0
                    }
                }

            }
    document.getElementById("displaytimer").innerHTML=hours+":"+mins+":"+secs+":"+millisecs
}
stopTimer=()=>{
    clearInterval(timer);
}
app.initialize();