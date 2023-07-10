// username = document.getElementById('username')
// password = document.getElementById('password')
// cpassword = document.getElementById('cpassword')
// function myFunction(username,password,cpassword) {
   
//    // document.getElementById('cont').style.boxShadow="none";
//    // document.getElementById('tab').style.boxShadow="none";
//    // document.getElementById('tab').style.border="none";
//    document.getElementById('tab').style.color="white";
//    // document.getElementById('tab').innerHTML=`<h1>THANK YOU  ${username}</h1>`;

//    // Checking the length of Username
//    if(username.length > 16 || username.length < 5){
//       document.getElementById('tab').innerHTML= "Enter Proper Username";
//    }

// }

var modal = document.getElementById('cont');
window.onclick = function(event){
   if (event.target == modal){
      modal.style.display = "none";
   }
}