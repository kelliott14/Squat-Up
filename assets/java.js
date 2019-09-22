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

  var today = new Date().getDay();
  var week = "weekOne";
  var user;
  var challengeOne;
  var challengeTwo;
  var COyesno;
  var CTyesno;
  var database = firebase.database();

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
 
  

