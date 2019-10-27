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
  var week;
  var user;
  var challengeOne;
  var challengeTwo;
  var COyesno;
  var CTyesno;
  var answers;
  var dbRef;

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend"]
    var weeks = ["Week One", "Week Two", "Week Three", "Week Four", "Week Five"]
    var players = ["Ika", "Katie", "Soo", "Wonki"]

  var challenges = [
      weekOne = [
                Monday = {
                    "pushups": 5,
                    "walking planks" : 5,
                    "squats": 8
                },
                Tuesday = {
                    "pushups": 5,
                    "reverse crunch" : 5,
                    "lunges": 8
                },
                Wednesday = {
                    "pushups": 5,
                    "plank" : "1:00",
                    "jump squats": 4
                },
                Thursday = {
                    "pushups": 5,
                    "leg raises" : 5,
                    "side lunges": 8
                },
                Friday = {
                    "pushups": 5,
                    "mountain climbers" : 5,
                    "sumo squats": 8
                },
                Weekend = {
                    "pushups": 5,
                    "russian twists" : 5,
                    "wall-sit": "1:30"
                },
            ],

      weekTwo = [
                Monday = {
                    "pushups": 5,
                    "walking planks" : 10,
                    "squats": 16
                },
                Tuesday = {
                    "pushups": 5,
                    "reverse crunch" : 10,
                    "lunges": 16
                },
                Wednesday = {
                    "pushups": 5,
                    "plank" : "1:15",
                    "jump squats": 8
                },
                Thursday = {
                    "pushups": 5,
                    "leg raises" : 10,
                    "side lunges": 16
                },
                Friday = {
                    "pushups": 5,
                    "mountain climbers" : 10,
                    "sumo squats": 16
                },
                Weekend = {
                    "pushups": 5,
                    "russian twists" : 10,
                    "wall-sit": "1:45"
                },
            ],

        weekThree = [
            Monday = {
                "pushups": 5,
                "walking planks" : 15,
                "squats": 24
            },
            Tuesday = {
                "pushups": 5,
                "reverse crunch" : 15,
                "lunges": 24
            },
            Wednesday = {
                "pushups": 5,
                "plank" : "1:30",
                "jump squats": 12
            },
            Thursday = {
                "pushups": 5,
                "leg raises" : 15,
                "side lunges": 24
            },
            Friday = {
                "pushups": 5,
                "mountain climbers" : 15,
                "sumo squats": 24
            },
            Weekend = {
                "pushups": 5,
                "russian twists" : 15,
                "wall-sit": "2:00"
            },
        ],

        weekFour = [
            Monday = {
                "pushups": 5,
                "walking planks" : 20,
                "squats": 32
            },
            Tuesday = {
                "pushups": 5,
                "reverse crunch" : 20,
                "lunges": 32
            },
            Wednesday = {
                "pushups": 5,
                "plank" : "1:45",
                "jump squats": 16
            },
            Thursday = {
                "pushups": 5,
                "leg raises" : 20,
                "side lunges": 32
            },
            Friday = {
                "pushups": 5,
                "mountain climbers" : 20,
                "sumo squats": 32
            },
            Weekend = {
                "pushups": 5,
                "russian twists" : 20,
                "wall-sit": "2:15"
            },
        ],
    
        weekFive = [
            Monday = {
                "pushups": 5,
                "walking planks" : 25,
                "squats": 40
            },
            Tuesday = {
                "pushups": 5,
                "reverse crunch" : 25,
                "lunges": 40
            },
            Wednesday = {
                "pushups": 5,
                "plank" : "2:00",
                "jump squats": 20
            },
            Thursday = {
                "pushups": 5,
                "leg raises" : 25,
                "side lunges": 40
            },
            Friday = {
                "pushups": 5,
                "mountain climbers" : 25,
                "sumo squats": 40
            },
            Weekend = {
                "pushups": 5,
                "russian twists" : 25,
                "wall-sit": "2:30"
            },
        ],
    ]

if (day == "Sunday" || "Saturday"){
    day = "Weekend"
}


whichWeek(date)

function whichWeek(date){
    var wOneDOne = "20191028"
    var WTwoDOne = "20191104"
    var WThreeDOne = "20191111"
    var WFourDOne = "20191118"
    var WFiveDOne = "20191125"

    if (date > wOneDOne && date < WTwoDOne){
        week = "Week One"
        dbRef = "weekOne"
    }else if (date > WTwoDOne && date < WThreeDOne){
        week = "Week Two"
        dbRef = "weekTwo"
    }else if (date > WThreeDOne && date < WFourDOne){
        week = "Week Three"
        dbRef = "weekThree"
    }else if (date > WFourDOne && date < WFiveDOne){
        week = "Week Four"
        dbRef = "weekFour"
    }else if (date > WFiveDOne){
        week = "Week Five"
        dbRef = "weekFive"
    }

}

$(".logID").on("click", function(){
    user = $(this).attr("id");
    
})
 

    
$("#logSubmit").on("click", function(){             
    database.ref("/" + dbRef + "/" + day + "/" + user).set(true);  
})

 
var ref1 = ["weekOne", "weekTwo", "weekThree", "weekFour", "weekFive"]
var ref2 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend"]
var ref3 = ["Ika", "Katie", "Soo", "Wonki"]

database.ref().on("value", function(snapshot){
    
    var query = snapshot.val()

    
    
    
    //Ika Week One
    $("#IkaW1MC1").text(snapshot.val().weekOne.Monday.Ika.challengeOne)
    $("#IkaW1MC2").text(snapshot.val().weekOne.Monday.Ika.challengeTwo)
    $("#IkaW1TuC1").text(snapshot.val().weekOne.Tuesday.Ika.challengeOne)
    $("#IkaW1TuC2").text(snapshot.val().weekOne.Tuesday.Ika.challengeTwo)
    $("#IkaW1WC1").text(snapshot.val().weekOne.Wednesday.Ika.challengeOne)
    $("#IkaW1WC2").text(snapshot.val().weekOne.Wednesday.Ika.challengeTwo)
    $("#IkaW1ThC1").text(snapshot.val().weekOne.Thursday.Ika.challengeOne)
    $("#IkaW1ThC2").text(snapshot.val().weekOne.Thursday.Ika.challengeTwo)
    $("#IkaW1FC1").text(snapshot.val().weekOne.Friday.Ika.challengeOne)
    $("#IkaW1FC2").text(snapshot.val().weekOne.Friday.Ika.challengeTwo)
    $("#IkaW1WEC1").text(snapshot.val().weekOne.Weekend.Ika.challengeOne)
    $("#IkaW1WEC2").text(snapshot.val().weekOne.Weekend.Ika.challengeTwo)
    
    $("#KatieW1MC1").text(snapshot.val().weekOne.Monday.Katie.challengeOne)
    $("#KatieW1MC2").text(snapshot.val().weekOne.Monday.Katie.challengeTwo)
    $("#KatieW1TuC1").text(snapshot.val().weekOne.Tuesday.Katie.challengeOne)
    $("#KatieW1TuC2").text(snapshot.val().weekOne.Tuesday.Katie.challengeTwo)
    $("#KatieW1WC1").text(snapshot.val().weekOne.Wednesday.Katie.challengeOne)
    $("#KatieW1WC2").text(snapshot.val().weekOne.Wednesday.Katie.challengeTwo)
    $("#KatieW1ThC1").text(snapshot.val().weekOne.Thursday.Katie.challengeOne)
    $("#KatieW1ThC2").text(snapshot.val().weekOne.Thursday.Katie.challengeTwo)
    $("#KatieW1FC1").text(snapshot.val().weekOne.Friday.Katie.challengeOne)
    $("#KatieW1FC2").text(snapshot.val().weekOne.Friday.Katie.challengeTwo)
    $("#KatieW1WEC1").text(snapshot.val().weekOne.Weekend.Katie.challengeOne)
    $("#KatieW1WEC2").text(snapshot.val().weekOne.Weekend.Katie.challengeTwo)

    $("#SooW1MC1").text(snapshot.val().weekOne.Monday.Soo.challengeOne)
    $("#SooW1MC2").text(snapshot.val().weekOne.Monday.Soo.challengeTwo)
    $("#SooW1TuC1").text(snapshot.val().weekOne.Tuesday.Soo.challengeOne)
    $("#SooW1TuC2").text(snapshot.val().weekOne.Tuesday.Soo.challengeTwo)
    $("#SooW1WC1").text(snapshot.val().weekOne.Wednesday.Soo.challengeOne)
    $("#SooW1WC2").text(snapshot.val().weekOne.Wednesday.Soo.challengeTwo)
    $("#SooW1ThC1").text(snapshot.val().weekOne.Thursday.Soo.challengeOne)
    $("#SooW1ThC2").text(snapshot.val().weekOne.Thursday.Soo.challengeTwo)
    $("#SooW1FC1").text(snapshot.val().weekOne.Friday.Soo.challengeOne)
    $("#SooW1FC2").text(snapshot.val().weekOne.Friday.Soo.challengeTwo)
    $("#SooW1WEC1").text(snapshot.val().weekOne.Weekend.Soo.challengeOne)
    $("#SooW1WEC2").text(snapshot.val().weekOne.Weekend.Soo.challengeTwo)

    $("#WonkiW1MC1").text(snapshot.val().weekOne.Monday.Wonki.challengeOne)
    $("#WonkiW1MC2").text(snapshot.val().weekOne.Monday.Wonki.challengeTwo)
    $("#WonkiW1TuC1").text(snapshot.val().weekOne.Tuesday.Wonki.challengeOne)
    $("#WonkiW1TuC2").text(snapshot.val().weekOne.Tuesday.Wonki.challengeTwo)
    $("#WonkiW1WC1").text(snapshot.val().weekOne.Wednesday.Wonki.challengeOne)
    $("#WonkiW1WC2").text(snapshot.val().weekOne.Wednesday.Wonki.challengeTwo)
    $("#WonkiW1ThC1").text(snapshot.val().weekOne.Thursday.Wonki.challengeOne)
    $("#WonkiW1ThC2").text(snapshot.val().weekOne.Thursday.Wonki.challengeTwo)
    $("#WonkiW1FC1").text(snapshot.val().weekOne.Friday.Wonki.challengeOne)
    $("#WonkiW1FC2").text(snapshot.val().weekOne.Friday.Wonki.challengeTwo)
    $("#WonkiW1WEC1").text(snapshot.val().weekOne.Weekend.Wonki.challengeOne)
    $("#WonkiW1WEC2").text(snapshot.val().weekOne.Weekend.Wonki.challengeTwo)

    $("#IkaW2MC1").text(snapshot.val().weekTwo.Monday.Ika.challengeOne)
    $("#IkaW2MC2").text(snapshot.val().weekTwo.Monday.Ika.challengeTwo)
    $("#IkaW2TuC1").text(snapshot.val().weekTwo.Tuesday.Ika.challengeOne)
    $("#IkaW2TuC2").text(snapshot.val().weekTwo.Tuesday.Ika.challengeTwo)
    $("#IkaW2WC1").text(snapshot.val().weekTwo.Wednesday.Ika.challengeOne)
    $("#IkaW2WC2").text(snapshot.val().weekTwo.Wednesday.Ika.challengeTwo)
    $("#IkaW2ThC1").text(snapshot.val().weekTwo.Thursday.Ika.challengeOne)
    $("#IkaW2ThC2").text(snapshot.val().weekTwo.Thursday.Ika.challengeTwo)
    $("#IkaW2FC1").text(snapshot.val().weekTwo.Friday.Ika.challengeOne)
    $("#IkaW2FC2").text(snapshot.val().weekTwo.Friday.Ika.challengeTwo)
    $("#IkaW2WEC1").text(snapshot.val().weekTwo.Weekend.Ika.challengeOne)
    $("#IkaW2WEC2").text(snapshot.val().weekTwo.Weekend.Ika.challengeTwo)
    
    $("#KatieW2MC1").text(snapshot.val().weekTwo.Monday.Katie.challengeOne)
    $("#KatieW2MC2").text(snapshot.val().weekTwo.Monday.Katie.challengeTwo)
    $("#KatieW2TuC1").text(snapshot.val().weekTwo.Tuesday.Katie.challengeOne)
    $("#KatieW2TuC2").text(snapshot.val().weekTwo.Tuesday.Katie.challengeTwo)
    $("#KatieW2WC1").text(snapshot.val().weekTwo.Wednesday.Katie.challengeOne)
    $("#KatieW2WC2").text(snapshot.val().weekTwo.Wednesday.Katie.challengeTwo)
    $("#KatieW2ThC1").text(snapshot.val().weekTwo.Thursday.Katie.challengeOne)
    $("#KatieW2ThC2").text(snapshot.val().weekTwo.Thursday.Katie.challengeTwo)
    $("#KatieW2FC1").text(snapshot.val().weekTwo.Friday.Katie.challengeOne)
    $("#KatieW2FC2").text(snapshot.val().weekTwo.Friday.Katie.challengeTwo)
    $("#KatieW2WEC1").text(snapshot.val().weekTwo.Weekend.Katie.challengeOne)
    $("#KatieW2WEC2").text(snapshot.val().weekTwo.Weekend.Katie.challengeTwo)

    $("#SooW2MC1").text(snapshot.val().weekTwo.Monday.Soo.challengeOne)
    $("#SooW2MC2").text(snapshot.val().weekTwo.Monday.Soo.challengeTwo)
    $("#SooW2TuC1").text(snapshot.val().weekTwo.Tuesday.Soo.challengeOne)
    $("#SooW2TuC2").text(snapshot.val().weekTwo.Tuesday.Soo.challengeTwo)
    $("#SooW2WC1").text(snapshot.val().weekTwo.Wednesday.Soo.challengeOne)
    $("#SooW2WC2").text(snapshot.val().weekTwo.Wednesday.Soo.challengeTwo)
    $("#SooW2ThC1").text(snapshot.val().weekTwo.Thursday.Soo.challengeOne)
    $("#SooW2ThC2").text(snapshot.val().weekTwo.Thursday.Soo.challengeTwo)
    $("#SooW2FC1").text(snapshot.val().weekTwo.Friday.Soo.challengeOne)
    $("#SooW2FC2").text(snapshot.val().weekTwo.Friday.Soo.challengeTwo)
    $("#SooW2WEC1").text(snapshot.val().weekTwo.Weekend.Soo.challengeOne)
    $("#SooW2WEC2").text(snapshot.val().weekTwo.Weekend.Soo.challengeTwo)

    $("#WonkiW2MC1").text(snapshot.val().weekTwo.Monday.Wonki.challengeOne)
    $("#WonkiW2MC2").text(snapshot.val().weekTwo.Monday.Wonki.challengeTwo)
    $("#WonkiW2TuC1").text(snapshot.val().weekTwo.Tuesday.Wonki.challengeOne)
    $("#WonkiW2TuC2").text(snapshot.val().weekTwo.Tuesday.Wonki.challengeTwo)
    $("#WonkiW2WC1").text(snapshot.val().weekTwo.Wednesday.Wonki.challengeOne)
    $("#WonkiW2WC2").text(snapshot.val().weekTwo.Wednesday.Wonki.challengeTwo)
    $("#WonkiW2ThC1").text(snapshot.val().weekTwo.Thursday.Wonki.challengeOne)
    $("#WonkiW2ThC2").text(snapshot.val().weekTwo.Thursday.Wonki.challengeTwo)
    $("#WonkiW2FC1").text(snapshot.val().weekTwo.Friday.Wonki.challengeOne)
    $("#WonkiW2FC2").text(snapshot.val().weekTwo.Friday.Wonki.challengeTwo)
    $("#WonkiW2WEC1").text(snapshot.val().weekTwo.Weekend.Wonki.challengeOne)
    $("#WonkiW2WEC2").text(snapshot.val().weekTwo.Weekend.Wonki.challengeTwo)



    $("#IkaW3MC1").text(snapshot.val().weekThree.Monday.Ika.challengeOne)
    $("#IkaW3MC2").text(snapshot.val().weekThree.Monday.Ika.challengeTwo)
    $("#IkaW3TuC1").text(snapshot.val().weekThree.Tuesday.Ika.challengeOne)
    $("#IkaW3TuC2").text(snapshot.val().weekThree.Tuesday.Ika.challengeTwo)
    $("#IkaW3WC1").text(snapshot.val().weekThree.Wednesday.Ika.challengeOne)
    $("#IkaW3WC2").text(snapshot.val().weekThree.Wednesday.Ika.challengeTwo)
    $("#IkaW3ThC1").text(snapshot.val().weekThree.Thursday.Ika.challengeOne)
    $("#IkaW3ThC2").text(snapshot.val().weekThree.Thursday.Ika.challengeTwo)
    $("#IkaW3FC1").text(snapshot.val().weekThree.Friday.Ika.challengeOne)
    $("#IkaW3FC2").text(snapshot.val().weekThree.Friday.Ika.challengeTwo)
    $("#IkaW3WEC1").text(snapshot.val().weekThree.Weekend.Ika.challengeOne)
    $("#IkaW3WEC2").text(snapshot.val().weekThree.Weekend.Ika.challengeTwo)
    
    $("#KatieW3MC1").text(snapshot.val().weekThree.Monday.Katie.challengeOne)
    $("#KatieW3MC2").text(snapshot.val().weekThree.Monday.Katie.challengeTwo)
    $("#KatieW3TuC1").text(snapshot.val().weekThree.Tuesday.Katie.challengeOne)
    $("#KatieW3TuC2").text(snapshot.val().weekThree.Tuesday.Katie.challengeTwo)
    $("#KatieW3WC1").text(snapshot.val().weekThree.Wednesday.Katie.challengeOne)
    $("#KatieW3WC2").text(snapshot.val().weekThree.Wednesday.Katie.challengeTwo)
    $("#KatieW3ThC1").text(snapshot.val().weekThree.Thursday.Katie.challengeOne)
    $("#KatieW3ThC2").text(snapshot.val().weekThree.Thursday.Katie.challengeTwo)
    $("#KatieW3FC1").text(snapshot.val().weekThree.Friday.Katie.challengeOne)
    $("#KatieW3FC2").text(snapshot.val().weekThree.Friday.Katie.challengeTwo)
    $("#KatieW3WEC1").text(snapshot.val().weekThree.Weekend.Katie.challengeOne)
    $("#KatieW3WEC2").text(snapshot.val().weekThree.Weekend.Katie.challengeTwo)

    $("#SooW3MC1").text(snapshot.val().weekThree.Monday.Soo.challengeOne)
    $("#SooW3MC2").text(snapshot.val().weekThree.Monday.Soo.challengeTwo)
    $("#SooW3TuC1").text(snapshot.val().weekThree.Tuesday.Soo.challengeOne)
    $("#SooW3TuC2").text(snapshot.val().weekThree.Tuesday.Soo.challengeTwo)
    $("#SooW3WC1").text(snapshot.val().weekThree.Wednesday.Soo.challengeOne)
    $("#SooW3WC2").text(snapshot.val().weekThree.Wednesday.Soo.challengeTwo)
    $("#SooW3ThC1").text(snapshot.val().weekThree.Thursday.Soo.challengeOne)
    $("#SooW3ThC2").text(snapshot.val().weekThree.Thursday.Soo.challengeTwo)
    $("#SooW3FC1").text(snapshot.val().weekThree.Friday.Soo.challengeOne)
    $("#SooW3FC2").text(snapshot.val().weekThree.Friday.Soo.challengeTwo)
    $("#SooW3WEC1").text(snapshot.val().weekThree.Weekend.Soo.challengeOne)
    $("#SooW3WEC2").text(snapshot.val().weekThree.Weekend.Soo.challengeTwo)

    $("#WonkiW3MC1").text(snapshot.val().weekThree.Monday.Wonki.challengeOne)
    $("#WonkiW3MC2").text(snapshot.val().weekThree.Monday.Wonki.challengeTwo)
    $("#WonkiW3TuC1").text(snapshot.val().weekThree.Tuesday.Wonki.challengeOne)
    $("#WonkiW3TuC2").text(snapshot.val().weekThree.Tuesday.Wonki.challengeTwo)
    $("#WonkiW3WC1").text(snapshot.val().weekThree.Wednesday.Wonki.challengeOne)
    $("#WonkiW3WC2").text(snapshot.val().weekThree.Wednesday.Wonki.challengeTwo)
    $("#WonkiW3ThC1").text(snapshot.val().weekThree.Thursday.Wonki.challengeOne)
    $("#WonkiW3ThC2").text(snapshot.val().weekThree.Thursday.Wonki.challengeTwo)
    $("#WonkiW3FC1").text(snapshot.val().weekThree.Friday.Wonki.challengeOne)
    $("#WonkiW3FC2").text(snapshot.val().weekThree.Friday.Wonki.challengeTwo)
    $("#WonkiW3WEC1").text(snapshot.val().weekThree.Weekend.Wonki.challengeOne)
    $("#WonkiW3WEC2").text(snapshot.val().weekThree.Weekend.Wonki.challengeTwo)

    $("#IkaW4MC1").text(snapshot.val().weekFour.Monday.Ika.challengeOne)
    $("#IkaW4MC2").text(snapshot.val().weekFour.Monday.Ika.challengeTwo)
    $("#IkaW4TuC1").text(snapshot.val().weekFour.Tuesday.Ika.challengeOne)
    $("#IkaW4TuC2").text(snapshot.val().weekFour.Tuesday.Ika.challengeTwo)
    $("#IkaW4WC1").text(snapshot.val().weekFour.Wednesday.Ika.challengeOne)
    $("#IkaW4WC2").text(snapshot.val().weekFour.Wednesday.Ika.challengeTwo)
    $("#IkaW4ThC1").text(snapshot.val().weekFour.Thursday.Ika.challengeOne)
    $("#IkaW4ThC2").text(snapshot.val().weekFour.Thursday.Ika.challengeTwo)
    $("#IkaW4FC1").text(snapshot.val().weekFour.Friday.Ika.challengeOne)
    $("#IkaW4FC2").text(snapshot.val().weekFour.Friday.Ika.challengeTwo)
    $("#IkaW4WEC1").text(snapshot.val().weekFour.Weekend.Ika.challengeOne)
    $("#IkaW4WEC2").text(snapshot.val().weekFour.Weekend.Ika.challengeTwo)
    
    $("#KatieW4MC1").text(snapshot.val().weekFour.Monday.Katie.challengeOne)
    $("#KatieW4MC2").text(snapshot.val().weekFour.Monday.Katie.challengeTwo)
    $("#KatieW4TuC1").text(snapshot.val().weekFour.Tuesday.Katie.challengeOne)
    $("#KatieW4TuC2").text(snapshot.val().weekFour.Tuesday.Katie.challengeTwo)
    $("#KatieW4WC1").text(snapshot.val().weekFour.Wednesday.Katie.challengeOne)
    $("#KatieW4WC2").text(snapshot.val().weekFour.Wednesday.Katie.challengeTwo)
    $("#KatieW4ThC1").text(snapshot.val().weekFour.Thursday.Katie.challengeOne)
    $("#KatieW4ThC2").text(snapshot.val().weekFour.Thursday.Katie.challengeTwo)
    $("#KatieW4FC1").text(snapshot.val().weekFour.Friday.Katie.challengeOne)
    $("#KatieW4FC2").text(snapshot.val().weekFour.Friday.Katie.challengeTwo)
    $("#KatieW4WEC1").text(snapshot.val().weekFour.Weekend.Katie.challengeOne)
    $("#KatieW4WEC2").text(snapshot.val().weekFour.Weekend.Katie.challengeTwo)

    $("#SooW4MC1").text(snapshot.val().weekFour.Monday.Soo.challengeOne)
    $("#SooW4MC2").text(snapshot.val().weekFour.Monday.Soo.challengeTwo)
    $("#SooW4TuC1").text(snapshot.val().weekFour.Tuesday.Soo.challengeOne)
    $("#SooW4TuC2").text(snapshot.val().weekFour.Tuesday.Soo.challengeTwo)
    $("#SooW4WC1").text(snapshot.val().weekFour.Wednesday.Soo.challengeOne)
    $("#SooW4WC2").text(snapshot.val().weekFour.Wednesday.Soo.challengeTwo)
    $("#SooW4ThC1").text(snapshot.val().weekFour.Thursday.Soo.challengeOne)
    $("#SooW4ThC2").text(snapshot.val().weekFour.Thursday.Soo.challengeTwo)
    $("#SooW4FC1").text(snapshot.val().weekFour.Friday.Soo.challengeOne)
    $("#SooW4FC2").text(snapshot.val().weekFour.Friday.Soo.challengeTwo)
    $("#SooW4WEC1").text(snapshot.val().weekFour.Weekend.Soo.challengeOne)
    $("#SooW4WEC2").text(snapshot.val().weekFour.Weekend.Soo.challengeTwo)

    $("#WonkiW4MC1").text(snapshot.val().weekFour.Monday.Wonki.challengeOne)
    $("#WonkiW4MC2").text(snapshot.val().weekFour.Monday.Wonki.challengeTwo)
    $("#WonkiW4TuC1").text(snapshot.val().weekFour.Tuesday.Wonki.challengeOne)
    $("#WonkiW4TuC2").text(snapshot.val().weekFour.Tuesday.Wonki.challengeTwo)
    $("#WonkiW4WC1").text(snapshot.val().weekFour.Wednesday.Wonki.challengeOne)
    $("#WonkiW4WC2").text(snapshot.val().weekFour.Wednesday.Wonki.challengeTwo)
    $("#WonkiW4ThC1").text(snapshot.val().weekFour.Thursday.Wonki.challengeOne)
    $("#WonkiW4ThC2").text(snapshot.val().weekFour.Thursday.Wonki.challengeTwo)
    $("#WonkiW4FC1").text(snapshot.val().weekFour.Friday.Wonki.challengeOne)
    $("#WonkiW4FC2").text(snapshot.val().weekFour.Friday.Wonki.challengeTwo)
    $("#WonkiW4WEC1").text(snapshot.val().weekFour.Weekend.Wonki.challengeOne)
    $("#WonkiW4WEC2").text(snapshot.val().weekFour.Weekend.Wonki.challengeTwo)


    $("#IkaW5MC1").text(snapshot.val().weekFive.Monday.Ika.challengeOne)
    $("#IkaW5MC2").text(snapshot.val().weekFive.Monday.Ika.challengeTwo)
    $("#IkaW5TuC1").text(snapshot.val().weekFive.Tuesday.Ika.challengeOne)
    $("#IkaW5TuC2").text(snapshot.val().weekFive.Tuesday.Ika.challengeTwo)
    $("#IkaW5WC1").text(snapshot.val().weekFive.Wednesday.Ika.challengeOne)
    $("#IkaW5WC2").text(snapshot.val().weekFive.Wednesday.Ika.challengeTwo)
    $("#IkaW5ThC1").text(snapshot.val().weekFive.Thursday.Ika.challengeOne)
    $("#IkaW5ThC2").text(snapshot.val().weekFive.Thursday.Ika.challengeTwo)
    $("#IkaW5FC1").text(snapshot.val().weekFive.Friday.Ika.challengeOne)
    $("#IkaW5FC2").text(snapshot.val().weekFive.Friday.Ika.challengeTwo)
    $("#IkaW5WEC1").text(snapshot.val().weekFive.Weekend.Ika.challengeOne)
    $("#IkaW5WEC2").text(snapshot.val().weekFive.Weekend.Ika.challengeTwo)
    
    $("#KatieW5MC1").text(snapshot.val().weekFive.Monday.Katie.challengeOne)
    $("#KatieW5MC2").text(snapshot.val().weekFive.Monday.Katie.challengeTwo)
    $("#KatieW5TuC1").text(snapshot.val().weekFive.Tuesday.Katie.challengeOne)
    $("#KatieW5TuC2").text(snapshot.val().weekFive.Tuesday.Katie.challengeTwo)
    $("#KatieW5WC1").text(snapshot.val().weekFive.Wednesday.Katie.challengeOne)
    $("#KatieW5WC2").text(snapshot.val().weekFive.Wednesday.Katie.challengeTwo)
    $("#KatieW5ThC1").text(snapshot.val().weekFive.Thursday.Katie.challengeOne)
    $("#KatieW5ThC2").text(snapshot.val().weekFive.Thursday.Katie.challengeTwo)
    $("#KatieW5FC1").text(snapshot.val().weekFive.Friday.Katie.challengeOne)
    $("#KatieW5FC2").text(snapshot.val().weekFive.Friday.Katie.challengeTwo)
    $("#KatieW5WEC1").text(snapshot.val().weekFive.Weekend.Katie.challengeOne)
    $("#KatieW5WEC2").text(snapshot.val().weekFive.Weekend.Katie.challengeTwo)

    $("#SooW5MC1").text(snapshot.val().weekFive.Monday.Soo.challengeOne)
    $("#SooW5MC2").text(snapshot.val().weekFive.Monday.Soo.challengeTwo)
    $("#SooW5TuC1").text(snapshot.val().weekFive.Tuesday.Soo.challengeOne)
    $("#SooW5TuC2").text(snapshot.val().weekFive.Tuesday.Soo.challengeTwo)
    $("#SooW5WC1").text(snapshot.val().weekFive.Wednesday.Soo.challengeOne)
    $("#SooW5WC2").text(snapshot.val().weekFive.Wednesday.Soo.challengeTwo)
    $("#SooW5ThC1").text(snapshot.val().weekFive.Thursday.Soo.challengeOne)
    $("#SooW5ThC2").text(snapshot.val().weekFive.Thursday.Soo.challengeTwo)
    $("#SooW5FC1").text(snapshot.val().weekFive.Friday.Soo.challengeOne)
    $("#SooW5FC2").text(snapshot.val().weekFive.Friday.Soo.challengeTwo)
    $("#SooW5WEC1").text(snapshot.val().weekFive.Weekend.Soo.challengeOne)
    $("#SooW5WEC2").text(snapshot.val().weekFive.Weekend.Soo.challengeTwo)

    $("#WonkiW5MC1").text(snapshot.val().weekFive.Monday.Wonki.challengeOne)
    $("#WonkiW5MC2").text(snapshot.val().weekFive.Monday.Wonki.challengeTwo)
    $("#WonkiW5TuC1").text(snapshot.val().weekFive.Tuesday.Wonki.challengeOne)
    $("#WonkiW5TuC2").text(snapshot.val().weekFive.Tuesday.Wonki.challengeTwo)
    $("#WonkiW5WC1").text(snapshot.val().weekFive.Wednesday.Wonki.challengeOne)
    $("#WonkiW5WC2").text(snapshot.val().weekFive.Wednesday.Wonki.challengeTwo)
    $("#WonkiW5ThC1").text(snapshot.val().weekFive.Thursday.Wonki.challengeOne)
    $("#WonkiW5ThC2").text(snapshot.val().weekFive.Thursday.Wonki.challengeTwo)
    $("#WonkiW5FC1").text(snapshot.val().weekFive.Friday.Wonki.challengeOne)
    $("#WonkiW5FC2").text(snapshot.val().weekFive.Friday.Wonki.challengeTwo)
    $("#WonkiW5WEC1").text(snapshot.val().weekFive.Weekend.Wonki.challengeOne)
    $("#WonkiW5WEC2").text(snapshot.val().weekFive.Weekend.Wonki.challengeTwo)


    
    
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
var rowOne = $("<tr><th scope = row rowspan='4'>" + weeks[0] + "</th></tr>")

//Ika week One
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("value", players[0] + thisWeek + days[i])
    $(rowOne).append(cell)
}

$(header).append(rowOne)
$(".roundTwo").append(header)

//Katie week One
var newRowK1 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("value", players[1] + thisWeek + days[i])
    $(newRowK1).append(cell)
}

$(header).append(newRowK1)
$(".roundTwo").append(header)

//Soo week One
var newRowS1 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("value", players[2] + thisWeek + days[i])
    $(newRowS1).append(cell)
}

$(header).append(newRowS1)
$(".roundTwo").append(header)

//Wonki week One
var newRowW1 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[0].replace(/\s/g, '');
    $(cell).attr("value", players[3] + thisWeek + days[i])
    $(newRowW1).append(cell)
}

$(header).append(newRowW1)
$(".roundTwo").append(header);

//week Two row header
var rowTwo = $("<tr><th scope = row rowspan='4'>" + weeks[1] + "</th></tr>")

//Ika week Two
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("value", players[0] + thisWeek + days[i])
    $(rowTwo).append(cell)
}

$(header).append(rowTwo)
$(".roundTwo").append(header)

//Katie week Two
var newRowK2 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("value", players[1] + thisWeek + days[i])
    $(newRowK2).append(cell)
}

$(header).append(newRowK2)
$(".roundTwo").append(header)

//Soo week Two
var newRowS2 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("value", players[2] + thisWeek + days[i])
    $(newRowS2).append(cell)
}

$(header).append(newRowS2)
$(".roundTwo").append(header)

//Wonki week Two
var newRowW2 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[1].replace(/\s/g, '');
    $(cell).attr("value", players[3] + thisWeek + days[i])
    $(newRowW2).append(cell)
}

$(header).append(newRowW2)
$(".roundTwo").append(header)

//week Three row header
var rowThree = $("<tr><th scope = row rowspan='4'>" + weeks[2] + "</th></tr>")

//Ika week Three
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("value", players[0] + thisWeek + days[i])
    $(rowThree).append(cell)
}

$(header).append(rowThree)
$(".roundTwo").append(header)

//Katie week Three
var newRowK3 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("value", players[1] + thisWeek + days[i])
    $(newRowK3).append(cell)
}

$(header).append(newRowK3)
$(".roundTwo").append(header)

//Soo week Three
var newRowS3 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("value", players[2] + thisWeek + days[i])
    $(newRowS3).append(cell)
}

$(header).append(newRowS3)
$(".roundTwo").append(header)

//Wonki week Three
var newRowW3 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[2].replace(/\s/g, '');
    $(cell).attr("value", players[3] + thisWeek + days[i])
    $(newRowW3).append(cell)
}

$(header).append(newRowW3)
$(".roundTwo").append(header)

//week Four row header
var rowFour = $("<tr><th scope = row rowspan='4'>" + weeks[3] + "</th></tr>")

//Ika week Four
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("value", players[0] + thisWeek + days[i])
    $(rowFour).append(cell)
}

$(header).append(rowFour)
$(".roundTwo").append(header)

//Katie week Four
var newRowK4 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("value", players[1] + thisWeek + days[i])
    $(newRowK4).append(cell)
}

$(header).append(newRowK4)
$(".roundTwo").append(header)

//Soo week Four
var newRowS4 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("value", players[2] + thisWeek + days[i])
    $(newRowS4).append(cell)
}

$(header).append(newRowS4)
$(".roundTwo").append(header)

//Wonki week Four
var newRowW4 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[3].replace(/\s/g, '');
    $(cell).attr("value", players[3] + thisWeek + days[i])
    $(newRowW4).append(cell)
}

$(header).append(newRowW4)
$(".roundTwo").append(header)

//week Five row header
var rowFive = $("<tr><th scope = row rowspan='4'>" + weeks[3] + "</th></tr>")

//Ika week Four
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("value", players[0] + thisWeek + days[i])
    $(rowFive).append(cell)
}

$(header).append(rowFive)
$(".roundTwo").append(header)

//Katie week Five
var newRowK5 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("value", players[1] + thisWeek + days[i])
    $(newRowK5).append(cell)
}

$(header).append(newRowK5)
$(".roundTwo").append(header)

//Soo week Four
var newRowS5 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("value", players[2] + thisWeek + days[i])
    $(newRowS5).append(cell)
}

$(header).append(newRowS5)
$(".roundTwo").append(header)

//Wonki week Four
var newRowW5 = $("<tr></tr>")
for (var i = 0; i < days.length; i++){
    var cell = $("<td class='cell'></td>");
    var thisWeek = weeks[4].replace(/\s/g, '');
    $(cell).attr("value", players[3] + thisWeek + days[i])
    $(newRowW5).append(cell)
}

$(header).append(newRowW5)
$(".roundTwo").append(header)
})