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

  var today = new Date().getDay();
  var week;
  var user;
  var challengeOne;
  var challengeTwo;
  var COyesno;
  var CTyesno;

  var challenges = [
      weekOne = [
                Monday = {
                    "pushups": 1,
                    "squat" : 10
                },
                Tuesday = {
                    "pushups": 1,
                    "squat" : 10
                },
                Wednesday = {
                    "pushups": 1,
                    "wallsit" : "0:45"
                },
                Thursday = {
                    "pushups": 2,
                    "squat" : 15
                },
                Friday = {
                    "pushups": 2,
                    "squat" : 15
                },
                Weekend = {
                    "pushups": 2,
                    "wallsit" : "1:00"
                },
            ],

      weekTwo = [
                Monday = {
                        "pushups": 3,
                        "squat" : 20
                },
                Tuesday = {
                        "pushups": 2,
                        "squat" : 20
                },
                Wednesday = {
                        "pushups": 3,
                        "wallsit" : "1:15"
                },
                Thursday = {
                        "pushups": 4,
                        "squat" : 25
                },
                Friday = {
                        "pushups": 4,
                        "squat" : 25
                },
                Weekend = {
                        "pushups": 4,
                        "wallsit" : "1:30"
                },
            ],

        weekThree = [
            Monday = {
                    "pushups": 5,
                    "squat" : 30
            },
            Tuesday = {
                    "pushups": 5,
                    "squat" : 30
            },
            Wednesday = {
                    "pushups": 5,
                    "wallsit" : "1:45"
            },
            Thursday = {
                    "pushups": 6,
                    "squat" : 35
            },
            Friday = {
                    "pushups": 6,
                    "squat" : 35
            },
            Weekend = {
                    "pushups": 6,
                    "wallsit" : "2:00"
            },
        ],

        weekFour = [
            Monday = {
                    "pushups": 7,
                    "squat" : 40
            },
            Tuesday = {
                    "pushups": 7,
                    "squat" : 40
            },
            Wednesday = {
                    "pushups": 7,
                    "wallsit" : "2:15"
            },
            Thursday = {
                    "pushups": 8,
                    "squat" : 45
            },
            Friday = {
                    "pushups": 8,
                    "squat" : 45
            },
            Weekend = {
                    "pushups": 8,
                    "wallsit" : "2:30"
            },
        ],
    
        weekFive = [
            Monday = {
                    "pushups": 9,
                    "squat" : 50
            },
            Tuesday = {
                    "pushups": 9,
                    "squat" : 50
            },
            Wednesday = {
                    "pushups": 9,
                    "wallsit" : "2:45"
            },
            Thursday = {
                    "pushups": 10,
                    "squat" : 55
            },
            Friday = {
                    "pushups": 10,
                    "squat" : 55
            },
            Weekend = {
                    "pushups": 10,
                    "wallsit" : "3:00"
            },
        ],
    ]


  switch (today){
    case 0:
    day = "Weekend";
    today = 5;
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
        day = "Weekend";
        today = 5;
  }

$(".logID").on("click", function(){
    user = $(this).attr("id");
})
 
$(".weekButton").on("click", function(){
    week = $(this).attr("id")
    challengeOne = challenges[0][today].pushups
    $("#1stQuestion").text("Did you complete " + challengeOne + " pushups?");

    if(today == 3 || 6){
        challengeTwo = challenges[0][today].wallsit
        $("#2ndQuestion").text("Did you complete " + challengeTwo + " squats?")
    }else{
        challengeTwo = challenges[0][today].pushups
        $("#2ndQuestion").text("Did you complete a " + challengeTwo + " wallsit?")
    }

});

$(".logOne").on("click", function(){
    COyesno = $(this).attr("id")
});

$(".logTwo").on("click", function(){
    CTyesno = $(this).attr("id")  
})
    
$("#logSubmit").on("click", function(){
    database.ref("/" + week + "/" + day + "/" + user + "/challengeOne").set(COyesno);
    database.ref("/" + week + "/" + day + "/" + user + "/challengeTwo").set(CTyesno);
})
 

database.ref().on("value", function(snapshot){
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



})

})