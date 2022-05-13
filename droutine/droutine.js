var date = new Date();
console.log(date);

var day= date.getDay();
var hour=date.getHours();
var minute = date.getMinutes();
var sec= date.getSeconds();



if(day==1) //monday
{
    document.querySelector(".day").innerHTML="Monday";
    document.getElementsByTagName("td")[1].innerHTML="MAT 247 |Room:604";       //10.40
    document.getElementsByTagName("td")[2].innerHTML="CSC 391 |Room:307";      //11.45   

}
if(day==2) //tuesday
{
    document.querySelector(".day").innerHTML="Tuesday";
    document.getElementsByTagName("td")[1].innerHTML="MAT 247 |Room:604";  
    document.getElementsByTagName("td")[2].innerHTML="CSC 391 |Room:401";       //10.40
    document.getElementsByTagName("td")[3].innerHTML="CSC 197 |Room:608";      //11.45  
}
if(day==3) //wednessday
{
    document.querySelector(".day").innerHTML="Wednesday";
    document.getElementsByTagName("td")[1].innerHTML="MAT 247 |Room:604";       //10.40
    document.getElementsByTagName("td")[2].innerHTML="CSC 391 |Room:401";      //11.45  
    document.getElementsByTagName("td")[3].innerHTML="CSC 197 |Room:608";
}
if(day==7)  //sunday
{
    document.querySelector(".day").innerHTML="Sunday";
    document.getElementsByTagName("td")[2].innerHTML="CSC 391 |Room:502";       //10.40
    document.getElementsByTagName("td")[3].innerHTML="CSC 197 |Room:501";      //11.45  

}



if(day==4)
{
    document.write("<center>Hey Humaira today is holyday or reading day , You may read or enjoy or you can talk to Tashin<center>");
}