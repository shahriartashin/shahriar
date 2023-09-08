var date = new Date();
console.log(date);

var day= date.getDay();
var hour=date.getHours();
var minute = date.getMinutes();
var sec= date.getSeconds();


if(day==6)  //saturday //08:30-9:30//6
{
    document.querySelectorAll(".sub")[0].innerHTML="-";       
    document.querySelectorAll(".sub")[1].innerHTML="-";
    document.querySelectorAll(".sub")[2].innerHTML="-";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="-";  
    document.querySelectorAll(".sub")[5].innerHTML="CSC 434 || COMLAB 7";     
    
    document.querySelectorAll(".sec")[0].innerHTML="-";       
    document.querySelectorAll(".sec")[1].innerHTML="-";  
    document.querySelectorAll(".sec")[2].innerHTML="-";  
    document.querySelectorAll(".sec")[3].innerHTML="-"; 
    document.querySelectorAll(".sec")[4].innerHTML="-";
    document.querySelectorAll(".sec")[5].innerHTML="A";
     

    document.querySelector(".rotated-text").innerHTML="Saturday ";   
}

if(day==0)  //sunday//0
{
  
    document.querySelectorAll(".sub")[0].innerHTML="CSC 437 || Room 708";       
    document.querySelectorAll(".sub")[1].innerHTML="CSC 465 || Room 1003";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 465 || Room 1003";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="-";  
    document.querySelectorAll(".sub")[5].innerHTML="CSC 433 || Room 402";     
    
    document.querySelectorAll(".sec")[0].innerHTML="E";       
    document.querySelectorAll(".sec")[1].innerHTML="D";  
    document.querySelectorAll(".sec")[2].innerHTML="D";  
    document.querySelectorAll(".sec")[3].innerHTML=""; 
    document.querySelectorAll(".sec")[4].innerHTML="-";
    document.querySelectorAll(".sec")[5].innerHTML="A";

    document.querySelector(".rotated-text").innerHTML="Sunday";   

}
if(day==1) //monday//1
{
    document.querySelectorAll(".sub")[0].innerHTML="CSC 437 || Room 708";       
    document.querySelectorAll(".sub")[1].innerHTML="CSC 466 || ComLab 8";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 466 || ComLab 8";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="CSC 451 || Room 603";  
    document.querySelectorAll(".sub")[5].innerHTML="CSC 433 || Room 909";     
    
    document.querySelectorAll(".sec")[0].innerHTML="E";       
    document.querySelectorAll(".sec")[1].innerHTML="D";  
    document.querySelectorAll(".sec")[2].innerHTML="D";  
    document.querySelectorAll(".sec")[3].innerHTML="-"; 
    document.querySelectorAll(".sec")[4].innerHTML="C";
    document.querySelectorAll(".sec")[5].innerHTML="A";  

    document.querySelector(".rotated-text").innerHTML="Monday"; 
}

if(day==2) //tuesday//2
{
    
    document.querySelectorAll(".sub")[0].innerHTML="CSC 437 || Room 708";       
    document.querySelectorAll(".sub")[1].innerHTML="CSC 465 || Room 1003";
    document.querySelectorAll(".sub")[2].innerHTML="-";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="CSC 451 || Room 603";  
    document.querySelectorAll(".sub")[5].innerHTML="-";     
    
    document.querySelectorAll(".sec")[0].innerHTML="E";       
    document.querySelectorAll(".sec")[1].innerHTML="D";  
    document.querySelectorAll(".sec")[2].innerHTML="-";  
    document.querySelectorAll(".sec")[3].innerHTML="-"; 
    document.querySelectorAll(".sec")[4].innerHTML="C";
    document.querySelectorAll(".sec")[5].innerHTML="-";  

    document.querySelector(".rotated-text").innerHTML="Tuesday"; 
}

if(day==3) //wednesday//3
{
  
    document.querySelectorAll(".sub")[0].innerHTML="-";       
    document.querySelectorAll(".sub")[1].innerHTML="-";
    document.querySelectorAll(".sub")[2].innerHTML="-";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="CSC 451 || Room 304";  
    document.querySelectorAll(".sub")[5].innerHTML="CSC 433 || Room 416";     
    
    document.querySelectorAll(".sec")[0].innerHTML="-";       
    document.querySelectorAll(".sec")[1].innerHTML="-";  
    document.querySelectorAll(".sec")[2].innerHTML="-";  
    document.querySelectorAll(".sec")[3].innerHTML="-"; 
    document.querySelectorAll(".sec")[4].innerHTML="C";
    document.querySelectorAll(".sec")[5].innerHTML="A";

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