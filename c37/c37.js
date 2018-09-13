var el=document.getElementsByClassName('hot');
for(var i = 0, len = el.length; i < len; i++) {
    if(i%2==0) {
        el[i].className = 'hot cool'
    }
}