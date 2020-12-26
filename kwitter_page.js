var firebaseConfig = {
      apiKey: "AIzaSyDNUTN7uYZjHznD5kgYhYQJmQZ3hXmxgYE",
      authDomain: "class-test-526f7.firebaseapp.com",
      databaseURL: "https://class-test-526f7-default-rtdb.firebaseio.com",
      projectId: "class-test-526f7",
      storageBucket: "class-test-526f7.appspot.com",
      messagingSenderId: "463618147966",
      appId: "1:463618147966:web:789813ec4956eabc9eba2f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
