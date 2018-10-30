var exp;
window.addEventListener("load",function(){
   var keys= document.getElementById("keys");
   keys.addEventListener("click",calucator);
})
function calucator(e){
    var tag=e.target.tagName;
if(tag==="INPUT"||tag==="BUTTON"){
        var val = e.target.value;
        exp=document.getElementById("result").innerText;
        console.log("TARGER",e.target.id);
        console.log(exp+val);
        if(exp==="ERROR"){
            document.getElementById("result").innerHTML="";
            // alert("hi");
            exp="";
        }
        if(val==="B"){
            var value=document.getElementById("result").innerText;
            exp=value.slice(0,value.length-1);
            document.getElementById("result").innerHTML=exp;
        }
        else if(val==="C"){
            document.getElementById("result").innerHTML=""
        }
        else if(val==="="){
            try{
                let ans=eval(exp);
                document.getElementById("result").innerHTML=ans;
            }
            catch(err){
                document.getElementById("result").innerHTML="ERROR";
            }
        }
        else{
            exp=(exp+val)
        document.getElementById("result").innerHTML=exp ;
        }
    }

}
