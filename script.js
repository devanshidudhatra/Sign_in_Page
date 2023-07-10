username = document.getElementById('username')
password = document.getElementById('password')
cpassword = document.getElementById('cpassword')
function myFunction(username,password,cpassword) {
   document.getElementById('end').style.backgroundColor="black";
   document.getElementById('cont').style.backgroundColor="black";
   document.getElementById('cont').style.boxShadow="none";
   document.getElementById('tab').style.background="black";
   document.getElementById('tab').style.boxShadow="none";
   document.getElementById('tab').style.border="none";
   document.getElementById('tab').style.color="white";
   document.getElementById('tab').innerHTML=`<h1>THANK YOU  ${username}</h1>`;
}