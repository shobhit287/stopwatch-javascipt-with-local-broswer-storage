let count_sec=0,count_min=0,count_hour=0;
let id;
const sec=document.getElementById("seconds");
const min=document.getElementById("minutes");
const hour=document.getElementById("hours");
const btn=document.getElementById("start");
const btn_reset=document.getElementById("reset");

count_sec=localStorage.getItem("second");
count_min=localStorage.getItem("minute");
count_hour=localStorage.getItem("hour");

if(count_sec){
if(count_sec<10){
    sec.innerText="0"+count_sec;
    }
    else if(count_sec>=10){
        sec.innerText=count_sec;
    }}

  if(count_min){
    if(count_min<10){
        min.innerText="0"+count_min;
    }
    else if(count_min>=10)
    {
        min.innerText=count_min; 
    }}
    if(count_hour){
    if(count_hour<10){
        hour.innerText="0"+count_hour;
        }
        else if(count_hour>=10)
        {
            hour.innerText=count_hour; 
        }
    }


btn.addEventListener("click",watch);
function watch() {
    
    if(btn.innerText=="STOP")
    {
    clearInterval(id);
    btn.innerText="START";
    }
    else{
id=setInterval(()=>{
count_sec++;
localStorage.setItem("second",count_sec);
if(count_sec<10){
sec.innerText="0"+count_sec;
}
else if(count_sec>=10){
    sec.innerText=count_sec;
}

if(count_sec>59){
    count_sec=0;
    sec.innerText="0"+count_sec;
    count_min++;
    localStorage.setItem("minute",count_min);
    if(count_min<10){
        min.innerText="0"+count_min;
    }
    else if(count_min>=10)
    {
        min.innerText=count_min; 
    }

}

if(count_min>59)
{
    count_min=0;
    hour.innerText="0"+count_min;
    count_hour++;
    localStorage.setItem("hour",count_hour);
    if(count_hour<10){
    hour.innerText="0"+count_hour;
    }
    else if(count_hour>=10)
    {
        hour.innerText=count_hour; 
    }
}
},1000);
 btn.innerText="STOP";
}}


btn_reset.addEventListener("click",()=>{
    clearInterval(id);
localStorage.clear();
hour.innerText="00"; 
min.innerText="00"; 
sec.innerText="00";
count_sec=0,count_hour=0,count_min=0;
});
