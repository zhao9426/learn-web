function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailability=function(){
        return this.rooms-this.booked;
    };
}
var quayHotel=new Hotel('Quary',40,25);
var parkHotel=new Hotel('Park',120,77);

var detail1=quayHotel.name+'rooms:';
detail1+=quayHotel.checkAvailability();

var detail2=parkHotel.name+'rooms:';
detail2+=parkHotel.checkAvailability();

var elHotel1=document.getElementById('hotel1');
elHotel1.textContent=detail1;
var elHotel2=document.getElementById('hotel2');
elHotel2.textContent=detail2;