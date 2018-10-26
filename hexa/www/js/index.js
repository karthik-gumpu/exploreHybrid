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
//  myFunction=()=> {
//     console.log("recive")
//     document.getElementById("hello").innerHTML = "Paragraph changed.";
// }
// document.getElementById("button").addEventListener("mouseenter", function(){
//     document.getElementById("hello").innerHTML = "Hello World";
// });
// document.getElementById("button").addEventListener("mouseleave", function(){
//     document.getElementById("hello").innerHTML = "Hello";
// });
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".keys")
const display = document.querySelector('.display')
keys.addEventListener("click", e => {
    const displayedNum = display.textContent
    if (e.target.matches("button")) {
          const key = e.target
          const action=key.dataset.action
          const keyContent = key.textContent
          let leng=displayedNum.length-1
          let letter=displayedNum[leng]
         if(action==="add"){
             if(displayedNum.trim()!=="0" && displayedNum!=="SYNTAX ERROR" && letter!=="-" && letter!=="*" && letter!=="÷")
                {
                    display.textContent = displayedNum + keyContent
                }
                 
         }
         else if(action==="sub"){
            if(displayedNum.trim()!=="0" && displayedNum!=="SYNTAX ERROR" && letter!=="+" && letter!=="*" && letter!=="/")
                {
                    display.textContent = displayedNum + keyContent
                }
        }
        else if(action==="mul"){
            if(displayedNum.trim()!=="0" && displayedNum!=="SYNTAX ERROR" && letter!=="-" && letter!=="+" && letter!=="/")
                {
                    display.textContent = displayedNum + keyContent
                }
        }
        else if(action==="division" ){
            if(displayedNum.trim()!=="0" && displayedNum!=="SYNTAX ERROR" && letter!=="-" && letter!=="*" && letter!=="+")
                {
                    display.textContent = displayedNum +"/"
                }
        }
        else if(action==="equal" ){
            let length=display.textContent.length-1
            let variable=display.textContent[length]
            if(variable!=="+" && variable!=="-" && variable!=="*" && variable!=="/" )
            {
                 var resul = eval(display.textContent)
                 display.textContent = resul
            }
            else
                {
                    display.textContent ="SYNTAX ERROR"  
                }

        }
        else if(action==="clear"){
            if(displayedNum.trim()!=="0")
                {
                    display.textContent = "0"
                }
        }
        else if(action==="back"){
            if(displayedNum.trim()!=="0" && displayedNum!=="SYNTAX ERROR")
                {
                    let length=displayedNum.length
                   if(length>1) 
                    {
                        display.textContent = displayedNum.slice(0,length-1)
                    }
                    else 
                        display.textContent = "0"
                }
            
        }
         else  {
            if(displayedNum.trim()=="0" || displayedNum=="SYNTAX ERROR")
                {
                    display.textContent = keyContent
                }
                else {
                    display.textContent = displayedNum + keyContent
                  }
            }
    }
   })
app.initialize();