function saveUser(){
localStorage.setItem("username", username.value);
localStorage.setItem("age", age.value);
localStorage.setItem("place", place.value);
window.location.href="business.html";
}

function selectBusiness(business){
localStorage.setItem("business", business);
window.location.href="features.html";
}

function goPage(page){
window.location.href=page;
}

function goBack(page){
window.location.href=page;
}

window.onload=function(){

if(document.getElementById("data")){
data.innerHTML=
"<b>Name:</b> "+localStorage.getItem("username")+"<br>"+
"<b>Age:</b> "+localStorage.getItem("age")+"<br>"+
"<b>Place:</b> "+localStorage.getItem("place")+"<br>"+
"<b>Business:</b> "+localStorage.getItem("business");
}

if(document.getElementById("ideaResult")){
ideaResult.innerHTML=
"AI recommends launching a scalable "+
localStorage.getItem("business")+
" model with strong digital branding and local marketing.";
}

if(document.getElementById("schemeResult")){
if(localStorage.getItem("place")=="Rural"){
schemeResult.innerHTML="Recommended Scheme: Pradhan Mantri Mudra Yojana";
}else{
schemeResult.innerHTML="Recommended Scheme: Stand-Up India Scheme";
}
}

}

function calculateProfit(){
let investment=parseFloat(document.getElementById("investment").value);
let revenue=parseFloat(document.getElementById("revenue").value);
let profit=revenue-investment;

profitResult.innerHTML="Estimated Monthly Profit: ₹"+profit;

new Chart(document.getElementById("profitChart"),{
type:"line",
data:{
labels:["Month1","Month2","Month3"],
datasets:[{
label:"Projected Growth",
data:[profit,profit*1.5,profit*2]
}]
}
});
}

function calculateScore(){
let total=parseInt(conf.value)+parseInt(risk.value)+parseInt(commit.value);
let score=(total/15)*100;

scoreResult.innerHTML="Your Readiness Score: "+score.toFixed(0)+"%";
document.getElementById("progressBar").style.width=score+"%";
}