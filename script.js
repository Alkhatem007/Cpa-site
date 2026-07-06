let lang = "en";
const OFFER_URL = "https://unlockplay.online/cl/i/4ordr1";

const t = {
  en: {
    title: "AI Store", subtitle: "Find the best AI tools in one place", search: "Search AI tools...", login: "Login / Sign Up", logout: "Logout", welcome: "Welcome", modalTitle: "Account Access", modalText: "Create your account to unlock AI tools experience.", btnFacebook: "Continue with Facebook", dividerText: "Or use standard access", rememberLabel: "Remember me on this device", continue: "Continue", cancel: "Cancel"
  },
  ar: {
    title: "متجر الذكاء الاصطناعي", subtitle: "أفضل أدوات الذكاء الاصطناعي في مكان واحد", search: "ابحث عن أدوات...", login: "تسجيل / دخول", logout: "خروج", welcome: "مرحباً بك", modalTitle: "الدخول للحساب", modalText: "أنشئ حسابك لتجربة أدوات الذكاء الاصطناعي كاملة.", btnFacebook: "المتابعة باستخدام فيسبوك", dividerText: "أو الدخول العادي", rememberLabel: "تذكر حسابي على هذا الجهاز", continue: "متابعة", cancel: "إلغاء"
  }
};

const tools = [
  { name: "ChatGPT", desc: { en: "AI writing and conversational tool", ar: "أداة ذكية للكتابة والمحادثة وتحليل النصوص" } },
  { name: "Midjourney", desc: { en: "Advanced AI image generation tool", ar: "أداة متطورة لتوليد الصور من النصوص" } },
  { name: "Pika", desc: { en: "AI-powered video creation platform", ar: "منصة ممتازة لصناعة وتوليد الفيديو بالذكاء الاصطناعي" } }
];

function changeLanguage() {
  const selectElement = document.getElementById("langSelect");
  lang = selectElement ? selectElement.value : "en";
  const cur = t[lang] || t["en"];

  document.getElementById("title").innerText = cur.title;
  document.getElementById("subtitle").innerText = cur.subtitle;
  document.getElementById("searchBox").placeholder = cur.search;
  document.getElementById("modalTitle").innerText = cur.modalTitle;
  document.getElementById("modalText").innerText = cur.modalText;
  document.getElementById("btnFacebook").innerText = cur.btnFacebook;
  document.getElementById("dividerText").innerText = cur.dividerText;
  document.getElementById("rememberLabel").innerText = cur.rememberLabel;
  document.querySelector(".yes").innerText = cur.continue;
  document.querySelector(".no").innerText = cur.cancel;

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }
  updateAuthButtonUI();
  loadTools(document.getElementById("searchBox").value);
}

function updateAuthButtonUI() {
  const authBtn = document.querySelector(".auth-btn");
  const authText = document.getElementById("authText");
  const isLogged = localStorage.getItem("ai_store_logged");
  const userProvider = localStorage.getItem("ai_store_provider") || "User";
  const cur = t[lang] || t["en"];

  if (isLogged === "true") {
    authText.innerText = `${cur.welcome}, ${userProvider} ✓`;
    authBtn.style.background = "#10b981"; 
    authBtn.onclick = handleLogout;
  } else {
    authText.innerText = cur.login;
    authBtn.style.background = "#2563eb"; 
    authBtn.onclick = openAuth;
  }
}

function handleLogout() {
  localStorage.removeItem("ai_store_logged");
  localStorage.removeItem("ai_store_provider");
  updateAuthButtonUI();
}

/* 🌟 الدالة الحقيقية والرسمية من جوجل عند اختيار إيميل الجهاز الفعلي 🌟 */
function handleCredentialResponse(response) {
  localStorage.setItem("ai_store_logged", "true");
  localStorage.setItem("ai_store_provider", "Google");
  
  updateAuthButtonUI();
  closeAuth();

  // التحويل التلقائي والفوري للرابط بجد وبدون أي رسائل منبثقة مزعجة!
  window.location.href = OFFER_URL;
}

function socialLogin(provider) {
  localStorage.setItem("ai_store_logged", "true");
  localStorage.setItem("ai_store_provider", provider);
  closeAuth();
  updateAuthButtonUI();
  
  window.location.href = OFFER_URL;
}

function fakeSignup() {
  socialLogin("User");
}

function loadTools(filterText = "") {
  const box = document.getElementById("toolsContainer");
  if (!box) return;
  box.innerHTML = "";
  const query = filterText.toLowerCase().trim();

  tools.forEach(tl => {
    const description = tl.desc[lang] || tl.desc["en"];
    if (tl.name.toLowerCase().includes(query) || description.toLowerCase().includes(query)) {
      box.innerHTML += `
        <div class="card" onclick="openAuth()">
          <h3>${tl.name}</h3>
          <p>${description}</p>
        </div>
      `;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("input", (e) => loadTools(e.target.value));
  }
  changeLanguage();
});

function openAuth() { document.getElementById("authModal").style.display = "flex"; }
function closeAuth() { document.getElementById("authModal").style.display = "none"; }
window.onclick = function(e) { if (e.target.id === "authModal") { closeAuth(); } };
