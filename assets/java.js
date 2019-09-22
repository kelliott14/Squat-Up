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

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var itsToday = dd + "-" + mm "-" + yyyy;
  var week;
  var user;
  var challengeOne;
  var challengeTwo;
  var database = firebase.database();

  switch (itsToday){
    case "23-09-2019" || "24-09-2019" || "25-09-2019" ||
         "26-09-2019" || "27-09-2019" || "28-09-2019" || "29-09-2019" || "22-09-2019":
          week = "Week One";
          break;

    case "30-09-2019" || "01-10-2019" || "02-10-2019" ||
        "03-10-2019" || "04-10-2019" || "05-10-2019" || "06-10-2019":
        week = "Week Two";
        break;

    case "07-10-2019" || "08-10-2019" || "09-10-2019" ||
        "10-10-2019" || "11-10-2019" || "12-10-2019" || "13-10-2019":
        week = "Week Three";
        break;

    case "14-10-2019" || "15-10-2019" || "16-10-2019" ||
        "17-10-2019" || "18-10-2019" || "19-10-2019" || "20-10-2019":
       week = "Week Four";
       break;

    case "21-10-2019" || "22-10-2019" || "23-10-2019" ||
       "24-10-2019" || "25-10-2019" || "26-10-2019" || "27-10-2019":
      week = "Week Four";
      break;
    
    default:
        week = "Week Four"
  }

  database.ref(week + "/" + itsToday).on("value", function(snapshot){
      
  })

  
