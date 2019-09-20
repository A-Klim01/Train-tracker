

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("add-train-btn").on("click", function (e) {

    e.preventDefault();

    var name = $("#train-name-input").val().trim();
    var destin = $("#destin-input").val().trim();
    var first = $("#first-input").val().trim();
    var frequen = $("#frequen-input").val().trim();
  }
