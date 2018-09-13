function getTarget(e){
if(!e){
    e=window.event;
}
return e.target||e.srcElement;
}
function itemDemo(e){
   var target,elParent,elGrandparent;
   target=getTarget(e);
   elParent=target.parentNode;
   elGrandparent=target.parentNode.parentNode;
   elGrandparent.removeChild(elParent);
   if(e.preventDefault){
       e.preventDefault();
   } else{
       e.returnValue=false;
   }
}
var el=document.getElementById('shoppingList');
if(el.addEventListener){
    el.addEventListener('click',function(e){
        itemDemo(e);
    },false);
}else{
    el.attachEvent('onclick',function(e){
        itemDemo(e);
    })
}