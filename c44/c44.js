var elUsername=document.getElementById('username');
var elMsg=document.getElementById('feedback');
function checkUsername(minLength){
    if(elUsername.Value.length<minLength){
        elMsg.textContent='Username must be'+ minLength+'charaxters or more';
    }else{
        elMsg.innerHTML='';
    }
}
elUsername.addEventListener('blur',function(){
    checkUsername(5);
},false)