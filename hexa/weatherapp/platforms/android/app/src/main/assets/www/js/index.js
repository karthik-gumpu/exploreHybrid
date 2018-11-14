$(document).ready(()=>{
    var data;
    var name="nellore";
    $("input").keypress((e)=>{
         if(e.keyCode===13 && e.target.value.trim().length>0 ){
             name=e.target.value;
             //console.log(name)
             $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=06299295bdded13be3bef91c2012aec6",
                dataType: 'jsonp',
                success: function(results){
                     var title = results;
                    // console.log(title.name)
                    // console.log(title.weather[0].description)
                    // console.log(title.main.humidity)
                    $(".weather").css({"display":"none"})
                    $(".display").css({"display":"inline-block"})
                    $(".name").text("Name : "+title.name)
                    $(".humidity").text("Humidity : "+title.main.humidity)
                    $(".description").text("Description  : "+title.weather[0].description)
                    
                }
            });
            name="";
            event.target.value="";
         }
    });
    $(".img").click(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>showPosition(position));
        } else { 
            alert( "Geolocation is not supported by this browser.");
        }
    });
    showPosition=(position)=> {
        let lang=position.coords.longitude
        let lat=position.coords.latitude
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lang+"&appid=06299295bdded13be3bef91c2012aec6",
            dataType: 'jsonp',
            success: function(results){
                var title = results;
                $(".weather").css({"display":"none"})
                $(".display").css({"display":"inline-block"})
                $(".name").text("Name : "+title.city.name)
                $(".humidity").text("Humidity : "+title.list[0].main.humidity)
                $(".description").text("Description  : "+title.list[0].weather[0].description)
                //   console.log(title.city.name)
                //  console.log(title.list[0].weather[0].description)
                //  console.log(title.list[0].main.humidity)
                
            }
        });
    }
    $(".cross").click(()=>{
        $(".display").css({"display":"none"})
        $(".weather").css({"display":"inline-block"})
        $(".name").text("")
        $(".humidity").text("")
        $(".description").text("")

    })
})