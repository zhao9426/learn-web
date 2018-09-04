(function(){
    var hotel={
        name:'Park',
        roomRate:240,
        discount:15,
        offerPrice:function(){
            var offerRate=this.roomRate*((100-this.discount)/100);
            return offerRate;
        }
    }
    var hotelName,roomRate,specailRate;
    hotelName=document.getElementById('hotelName');
    roomRate=document.getElementById('roomRate');
    specailRate=document.getElementById('specialRate');
    hotelName.textContent=hotel.name;
    roomRate.textContent='$'+hotel.roomRate.toFixed(2);
    specailRate.textContent='$'+hotel.offerPrice();
    var expiryMsg;
    var today;
    var elEnds;
    function offerExpires(today){
        var weekFormToday,day,date,month,year,dayNames,monthNames;
        weekFormToday=new Date(today.getTime()+7*224*60*60*1000);
        dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthNames=['January','February','March','April','May','June','July','August','September','October','November','Demberce'];
        day=dayNames[weekFormToday.getDay()];
        date=weekFormToday.getDate();
        month=monthNames[weekFormToday.getMonth()];
        year=weekFormToday.getFullYear();
        expiryMsg="Offer expires next";
        expiryMsg+=day+'<br/>('+date+''+month+''+year+''+')';
        return expiryMsg;
    }
    today=new Date();
    elEnds=document.getElementById('offerEnds');
    elEnds.innerHTML=offerExpires(today);
    
}());