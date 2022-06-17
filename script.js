console.log('Js is running');
document.getElementById('del').addEventListener('click',()=>{
    window.location="index.html";
});
const namee=document.getElementById('name');
const tempp=document.getElementById('temp');
const wind=document.getElementById('wind');
const hum=document.getElementById('hum');
const cloud=document.getElementById('cloud');
const img=document.getElementById('img');
const sup=document.getElementById('sup');
const code=document.getElementById('code');
const btn=document.getElementById('btn');

let apikey = "1257d86d688b614612edfd576d0a2a1c";
let city="Howrah";
// city = prompt('Enter City Name');
btn.addEventListener('click',()=>{
    city=document.getElementById('search').value;
    document.getElementById('modal').style.display="none";
    document.getElementById('container').style.display="flex";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" + apikey)
    .then((res) => {
        if(!res.ok)
        {
            alert('No City Found');
        }
        return res.json();
    })
    .then((data) => {console.log(data),showDATA(data)});
});

function showDATA(data)
{
    const {name}=data;
    const {temp}=data.main;
    const {speed}=data.wind;
    const {feels_like,humidity}=data.main;
    const {icon,main}=data.weather[0];
    const {country}=data.sys;
    namee.innerHTML=name;
    tempp.innerText=temp+"°";
    wind.innerHTML=speed+" Km/h";
    hum.innerText=humidity+"°";
    cloud.innerHTML=main;
    img.src="https://openweathermap.org/img/wn/" + icon + ".png";
    sup.innerHTML="&nbsp"+feels_like;
    code.innerText="Country Code - [ "+country+" ]";
}