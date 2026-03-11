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
{level:"Level 1"},
{level:"Level 2"},
{level:"Level 3"},
{level:"Level 4"},
{level:"Level 5"},
{level:"Level 6"}
],

"02. CSS": [
{level:"Level 1"},
{level:"Level 2"},
{level:"Level 3"}
],

"03. JavaScript": [
{level:"Level 1"},
{level:"Level 2"}
],

"04. React": [
{level:"Level 1"}
]
};

function loadLevels(topic){

levelsContainer.innerHTML="";
title.innerText = topic;

data[topic].forEach((lvl,i)=>{

let div = document.createElement("div");
div.className = "level";


div.innerHTML = `
<span>${lvl.level}</span>
<button onclick="goToLevelsPage()">${"Start"}</button>
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

function goToLevelsPage(){
    window.location.href ="first.html";
}

loadLevels("01. HTML Basics");



