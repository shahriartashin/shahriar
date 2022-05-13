var date = new Date();
console.log(date);

var day= date.getDay();
var hour=date.getHours();
var minute = date.getMinutes();
var sec= date.getSeconds();


if(day==6)  //saturday 
{
    document.querySelectorAll(".sub")[0].innerHTML="MAT 257 | Room:401";       //08:30-9:30
    document.querySelectorAll(".sub")[1].innerHTML="CSC 329 | Room:804";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 383 | Room:612";       
    document.querySelectorAll(".sub")[4].innerHTML="CSC 247 | Room:506";       
}

if(day==0)  //sunday
{
    document.querySelectorAll(".sub")[0].innerHTML="MAT 257 | Room:401";       //08:30-9:30
    document.querySelectorAll(".sub")[1].innerHTML="CSC 329 | Room:801";  
    document.querySelectorAll(".sub")[2].innerHTML="CSC 384 | ComLab 3";       
    document.querySelectorAll(".sub")[3].innerHTML="CSC 384 | ComLab 3";   
    document.querySelectorAll(".sub")[4].innerHTML="CSC 247 | Room:708";       

}


if(day==1) //monday
{
    document.querySelectorAll(".sub")[1].innerHTML="CSC 329| Room:901";  
    document.querySelectorAll(".sub")[2].innerHTML="CSC 383| Room:905";  
}
if(day==2) //tuesday
{
    document.querySelectorAll(".sub")[0].innerHTML="MAT 257 | Room:401";       //08:30-9:30
     
    document.querySelectorAll(".sub")[2].innerHTML="CSC 383 | Room:604";       
    
    document.querySelectorAll(".sub")[4].innerHTML="CSC 247 | Room:401";  
}
if(day==3) //wednesday
{
    document.querySelectorAll(".sub")[2].innerHTML="ELP 002 | Room:110";      
    document.querySelectorAll(".sub")[3].innerHTML="ELP 002 | Room:110";
}