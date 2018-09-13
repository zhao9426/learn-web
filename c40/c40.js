function checkUsername(){
    var elMsg=document.getElementById('freedback');
    var elUsername=document.getElementById("username");
    if(elUsername.value.length<5){
        elMsg.textContent='Username must be 5 characters or more';
        console.log(elMsg.textContent)
    }else{
        elMsg.textContent=''
    }
}
var elUsername=document.getElementById('username');
//elUsername.onblur=checkUsername;
elUsername.addEventListener('blur',checkUsername,false);