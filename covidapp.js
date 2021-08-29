



async function getData(){
    var data=  await fetch('https://api.covid19api.com/summary');
    return data.json();
}//getting api data

getData().then((data)=>{
 apiData=data;
//  console.log(apiData);
//all the target values where i have to isert dynamic data
var date=document.getElementById("date");
var time=document.getElementById("time");
var one=document.getElementById("1");
var two=document.getElementById("2");
var three=document.getElementById("3");
var four=document.getElementById("4");
var five=document.getElementById("5");
var six=document.getElementById("6");
var opt=document.getElementById("countryName");
var ele=document.getElementsByClassName("ele");
var heading=["NewConfirmed","NewDeaths","NewRecovered","TotalConfirmed","TotalDeaths","TotalRecovered"];//just made headind data for easy acess
var names=[];//putting all targent in Array for easy acess
names.push(one);
names.push(two);
names.push(three);
names.push(four);
names.push(five);
names.push(six);
var str="";
for(var i=0;i<=191;i++) // putting option values in select section of html (Country name)
{
str=str+`<option value="${i}">${data.Countries[i].Country}</option>`;
}
opt.innerHTML=str;

document.getElementById("btn").addEventListener('click',(e)=>{ // Event listener for button
    e.preventDefault();
 
    for(var i=0;i<names.length;i++) //removing data of previous choice
    {
        names[i].innerHTML="";
    }
var target = opt.value;
var second =[];
second.push(data.Countries[target].NewConfirmed);
second.push(data.Countries[target].NewDeaths);
second.push(data.Countries[target].NewRecovered);
second.push(data.Countries[target].TotalConfirmed);
second.push(data.Countries[target].TotalDeaths);
second.push(data.Countries[target].TotalRecovered);
var today=new Date();
var curr_time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"\n"+today;
// date.innerHTML=`${data.Countries[target].Date}`
time.innerHTML=curr_time;
   

for(var i=0;i<ele.length;i++) // dynamiclly putting data
{
    var p1=document.createElement('p');
    var p2=document.createElement('p');
    p1.innerHTML=`${heading[i]}`;
    p2.innerHTML=`${second[i]}`;
    names[i].appendChild(p1);
    names[i].appendChild(p2);
   


}
})















}).catch((error)=>{
    console.log(error.message);
})



// Countries: Array(192)
// [0 … 99]
// 0:
// Country: "Afghanistan"
// CountryCode: "AF"
// Date: "2021-08-11T17:20:04.446Z"
// ID: "5e004aad-fb36-4f83-ad54-c0a3a2ac8e40"
// NewConfirmed: 0
// NewDeaths: 0
// NewRecovered: 0
// Premium: {}
// Slug: "afghanistan"
// TotalConfirmed: 151013
// TotalDeaths: 6961
// TotalRecovered: 0
