//calculate total productivity time. Should be 100% initially, then decrease if the user is not being producitive
            // function calculate() {
            //     var elem = document.getElementById("productivityBar");
            //         var id2 = setInterval(decrease, count);
            //         function decrease() {
            //             if (productivityWidth <= 0) {
            //                 clearInterval(id2);
            //             } else if (document.hasFocus()) {
            //                 clearInterval(id2);
            //             } else {
            //                 productivityWidth--;
            //                 elem.style.width = productivityWidth + '%';
            //                 elem.innerHTML = productivityWidth * 1 + '%';
                            
            //             }
            //     }
            // }


function completeTask (){
    done = true;
        setTimeout(function(){  
                    var r = confirm("Good Job! Click Ok to see Diary results or Cancel to go Home!");
                    if (r == true) {
                        window.location.href = "./diary";
                    } else {
                        window.location.href = "./index";
                    }
        }, 10);

	var percentage = productivityWidth;
	//localStorage.setItem("percent", percentage);

       				// var d = new Date();
        			// var days = ["Sun", "M", "T", "W", "Th", "F", "Sat"];
        			// var dayToday = days[d.getDay()];
           //  		if(dayToday == "Sun"){
                
           //  		}
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
// 				if (json.hasOwnProperty(key)) {
// 			        var item = json[key];
// 			        array.push({
// 			            date: item.date,
// 			            series: item.series

// 			    	});
// 			    }
// 			}
// 		});
// 		var fs = require("fs");
// 		var lineGraph = [];


// 		fs.writeFile("./workdata.json", JSON.stringify(percentage), (err) => {
// 			if(err){
// 				console.error(err);
// 				return;
// 			}
// 				console.log("success");
// 		});
//}