$(document).ready(()=>{
    var index="";
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $("#userone").css("display","block");
            $("#usertwo").css("display","none");
        }
        else if($(this).prop("checked") == false){
            $("#userone").css("display","none");
            $("#usertwo").css("display","block");
        }
    });
    $("#inputtwo").keypress((e)=>{
        if(e.keyCode===13){
            if(e.target.value.trim().length>0){
                $("#useronelist").append("<li class=\"left\">"+event.target.value+"<span class='close'></span><li>")
                $("#usertwolist").append("<li class=\"right\">"+event.target.value+"<span class='close'></span><li>")
                e.target.value="";
                var messageBodyone = document.querySelector('.contentone');
                messageBodyone.scrollTop = messageBodyone.scrollHeight - messageBodyone.clientHeight;
            }
        }
   });
    $("#inputone").keypress((e)=>{
         if(e.keyCode===13){
             if(e.target.value.trim().length>0){
                 $("#useronelist").append("<li class=\"right\">"+event.target.value+"<span class='close'></span><li>")
                 $("#usertwolist").append("<li class=\"left\">"+event.target.value+"<span class='close'></span><li>")
                 e.target.value="";
                 var messageBody = document.querySelector('.content');
                 messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
             }
         }
    });
    $("ul").on("mouseenter", ".right", function(){
          index=$(this).index();
          index=index+1;
                $(".close").css({"display":"block"})
                $(this).find("span").text("X");
                $(this).find("span").on("click",()=>{
                    if($(".left:nth-child("+index+")").text() ==="You deleted this message"){
                    $(".right:nth-child("+index+")").css("background-color", "grey").text("This message has been deleted")
                    }
                    else{
                        $(".right:nth-child("+index+")").css("background-color", "grey").text("You deleted this message")
                        $(".left:nth-child("+index+")").css("background-color", "grey").text("This message has been deleted")
                    }
                });
        
    });
    $("ul").on("mouseenter", ".left", function(){
              $(".close").css({"display":"block"})
              $(this).find("span").text("X");
              $(this).find("span").on("click",()=>{
                  $(this).css("background-color","grey")
                  $(this).text("You deleted this message")
              });
      
  });
    $("ul").on("mouseleave", "li", function(){
        index="";
        $(this).find("span").text("");
        $(".close").css({"display":"none"})
    });
    var oriVal;
    var edit;
    $("ul").on('dblclick', '.right', function () {
        oriVal = $(this).text();
        var length=oriVal.length;
       edit=oriVal.slice(0,length-1)
        index=$(this).index();
        index=index+1;
        $(this).text("");
        $("<textarea type='text' name='edit h h'>"+edit+"</textarea>").appendTo(this).focus();
    });
    $("ul").on('keypress', 'li > textarea', function (e) {
        var $this = $(this);
        if(e.keyCode===13){
            if(e.target.value.trim().length>0){
                var parent=$this.parent()
               $("li:nth-child("+index+")").text($this.val())
               $("<span class='close'></span>").appendTo(parent)
                $this.remove();
            }
        }
    });
    $("ul").on('focusout', 'li > textarea', function () {
        var $this = $(this);
        var parent=$this.parent()
        $this.parent().text(edit);
        $("<span class='close'></span>").appendTo(parent)
        $this.remove(); // Don't just hide, remove the element.
    });
});