// console.log("hello");
const apikey="3617f92df8ac26780b419e4788f3a7a2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".searchicon");

async function checkweather(city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".err").style.display="block";
    }
    else{
        var data=await response.json();
    // console.log(data);
    document.querySelector(".tempcity").innerHTML=data.name;
    document.querySelector(".temptext").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".max_temp").innerHTML=Math.round(data.main.temp_max)+"°c";
    document.querySelector(".min_temp").innerHTML=Math.round(data.main.temp_min)+"°c";    
    document.querySelector(".winddd").innerHTML=Math.round(data.wind.speed)+" km/h";
    document.querySelector(".humidityyy").innerHTML=Math.round(data.main.humidity)+"%";
    if(data.main.temp>25){
        document.querySelector(".tempicon").innerHTML="☀️";
    }
    else if(data.main.temp<25 && data.main.temp>15){
        document.querySelector(".tempicon").innerHTML="⛅";
    }
    else{
        document.querySelector(".tempicon").innerHTML="☁️";
    }
    document.querySelector(".err").style.display="none";
    }
}

if (!searchbox.value) {
    checkweather("delhi");
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})