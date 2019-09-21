var firebaseConfig = {
  apiKey: "AIzaSyCbFUbD9JUZASC9HottPis9p3_88IGzV5M",
  authDomain: "train-assignment-91c72.firebaseapp.com",
  databaseURL: "https://train-assignment-91c72.firebaseio.com",
  projectId: "train-assignment-91c72",
  storageBucket: "",
  messagingSenderId: "736028027232",
  appId: "1:736028027232:web:4b20160e365cbae3fc1605"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train-btn").on("click", function (e) {

  e.preventDefault();

  var name = $("#train-name-input").val().trim();
  var destin = $("#destin-input").val().trim();
  var first = $("#first-input").val().trim();
  var frequen = $("#frequen-input").val().trim();

  // newTrain is a local object for holding train info
  var newTrain = {
    name: name,
    destination: destin,
    firstTrain: first,
    frequency: frequen
  }
  // Upload train data to the firebase
  database.ref().push(newTrain);

  console.log("new train info: " + JSON.stringify(newTrain));

  // clear all of the text-boxes
  $("#train-name-input").val("");
  $("#destin-input").val("");
  $("#first-input").val("");
  $("#frequen-input").val("");
});

database.ref().on("child_added", function (childSnapshot) {
  // grabbing data from firebase and storing in an variable
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var frequency = childSnapshot.val().frequncy;
  var firstTrain = childSnapshot.val().firstTrain;
  // 03:00:09 => [03, 00, 09]
  var timeArr = firstTrain.split(":");
  var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
  console.log("train Time:  +trainTime");
  // cal nextTrainArr and MinsAway 

  $("#train-table >tbody").append(
    $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(firstTrain)

    )
  )
      var tFrequency = 5;
      var firstTime = "04:30";
      
      var firstTime = moment(firstTime, "HH:mm").subtract(1, "years");
      console.log(firstTimeConverted);

      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);

      var tRemainder = diffTime % tFrequency;
      console.log(tRemainder);

      var tMinutesTillTrain = tFrequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

      var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


    })
    

