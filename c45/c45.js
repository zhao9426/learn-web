var elUsername=document.getElementById('username');
var elMsg=document.getElementById('feedback');
function checkUsername(minLength){
    if(elUsername.value.length<minLength){
        elMsg.innerHTML='Username must be 5 characters or more';
    }else{
        elMsg.innerHTML='';
    }
    }
    if(elUsername.addEventListener){
        elUsername.addEventListener('blur',function(){
            checkUsername(5);
        },false);
    }else{
        elUsername.attachEvent('onblur',function(){
            checkUsername(5);
        })
    }
