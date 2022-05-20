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
    document.querySelector(".rotated-text").innerHTML="Saturday ";   
}

if(day==0)  //sunday
{
    document.querySelectorAll(".sub")[0].innerHTML="MAT 257 | Room:401";       //08:30-9:30
    document.querySelectorAll(".sub")[1].innerHTML="CSC 329 | Room:801";  
    document.querySelectorAll(".sub")[2].innerHTML="CSC 384 | ComLab 3";       
    document.querySelectorAll(".sub")[3].innerHTML="CSC 384 | ComLab 3";   
    document.querySelectorAll(".sub")[4].innerHTML="CSC 247 | Room:708";    
    document.querySelector(".rotated-text").innerHTML="Sunday";   

}


if(day==1) //monday
{
    document.querySelectorAll(".sub")[1].innerHTML="CSC 329| Room:901";  
    document.querySelectorAll(".sub")[2].innerHTML="CSC 383| Room:905";  
    document.querySelector(".rotated-text").innerHTML="Monday"; 
}
if(day==2) //tuesday
{
    document.querySelectorAll(".sub")[0].innerHTML="MAT 257 | Room:401";       //08:30-9:30
     
    document.querySelectorAll(".sub")[2].innerHTML="CSC 383 | Room:604";       
    
    document.querySelectorAll(".sub")[4].innerHTML="CSC 247 | Room:401";  

    document.querySelector(".rotated-text").innerHTML="Tuesday"; 
}
if(day==3) //wednesday
{
    document.querySelectorAll(".sub")[2].innerHTML="ELP 002 | Room:110";      
    document.querySelectorAll(".sub")[3].innerHTML="ELP 002 | Room:110";

    document.querySelector(".rotated-text").innerHTML="Wednesday"; 
}
if(day==4)
{
    document.querySelector(".rotated-text").innerHTML="Thursday"; 
}

if(day==5)
{

    document.querySelector(".rotated-text").innerHTML="Friday"; 
}
