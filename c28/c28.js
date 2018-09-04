var score1=90;
var score2=95;
var hightScore1=75;
var hightScore2=95;
var comparison=(score1+score2)>(hightScore1+hightScore2);
var el=document.getElementById('answer');
el.textContent='New hight score:'+comparison;