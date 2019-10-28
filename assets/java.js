$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDsomeGPBuB4EaOBnqGBmYJs2d94ppKH24",
    authDomain: "squat-up.firebaseapp.com",
    databaseURL: "https://squat-up.firebaseio.com",
    projectId: "squat-up",
    storageBucket: "squat-up.appspot.com",
    messagingSenderId: "366948263861",
    appId: "1:366948263861:web:ab9b3720497675cb409bfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var day = moment().format('dddd');
  var date = moment().format("YYYYMMDD")
  var user;
  var dbRef;

  
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend"]
    var weeks = ["Week One", "Week Two", "Week Three", "Week Four", "Week Five"]
    var players = ["Ika", "Katie", "Soo", "Wonki"]

  var challenges = {
      "weekOne" : {
                "Monday" : {
                    "pushups": 5,
                    "walking planks" : 5,
                    "squats": 8
                },
                "Tuesday" : {
                    "pushups": 5,
                    "reverse crunch" : 5,
                    "lunges": 8
                },
                "Wednesday" : {
                    "pushups": 5,
                    "plank" : "1:00",
                    "jump squats": 4
                },
                "Thursday" : {
                    "pushups": 5,
                    "leg raises" : 5,
                    "side lunges": 8
                },
                "Friday" : {
                    "pushups": 5,
                    "mountain climbers" : 5,
                    "sumo squats": 8
                },
                "Weekend" : {
                    "pushups": 5,
                    "russian twists" : 5,
                    "wall-sit": "1:30"
                },
        },
    
      "weekTwo" : {
                "Monday" : {
                    "pushups": 5,
                    "walking planks" : 10,
                    "squats": 16
                },
                "Tuesday" : {
                    "pushups": 5,
                    "reverse crunch" : 10,
                    "lunges": 16
                },
                "Wednesday" : {
                    "pushups": 5,
                    "plank" : "1:15",
                    "jump squats": 8
                },
                "Thursday" : {
                    "pushups": 5,
                    "leg raises" : 10,
                    "side lunges": 16
                },
                "Friday" : {
                    "pushups": 5,
                    "mountain climbers" : 10,
                    "sumo squats": 16
                },
                "Weekend" : {
                    "pushups": 5,
                    "russian twists" : 10,
                    "wall-sit": "1:45"
                },
        },

        "weekThree" : {
                "Monday" : {
                    "pushups": 5,
                    "walking planks" : 15,
                    "squats": 24
                },
                "Tuesday" : {
                    "pushups": 5,
                    "reverse crunch" : 15,
                    "lunges": 24
                },
                "Wednesday" : {
                    "pushups": 5,
                    "plank" : "1:30",
                    "jump squats": 12
                },
                "Thursday" : {
                    "pushups": 5,
                    "leg raises" : 15,
                    "side lunges": 24
                },
                "Friday" : {
                    "pushups": 5,
                    "mountain climbers" : 15,
                    "sumo squats": 24
                },
                "Weekend" : {
                    "pushups": 5,
                    "russian twists" : 15,
                    "wall-sit": "2:00"
                },
        },

        "weekFour" : {
                "Monday" : {
                    "pushups": 5,
                    "walking planks" : 20,
                    "squats": 32
                },
                "Tuesday" : {
                    "pushups": 5,
                    "reverse crunch" : 20,
                    "lunges": 32
                },
                "Wednesday" : {
                    "pushups": 5,
                    "plank" : "1:45",
                    "jump squats": 16
                },
                "Thursday" : {
                    "pushups": 5,
                    "leg raises" : 20,
                    "side lunges": 32
                },
                "Friday" : {
                    "pushups": 5,
                    "mountain climbers" : 20,
                    "sumo squats": 32
                },
                "Weekend" : {
                    "pushups": 5,
                    "russian twists" : 20,
                    "wall-sit": "2:15"
                },
        },

        "weekFive" : {
            "Monday" : {
                "pushups": 5,
                "walking planks" : 25,
                "squats": 40
            },
            "Tuesday" : {
                "pushups": 5,
                "reverse crunch" : 25,
                "lunges": 40
            },
            "Wednesday" : {
                "pushups": 5,
                "plank" : "2:00",
                "jump squats": 20
            },
            "Thursday" : {
                "pushups": 5,
                "leg raises" : 25,
                "side lunges": 40
            },
            "Friday" : {
                "pushups": 5,
                "mountain climbers" : 25,
                "sumo squats": 40
            },
            "Weekend" : {
                "pushups": 5,
                "russian twists" : 25,
                "wall-sit": "2:30"
            },
        },
  }

    
    if ((day === "Sunday") || (day ==="Saturday")){
        day = "Weekend"
    }else{
        day = moment().format('dddd');
    }
  


whichWeek(date)

function whichWeek(date){
    var wOneDOne = "20191028"
    var WTwoDOne = "20191104"
    var WThreeDOne = "20191111"
    var WFourDOne = "20191118"
    var WFiveDOne = "20191125"

    if (date >= wOneDOne && date < WTwoDOne){
        week = "Week One"
        dbRef = "weekOne"
    }else if (date >= WTwoDOne && date < WThreeDOne){
        week = "Week Two"
        dbRef = "weekTwo"
    }else if (date >= WThreeDOne && date < WFourDOne){
        week = "Week Three"
        dbRef = "weekThree"
    }else if (date >= WFourDOne && date < WFiveDOne){
        week = "Week Four"
        dbRef = "weekFour"
    }else if (date >= WFiveDOne){
        week = "Week Five"
        dbRef = "weekFive"
    }else{
        console.log("date error")
    }

}


//Card Display
var todaysToDo = challenges[dbRef][day]

for (var property in todaysToDo){
    $(".todaysStuff").append("<p>" + property + " : " + todaysToDo[property] + "</p>")
}

$(".card-title").text(week + ": " + day)

$(".card-header").text("Today is: " + moment(date).format("DD-MMM"))

$(".logID").on("click", function(){
    user = $(this).attr("id");
    
})
 

    
$("#logSubmit").on("click", function(){             
    database.ref("/" + dbRef + "/" + day + "/" + user).set(true);
    console.log("/" + dbRef + "/" + day + "/" + user) 
})


database.ref().on("value", function(snapshot){

    //Week One
    $("#IkaWeekOneMonday").html("Ika " + trueFalse(snapshot.val().weekOne.Monday.Ika))
    $("#IkaWeekOneTuesday").html("Ika  " + trueFalse(snapshot.val().weekOne.Tuesday.Ika))
    $("#IkaWeekOneWednesday").html("Ika  " + trueFalse(snapshot.val().weekOne.Wednesday.Ika))
    $("#IkaWeekOneThursday").html("Ika  " + trueFalse(snapshot.val().weekOne.Thursday.Ika))
    $("#IkaWeekOneFriday").html("Ika  " + trueFalse(snapshot.val().weekOne.Friday.Ika))
    $("#IkaWeekOneWeekend").html("Ika  " + trueFalse(snapshot.val().weekOne.Weekend.Ika))

    $("#KatieWeekOneMonday").html("Katie " + trueFalse(snapshot.val().weekOne.Monday.Katie))
    $("#KatieWeekOneTuesday").html("Katie  " + trueFalse(snapshot.val().weekOne.Tuesday.Katie))
    $("#KatieWeekOneWednesday").html("Katie  " + trueFalse(snapshot.val().weekOne.Wednesday.Katie))
    $("#KatieWeekOneThursday").html("Katie  " + trueFalse(snapshot.val().weekOne.Thursday.Katie))
    $("#KatieWeekOneFriday").html("Katie  " + trueFalse(snapshot.val().weekOne.Friday.Katie))
    $("#KatieWeekOneWeekend").html("Katie  " + trueFalse(snapshot.val().weekOne.Weekend.Katie))

    $("#WonkiWeekOneMonday").html("Wonki " + trueFalse(snapshot.val().weekOne.Monday.Wonki))
    $("#WonkiWeekOneTuesday").html("Wonki  " + trueFalse(snapshot.val().weekOne.Tuesday.Wonki))
    $("#WonkiWeekOneWednesday").html("Wonki  " + trueFalse(snapshot.val().weekOne.Wednesday.Wonki))
    $("#WonkiWeekOneThursday").html("Wonki  " + trueFalse(snapshot.val().weekOne.Thursday.Wonki))
    $("#WonkiWeekOneFriday").html("Wonki  " + trueFalse(snapshot.val().weekOne.Friday.Wonki))
    $("#WonkiWeekOneWeekend").html("Wonki  " + trueFalse(snapshot.val().weekOne.Weekend.Wonki))

    $("#SooWeekOneMonday").html("Soo " + trueFalse(snapshot.val().weekOne.Monday.Soo))
    $("#SooWeekOneTuesday").html("Soo  " + trueFalse(snapshot.val().weekOne.Tuesday.Soo))
    $("#SooWeekOneWednesday").html("Soo  " + trueFalse(snapshot.val().weekOne.Wednesday.Soo))
    $("#SooWeekOneThursday").html("Soo  " + trueFalse(snapshot.val().weekOne.Thursday.Soo))
    $("#SooWeekOneFriday").html("Soo  " + trueFalse(snapshot.val().weekOne.Friday.Soo))
    $("#SooWeekOneWeekend").html("Soo  " + trueFalse(snapshot.val().weekOne.Weekend.Soo))

    //Week Two
    $("#IkaWeekTwoMonday").html("Ika " + trueFalse(snapshot.val().weekTwo.Monday.Ika))
    $("#IkaWeekTwoTuesday").html("Ika  " + trueFalse(snapshot.val().weekTwo.Tuesday.Ika))
    $("#IkaWeekTwoWednesday").html("Ika  " + trueFalse(snapshot.val().weekTwo.Wednesday.Ika))
    $("#IkaWeekTwoThursday").html("Ika  " + trueFalse(snapshot.val().weekTwo.Thursday.Ika))
    $("#IkaWeekTwoFriday").html("Ika  " + trueFalse(snapshot.val().weekTwo.Friday.Ika))
    $("#IkaWeekTwoWeekend").html("Ika  " + trueFalse(snapshot.val().weekTwo.Weekend.Ika))

    $("#KatieWeekTwoMonday").html("Katie " + trueFalse(snapshot.val().weekTwo.Monday.Katie))
    $("#KatieWeekTwoTuesday").html("Katie  " + trueFalse(snapshot.val().weekTwo.Tuesday.Katie))
    $("#KatieWeekTwoWednesday").html("Katie  " + trueFalse(snapshot.val().weekTwo.Wednesday.Katie))
    $("#KatieWeekTwoThursday").html("Katie  " + trueFalse(snapshot.val().weekTwo.Thursday.Katie))
    $("#KatieWeekTwoFriday").html("Katie  " + trueFalse(snapshot.val().weekTwo.Friday.Katie))
    $("#KatieWeekTwoWeekend").html("Katie  " + trueFalse(snapshot.val().weekTwo.Weekend.Katie))

    $("#WonkiWeekTwoMonday").html("Wonki " + trueFalse(snapshot.val().weekTwo.Monday.Wonki))
    $("#WonkiWeekTwoTuesday").html("Wonki  " + trueFalse(snapshot.val().weekTwo.Tuesday.Wonki))
    $("#WonkiWeekTwoWednesday").html("Wonki  " + trueFalse(snapshot.val().weekTwo.Wednesday.Wonki))
    $("#WonkiWeekTwoThursday").html("Wonki  " + trueFalse(snapshot.val().weekTwo.Thursday.Wonki))
    $("#WonkiWeekTwoFriday").html("Wonki  " + trueFalse(snapshot.val().weekTwo.Friday.Wonki))
    $("#WonkiWeekTwoWeekend").html("Wonki  " + trueFalse(snapshot.val().weekTwo.Weekend.Wonki))

    $("#SooWeekTwoMonday").html("Soo " + trueFalse(snapshot.val().weekTwo.Monday.Soo))
    $("#SooWeekTwoTuesday").html("Soo  " + trueFalse(snapshot.val().weekTwo.Tuesday.Soo))
    $("#SooWeekTwoWednesday").html("Soo  " + trueFalse(snapshot.val().weekTwo.Wednesday.Soo))
    $("#SooWeekTwoThursday").html("Soo  " + trueFalse(snapshot.val().weekTwo.Thursday.Soo))
    $("#SooWeekTwoFriday").html("Soo  " + trueFalse(snapshot.val().weekTwo.Friday.Soo))
    $("#SooWeekTwoWeekend").html("Soo  " + trueFalse(snapshot.val().weekTwo.Weekend.Soo))

    //Week Three
    $("#IkaWeekThreeMonday").html("Ika " + trueFalse(snapshot.val().weekThree.Monday.Ika))
    $("#IkaWeekThreeTuesday").html("Ika  " + trueFalse(snapshot.val().weekThree.Tuesday.Ika))
    $("#IkaWeekThreeWednesday").html("Ika  " + trueFalse(snapshot.val().weekThree.Wednesday.Ika))
    $("#IkaWeekThreeThursday").html("Ika  " + trueFalse(snapshot.val().weekThree.Thursday.Ika))
    $("#IkaWeekThreeFriday").html("Ika  " + trueFalse(snapshot.val().weekThree.Friday.Ika))
    $("#IkaWeekThreeWeekend").html("Ika  " + trueFalse(snapshot.val().weekThree.Weekend.Ika))

    $("#KatieWeekThreeMonday").html("Katie " + trueFalse(snapshot.val().weekThree.Monday.Katie))
    $("#KatieWeekThreeTuesday").html("Katie  " + trueFalse(snapshot.val().weekThree.Tuesday.Katie))
    $("#KatieWeekThreeWednesday").html("Katie  " + trueFalse(snapshot.val().weekThree.Wednesday.Katie))
    $("#KatieWeekThreeThursday").html("Katie  " + trueFalse(snapshot.val().weekThree.Thursday.Katie))
    $("#KatieWeekThreeFriday").html("Katie  " + trueFalse(snapshot.val().weekThree.Friday.Katie))
    $("#KatieWeekThreeWeekend").html("Katie  " + trueFalse(snapshot.val().weekThree.Weekend.Katie))

    $("#WonkiWeekThreeMonday").html("Wonki " + trueFalse(snapshot.val().weekThree.Monday.Wonki))
    $("#WonkiWeekThreeTuesday").html("Wonki  " + trueFalse(snapshot.val().weekThree.Tuesday.Wonki))
    $("#WonkiWeekThreeWednesday").html("Wonki  " + trueFalse(snapshot.val().weekThree.Wednesday.Wonki))
    $("#WonkiWeekThreeThursday").html("Wonki  " + trueFalse(snapshot.val().weekThree.Thursday.Wonki))
    $("#WonkiWeekThreeFriday").html("Wonki  " + trueFalse(snapshot.val().weekThree.Friday.Wonki))
    $("#WonkiWeekThreeWeekend").html("Wonki  " + trueFalse(snapshot.val().weekThree.Weekend.Wonki))

    $("#SooWeekThreeMonday").html("Soo " + trueFalse(snapshot.val().weekThree.Monday.Soo))
    $("#SooWeekThreeTuesday").html("Soo  " + trueFalse(snapshot.val().weekThree.Tuesday.Soo))
    $("#SooWeekThreeWednesday").html("Soo  " + trueFalse(snapshot.val().weekThree.Wednesday.Soo))
    $("#SooWeekThreeThursday").html("Soo  " + trueFalse(snapshot.val().weekThree.Thursday.Soo))
    $("#SooWeekThreeFriday").html("Soo  " + trueFalse(snapshot.val().weekThree.Friday.Soo))
    $("#SooWeekThreeWeekend").html("Soo  " + trueFalse(snapshot.val().weekThree.Weekend.Soo))

    //Week Four
    $("#IkaWeekFourMonday").html("Ika " + trueFalse(snapshot.val().weekFour.Monday.Ika))
    $("#IkaWeekFourTuesday").html("Ika  " + trueFalse(snapshot.val().weekFour.Tuesday.Ika))
    $("#IkaWeekFourWednesday").html("Ika  " + trueFalse(snapshot.val().weekFour.Wednesday.Ika))
    $("#IkaWeekFourThursday").html("Ika  " + trueFalse(snapshot.val().weekFour.Thursday.Ika))
    $("#IkaWeekFourFriday").html("Ika  " + trueFalse(snapshot.val().weekFour.Friday.Ika))
    $("#IkaWeekFourWeekend").html("Ika  " + trueFalse(snapshot.val().weekFour.Weekend.Ika))

    $("#KatieWeekFourMonday").html("Katie " + trueFalse(snapshot.val().weekFour.Monday.Katie))
    $("#KatieWeekFourTuesday").html("Katie  " + trueFalse(snapshot.val().weekFour.Tuesday.Katie))
    $("#KatieWeekFourWednesday").html("Katie  " + trueFalse(snapshot.val().weekFour.Wednesday.Katie))
    $("#KatieWeekFourThursday").html("Katie  " + trueFalse(snapshot.val().weekFour.Thursday.Katie))
    $("#KatieWeekFourFriday").html("Katie  " + trueFalse(snapshot.val().weekFour.Friday.Katie))
    $("#KatieWeekFourWeekend").html("Katie  " + trueFalse(snapshot.val().weekFour.Weekend.Katie))

    $("#WonkiWeekFourMonday").html("Wonki " + trueFalse(snapshot.val().weekFour.Monday.Wonki))
    $("#WonkiWeekFourTuesday").html("Wonki  " + trueFalse(snapshot.val().weekFour.Tuesday.Wonki))
    $("#WonkiWeekFourWednesday").html("Wonki  " + trueFalse(snapshot.val().weekFour.Wednesday.Wonki))
    $("#WonkiWeekFourThursday").html("Wonki  " + trueFalse(snapshot.val().weekFour.Thursday.Wonki))
    $("#WonkiWeekFourFriday").html("Wonki  " + trueFalse(snapshot.val().weekFour.Friday.Wonki))
    $("#WonkiWeekFourWeekend").html("Wonki  " + trueFalse(snapshot.val().weekFour.Weekend.Wonki))

    $("#SooWeekFourMonday").html("Soo " + trueFalse(snapshot.val().weekFour.Monday.Soo))
    $("#SooWeekFourTuesday").html("Soo  " + trueFalse(snapshot.val().weekFour.Tuesday.Soo))
    $("#SooWeekFourWednesday").html("Soo  " + trueFalse(snapshot.val().weekFour.Wednesday.Soo))
    $("#SooWeekFourThursday").html("Soo  " + trueFalse(snapshot.val().weekFour.Thursday.Soo))
    $("#SooWeekFourFriday").html("Soo  " + trueFalse(snapshot.val().weekFour.Friday.Soo))
    $("#SooWeekFourWeekend").html("Soo  " + trueFalse(snapshot.val().weekFour.Weekend.Soo))

    //Week Five
    $("#IkaWeekFiveMonday").html("Ika " + trueFalse(snapshot.val().weekFive.Monday.Ika))
    $("#IkaWeekFiveTuesday").html("Ika  " + trueFalse(snapshot.val().weekFive.Tuesday.Ika))
    $("#IkaWeekFiveWednesday").html("Ika  " + trueFalse(snapshot.val().weekFive.Wednesday.Ika))
    $("#IkaWeekFiveThursday").html("Ika  " + trueFalse(snapshot.val().weekFive.Thursday.Ika))
    $("#IkaWeekFiveFriday").html("Ika  " + trueFalse(snapshot.val().weekFive.Friday.Ika))
    $("#IkaWeekFiveWeekend").html("Ika  " + trueFalse(snapshot.val().weekFive.Weekend.Ika))

    $("#KatieWeekFiveMonday").html("Katie " + trueFalse(snapshot.val().weekFive.Monday.Katie))
    $("#KatieWeekFiveTuesday").html("Katie  " + trueFalse(snapshot.val().weekFive.Tuesday.Katie))
    $("#KatieWeekFiveWednesday").html("Katie  " + trueFalse(snapshot.val().weekFive.Wednesday.Katie))
    $("#KatieWeekFiveThursday").html("Katie  " + trueFalse(snapshot.val().weekFive.Thursday.Katie))
    $("#KatieWeekFiveFriday").html("Katie  " + trueFalse(snapshot.val().weekFive.Friday.Katie))
    $("#KatieWeekFiveWeekend").html("Katie  " + trueFalse(snapshot.val().weekFive.Weekend.Katie))

    $("#WonkiWeekFiveMonday").html("Wonki " + trueFalse(snapshot.val().weekFive.Monday.Wonki))
    $("#WonkiWeekFiveTuesday").html("Wonki  " + trueFalse(snapshot.val().weekFive.Tuesday.Wonki))
    $("#WonkiWeekFiveWednesday").html("Wonki  " + trueFalse(snapshot.val().weekFive.Wednesday.Wonki))
    $("#WonkiWeekFiveThursday").html("Wonki  " + trueFalse(snapshot.val().weekFive.Thursday.Wonki))
    $("#WonkiWeekFiveFriday").html("Wonki  " + trueFalse(snapshot.val().weekFive.Friday.Wonki))
    $("#WonkiWeekFiveWeekend").html("Wonki  " + trueFalse(snapshot.val().weekFive.Weekend.Wonki))

    $("#SooWeekFiveMonday").html("Soo " + trueFalse(snapshot.val().weekFive.Monday.Soo))
    $("#SooWeekFiveTuesday").html("Soo  " + trueFalse(snapshot.val().weekFive.Tuesday.Soo))
    $("#SooWeekFiveWednesday").html("Soo  " + trueFalse(snapshot.val().weekFive.Wednesday.Soo))
    $("#SooWeekFiveThursday").html("Soo  " + trueFalse(snapshot.val().weekFive.Thursday.Soo))
    $("#SooWeekFiveFriday").html("Soo  " + trueFalse(snapshot.val().weekFive.Friday.Soo))
    $("#SooWeekFiveWeekend").html("Soo  " + trueFalse(snapshot.val().weekFive.Weekend.Soo))



    function trueFalse(ref) {
        
        if(ref == true){
            return text = "&#x2713"
        }else{
            return text = ""
        }
    }

      

    
})



//table build


//table thead
var header = $("<thead><tr class=tableHeader</tr><thead");

//a1 empty cell
$(header).append("<th scope='col'></th>");

//header for each day of the week
days.forEach(function(item) {
    var dayHeader = $("<th scope='col'>" + item + "</th>")
    $(header).append(dayHeader);
});

//week one row header
var rowOne = $("<tr><th scope = row rowspan='4' style='vertical-align : middle;text-align:center'>" + weeks[0] + "</th></tr>")

//Ika week One
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("id", players[0] + thisWeek + days[i])
    $(rowOne).append(cell)
}

$(header).append(rowOne)
$(".roundTwo").append(header)

//Katie week One
var newRowK1 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("id", players[1] + thisWeek + days[i])
    $(newRowK1).append(cell)
}

$(header).append(newRowK1)
$(".roundTwo").append(header)

//Soo week One
var newRowS1 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("id", players[2] + thisWeek + days[i])
    $(newRowS1).append(cell)
}

$(header).append(newRowS1)
$(".roundTwo").append(header)

//Wonki week One
var newRowW1 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("id", players[3] + thisWeek + days[i])
    $(newRowW1).append(cell)
}

$(header).append(newRowW1)
$(".roundTwo").append(header);

//week Two row header
var rowTwo = $("<tr><th scope = row rowspan='4' style='vertical-align : middle;text-align:center'>" + weeks[1] + "</th></tr>")

//Ika week Two
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("id", players[0] + thisWeek + days[i])
    $(rowTwo).append(cell)
}

$(header).append(rowTwo)
$(".roundTwo").append(header)

//Katie week Two
var newRowK2 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("id", players[1] + thisWeek + days[i])
    $(newRowK2).append(cell)
}

$(header).append(newRowK2)
$(".roundTwo").append(header)

//Soo week Two
var newRowS2 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("id", players[2] + thisWeek + days[i])
    $(newRowS2).append(cell)
}

$(header).append(newRowS2)
$(".roundTwo").append(header)

//Wonki week Two
var newRowW2 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("id", players[3] + thisWeek + days[i])
    $(newRowW2).append(cell)
}

$(header).append(newRowW2)
$(".roundTwo").append(header)

//week Three row header
var rowThree = $("<tr><th scope = row rowspan='4' style='vertical-align : middle;text-align:center'>" + weeks[2] + "</th></tr>")

//Ika week Three
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("id", players[0] + thisWeek + days[i])
    $(rowThree).append(cell)
}

$(header).append(rowThree)
$(".roundTwo").append(header)

//Katie week Three
var newRowK3 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("id", players[1] + thisWeek + days[i])
    $(newRowK3).append(cell)
}

$(header).append(newRowK3)
$(".roundTwo").append(header)

//Soo week Three
var newRowS3 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("id", players[2] + thisWeek + days[i])
    $(newRowS3).append(cell)
}

$(header).append(newRowS3)
$(".roundTwo").append(header)

//Wonki week Three
var newRowW3 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("id", players[3] + thisWeek + days[i])
    $(newRowW3).append(cell)
}

$(header).append(newRowW3)
$(".roundTwo").append(header)

//week Four row header
var rowFour = $("<tr><th scope = row rowspan='4' style='vertical-align : middle;text-align:center'>" + weeks[3] + "</th></tr>")

//Ika week Four
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("id", players[0] + thisWeek + days[i])
    $(rowFour).append(cell)
}

$(header).append(rowFour)
$(".roundTwo").append(header)

//Katie week Four
var newRowK4 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("id", players[1] + thisWeek + days[i])
    $(newRowK4).append(cell)
}

$(header).append(newRowK4)
$(".roundTwo").append(header)

//Soo week Four
var newRowS4 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("id", players[2] + thisWeek + days[i])
    $(newRowS4).append(cell)
}

$(header).append(newRowS4)
$(".roundTwo").append(header)

//Wonki week Four
var newRowW4 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("id", players[3] + thisWeek + days[i])
    $(newRowW4).append(cell)
}

$(header).append(newRowW4)
$(".roundTwo").append(header)

//week Five row header
var rowFive = $("<tr><th scope = row rowspan='4' style='vertical-align : middle;text-align:center'>" + weeks[4] + "</th></tr>")

//Ika week Five
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("id", players[0] + thisWeek + days[i])
    $(rowFive).append(cell)
}

$(header).append(rowFive)
$(".roundTwo").append(header)

//Katie week Five
var newRowK5 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("id", players[1] + thisWeek + days[i])
    $(newRowK5).append(cell)
}

$(header).append(newRowK5)
$(".roundTwo").append(header)

//Soo week Five
var newRowS5 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("id", players[2] + thisWeek + days[i])
    $(newRowS5).append(cell)
}

$(header).append(newRowS5)
$(".roundTwo").append(header)

//Wonki week Five
var newRowW5 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("id", players[3] + thisWeek + days[i])
    $(newRowW5).append(cell)
}

$(header).append(newRowW5)
$(".roundTwo").append(header)




})

