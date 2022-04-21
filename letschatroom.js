var  firebase = {
    apiKey: "AIzaSyDbUS1Sa8EHH-46UcacPNb6Va35yuvAwCQ",
    authDomain: "lets-chat-d5f61.firebaseapp.com",
    databaseURL: "https://lets-chat-d5f61-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d5f61",
    storageBucket: "lets-chat-d5f61.appspot.com",
    messagingSenderId: "448059445335",
    appId: "1:448059445335:web:4be6b6e08ef59c14835312",
    measurementId: "G-T1HHBCDH2L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);









function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
