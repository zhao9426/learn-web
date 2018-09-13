var elUsername=document.getElementById('username');
var elMsg=docuemnt.getElementById('password');
function checkUsername(minLength){
    if(elUsername.nodeValue.length<minLength){
        elMsg.textContent='Username must be'+minLength+'characters or more';
    }else{
        elMsg.innerHTML='';
    }
}
elUsername.addEventListener('blur',function(){
    checkUsername();

},false);