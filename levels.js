const topics = document.querySelectorAll(".topic");
const levelsContainer = document.getElementById("levelsContainer");
const title = document.getElementById("topicTitle");

document.getElementById("menuBtn").addEventListener("click", toggleSidebar);

function toggleSidebar(){
document.querySelector(".sidebar").classList.toggle("open");
document.querySelector(".page").classList.toggle("shift");
}

const data = {
"01. HTML Basics": [
{level:"Level 1", locked:false},
{level:"Level 2", locked:false},
{level:"Level 3", locked:false},
{level:"Level 4", locked:false},
{level:"Level 5", locked:false},
{level:"Level 6", locked:true}
],

"02. CSS": [
{level:"Level 1", locked:false},
{level:"Level 2", locked:true},
{level:"Level 3", locked:true}
],

"03. JavaScript": [
{level:"Level 1", locked:false},
{level:"Level 2", locked:true}
],

"04. React": [
{level:"Level 1", locked:true}
]
};

function loadLevels(topic){

levelsContainer.innerHTML="";
title.innerText = topic;

data[topic].forEach((lvl,i)=>{

let div = document.createElement("div");
div.className = "level";

if(lvl.locked){
div.classList.add("locked");
}

div.innerHTML = `
<span>${lvl.level}</span>
<button>${lvl.locked ? "Locked 🔒" : "Start"}</button>
`;

levelsContainer.appendChild(div);

});

}

topics.forEach(topic=>{

topic.addEventListener("click",()=>{

topics.forEach(t=>t.classList.remove("active"));
topic.classList.add("active");

loadLevels(topic.innerText);

});

});

loadLevels("01. HTML Basics");



