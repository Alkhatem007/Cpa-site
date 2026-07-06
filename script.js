let language = "en";
let currentCategory = "all";

const texts = {
  en: {
    title: "AI Store",
    subtitle: "Find the best AI tools in one place",
    search: "Search AI tools..."
  },
  ar: {
    title: "متجر الذكاء الاصطناعي",
    subtitle: "أفضل أدوات الذكاء الاصطناعي في مكان واحد",
    search: "ابحث عن أدوات..."
  }
};

const tools = [
  { name: "ChatGPT", category: "writing", desc: "AI writing assistant", link: "https://chat.openai.com" },
  { name: "Midjourney", category: "image", desc: "AI image generator", link: "https://www.midjourney.com" },
  { name: "Pika Labs", category: "video", desc: "AI video generator", link: "https://pika.art" },
  { name: "Notion AI", category: "study", desc: "AI productivity tool", link: "https://notion.so" }
];

/* LANGUAGE */
function toggleLanguage() {
  language = language === "en" ? "ar" : "en";

  document.querySelector("h1").innerText = texts[language].title;
  document.querySelector(".header p").innerText = texts[language].subtitle;
  document.getElementById("searchBox").placeholder = texts[language].search;

  document.getElementById("langBtn").innerText =
    language === "en" ? "🌐 AR" : "🌐 EN";
}

/* AUTH (placeholder) */
function login() {
  alert("Login feature coming soon 🚀");
}

function signup() {
  alert("Signup feature coming soon 🚀");
}

/* TOOLS */
function displayTools(list) {
  const container = document.getElementById("toolsContainer");
  container.innerHTML = "";

  list.forEach(tool => {
    container.innerHTML += `
      <div class="card">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <a href="${tool.link}" target="_blank">Visit</a>
      </div>
    `;
  });
}

function filterCategory(cat) {
  currentCategory = cat;

  if (cat === "all") {
    displayTools(tools);
  } else {
    displayTools(tools.filter(t => t.category === cat));
  }
}

/* SEARCH */
document.getElementById("searchBox").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(value)
  );

  displayTools(filtered);
});

/* INIT */
displayTools(tools); 
