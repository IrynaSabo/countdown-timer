let avslutningsDatum = new Date("May 28, 2021 17:00:00").getTime();
console.log(avslutningsDatum);

const timer = setInterval(function(){
let idag = new Date().getTime();

let difference = avslutningsDatum - idag;
console.log(difference);
let dagar = Math.floor(difference/(1000*60*60*24));
let timmar = Math.floor(difference%(1000*60*60*24)/(1000*60*60));
let minuter = Math.floor(difference%(1000*60*60)/(1000*60));
let sekunder = Math.floor(difference%(1000*60)/1000);

document.getElementById("timer").innerHTML= dagar + " d  " + timmar + " t  " + minuter + " m  " + sekunder + " s  ";

if(difference < 0){
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Jag är examinerad nu!"
}
},1000);
