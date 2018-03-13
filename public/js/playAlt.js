

function getTime() {
    return (new Date()).getTime();
}

var lastInterval = getTime();

function intervalTime() {
    var now = getTime();
    var diff = now - lastInterval;
    var offBy = diff - 1000;
    lastInterval = now;

    if(offBy > 100) {
        offBy = offBy * 10;
        totalOff += offBy;
        console.log("off for this many seconds: " + totalOff);
    }
    console.log("adding " + totalOff + " amount of time");
}


function completeTask (){
    done = true;

        setTimeout(function () {
            var alert = alertify.confirm("Good job! Click below to either see your diary results, or go home.").setting({
                'labels' : {ok : 'Diary', cancel : 'Go Home'},
                'onok' : function () {
                    window.location.href ="./diary";
                },
                'oncancel' : function () {
                    window.location.href ="./index";
                }
            }).show();
        }, 10);
        // setTimeout(function(){  
        //             var r = confirm("Good Job! Click Ok to see Diary results or Cancel to go Home!");
        //             if (r == true) {
        //                 window.location.href = "./diary";
        //             } else {
        //                 window.location.href = "./index";
        //             }
        // }, 10);

    var percentage = productivityWidth;
    //localStorage.setItem("percent", percentage);

                    // var d = new Date();
                    // var days = ["Sun", "M", "T", "W", "Th", "F", "Sat"];
                    // var dayToday = days[d.getDay()];
           //       if(dayToday == "Sun"){
                
           //       }
           var b = JSON.parse(localStorage.getItem("percent"));
            if (b.length >= 5) {
                var c = []
                localStorage.removeItem("percent");
                localStorage.setItem("percent", JSON.stringify (c));
                c.push(JSON.parse(localStorage.getItem("percent")));
                console.log(localStorage.getItem("percent"));
            }

        var a = [percentage];
        a = JSON.parse(localStorage.getItem("percent"));
        a.push(percentage);
        localStorage.setItem("percent", JSON.stringify(a));
        console.log(localStorage.getItem("percent"));


     // writeJSON();
 }






// function writeJSON () {
//         $.getJSON("../workdata", function(json) {
//         var array = [];
//             for (var key in json) {
//              if (json.hasOwnProperty(key)) {
//                  var item = json[key];
//                  array.push({
//                      date: item.date,
//                      series: item.series

//                  });
//              }
//          }
//      });
//      var fs = require("fs");
//      var lineGraph = [];


//      fs.writeFile("./workdata.json", JSON.stringify(percentage), (err) => {
//          if(err){
//              console.error(err);
//              return;
//          }
//              console.log("success");
//      });
//}