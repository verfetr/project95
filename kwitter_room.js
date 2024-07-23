var firebaseConfig = {
    apiKey: "AIzaSyBsVpofbvi4nSAdIcnidjPFmxl5bx6EpkU",
    authDomain: "kwitter-9014d.firebaseapp.com",
    databaseURL: "https://kwitter-9014d-default-rtdb.firebaseio.com",
    projectId: "kwitter-9014d",
    storageBucket: "kwitter-9014d.appspot.com",
    messagingSenderId: "118667127286",
    appId: "1:118667127286:web:f32b95a84136c75cf0bfd7"
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
   } );
 
 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name) 
{
   console.log(name)
   
   localStorage.setItem("room_name", name);

   window.location = "kwitter_page.html";
}