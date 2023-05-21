var date = new Date();
console.log(date);

var day= date.getDay();
var hour=date.getHours();
var minute = date.getMinutes();
var sec= date.getSeconds();


if(day==6)  //saturday //08:30-9:30//6
{
    document.querySelectorAll(".sub")[0].innerHTML="CSC 455 ...... #611";       
    document.querySelectorAll(".sub")[1].innerHTML="STA 240 ...... #621";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 440 ... #ComLab3";       
    document.querySelectorAll(".sub")[3].innerHTML="CSC 440 ... #ComLab3";
    document.querySelectorAll(".sub")[4].innerHTML="ART 203 ...... #402";  
    document.querySelectorAll(".sub")[5].innerHTML="BUS 201 ...... #310";     
    
    document.querySelectorAll(".sec")[0].innerHTML="A";       
    document.querySelectorAll(".sec")[1].innerHTML="B";  
    document.querySelectorAll(".sec")[2].innerHTML="A";  
    document.querySelectorAll(".sec")[3].innerHTML="A"; 
    document.querySelectorAll(".sec")[4].innerHTML="E";
    document.querySelectorAll(".sec")[5].innerHTML="D";
     

    document.querySelector(".rotated-text").innerHTML="Saturday ";   
}

if(day==0)  //sunday//0
{
  
    document.querySelectorAll(".sub")[0].innerHTML="CSC 455 ...... #504";       
    document.querySelectorAll(".sub")[1].innerHTML="-";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 439 ...... #805";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="-";  
    document.querySelectorAll(".sub")[5].innerHTML="BUS 201 ...... #307";     
    
    document.querySelectorAll(".sec")[0].innerHTML="A";       
    document.querySelectorAll(".sec")[1].innerHTML="-";  
    document.querySelectorAll(".sec")[2].innerHTML="A";  
    document.querySelectorAll(".sec")[3].innerHTML="-"; 
    document.querySelectorAll(".sec")[4].innerHTML="-";
    document.querySelectorAll(".sec")[5].innerHTML="D"; 

    document.querySelector(".rotated-text").innerHTML="Sunday";   

}
if(day==1) //monday//1
{
    document.querySelectorAll(".sub")[0].innerHTML="CSC 455 ...... #611";       
    document.querySelectorAll(".sub")[1].innerHTML="STA 240 ...... #621";
    document.querySelectorAll(".sub")[2].innerHTML="CSC 439 ...... #621";       
    document.querySelectorAll(".sub")[3].innerHTML="-";
    document.querySelectorAll(".sub")[4].innerHTML="-";  
    document.querySelectorAll(".sub")[5].innerHTML="BUS 201 ...... #304";     
    
    document.querySelectorAll(".sec")[0].innerHTML="A";       
    document.querySelectorAll(".sec")[1].innerHTML="B";  
    document.querySelectorAll(".sec")[2].innerHTML="A";  
    document.querySelectorAll(".sec")[3].innerHTML="-"; 
    document.querySelectorAll(".sec")[4].innerHTML="-";
    document.querySelectorAll(".sec")[5].innerHTML="D";  

    document.querySelector(".rotated-text").innerHTML="Monday"; 
}

if(day==2) //tuesday//2
{
    
    document.querySelectorAll(".sub")[1].innerHTML="STA 240 ...... #521";  
    document.querySelectorAll(".sub")[2].innerHTML="CSC 439 ...... #913"; 
    

    document.querySelectorAll(".sec")[1].innerHTML="B";  
    document.querySelectorAll(".sec")[2].innerHTML="A";  

    document.querySelector(".rotated-text").innerHTML="Tuesday"; 
}

if(day==3) //wednesday//3
{
  

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
