const offerLink = "https://unlockplay.online/cl/i/4ordr1";

const translations = {
  en: { title: "AI Store", subtitle: "Find the best AI tools" },
  ar: { title: "متجر الذكاء الاصطناعي", subtitle: "أفضل أدوات الذكاء الاصطناعي" },
  fr: { title: "AI Store", subtitle: "Meilleurs outils IA" },
  es: { title: "AI Store", subtitle: "Mejores herramientas IA" },
  de: { title: "AI Store", subtitle: "Beste KI Tools" },
  pt: { title: "AI Store", subtitle: "Melhores ferramentas IA" },
  hi: { title: "AI Store", subtitle: "सर्वश्रेष्ठ AI टूल्स" }
};

/* LANGUAGE */
function changeLanguage() {
  const lang = document.getElementById("langSelect").value;

  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
}

/* MODAL */
function openAuth() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}

/* 🔥 FIXED REDIRECT (100% WORKING) */
function goOffer() {
  window.location.href = offerLink;
}

/* CLOSE MODAL ON OUTSIDE CLICK */
window.onclick = function(e) {
  const modal = document.getElementById("authModal");
  if (e.target === modal) {
    closeAuth();
  }
};

/* SAMPLE TOOLS */
const tools = [
  { name: "ChatGPT", desc: "AI writing tool" },
  { name: "Midjourney", desc: "AI image tool" },
  { name: "Pika", desc: "AI video tool" }
];

function loadTools() {
  const container = document.getElementById("toolsContainer");
  container.innerHTML = "";

  tools.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
      </div>
    `;
  });
}

loadTools();
