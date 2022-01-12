const firebaseConfig = {
    apiKey: "AIzaSyDirw7k_y-RDYqc99qFozBav-olgWQnBsg",
    authDomain: "lets-chat-app-aebc4.firebaseapp.com",
    databaseURL: "https://lets-chat-app-aebc4-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-aebc4",
    storageBucket: "lets-chat-app-aebc4.appspot.com",
    messagingSenderId: "661321887250",
    appId: "1:661321887250:web:8962a4bc74f4c4d8c6f2cb"
  };
  
  firebase= initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //start code
    console.log("Room Name -" + Room_names);
    row="<div class ='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#" +Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
  
   //end code
  
   });});}
  getData();
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function redirecToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}