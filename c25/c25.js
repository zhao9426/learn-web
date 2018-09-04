var today =new Date();
var year=today.getFullYear();
var est=new Date('APR 16,1996 15:45:55');
var difference=today.getTime()-est.getTime();
difference=(difference/3155690000);
var elMsg=document.getElementById('message');
elMsg.textContent=Math.floor(difference)+'year of online travel advice';