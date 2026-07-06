let category = "all";

const tools = [
{ id:1,name:"ChatGPT",type:"writing",desc:"AI assistant",link:"https://chat.openai.com"},
{ id:2,name:"Midjourney",type:"image",desc:"AI images",link:"https://midjourney.com"},
{ id:3,name:"Pika",type:"video",desc:"AI video",link:"https://pika.art"}
];

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
document.body.classList.toggle("dark");
}

/* CATEGORY */
function changeCategory(v){
category = v;
render();
}

/* RENDER */
function render(){
let box = document.getElementById("grid");
let search = document.getElementById("search").value.toLowerCase();

box.innerHTML="";

tools
.filter(t=>{
let okCat = category==="all" || t.type===category;
let okSearch = t.name.toLowerCase().includes(search);
return okCat && okSearch;
})
.forEach(t=>{
box.innerHTML += `
<div class="card" onclick="openTool(${t.id})">
<h3>${t.name}</h3>
<p>${t.type}</p>
</div>`;
});
}

/* TOOL PAGE */
function openTool(id){
let t = tools.find(x=>x.id===id);

document.getElementById("pName").innerText = t.name;
document.getElementById("pDesc").innerText = t.desc;
document.getElementById("pLink").href = t.link;

document.getElementById("page").style.display="block";
}

function closePage(){
document.getElementById("page").style.display="none";
}

/* INIT */
render();
