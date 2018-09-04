var score=75;
var msg='';
function Congratulations(){
    msg+='Congratulations!';
}
if(score>=50){
    Congratulations();
    msg+='proceed to the next round.';
}
var el=document.getElementById('answer');
el.innerHTML=msg;