let lang = "en";

/* TEXTS */
const t = {
  en: {
    title: "AI Store",
    subtitle: "Find the best AI tools in one place",
    search: "Search AI tools...",
    login: "Login / Sign Up",
    modalTitle: "Account Access",
    modalText: "Create your account to unlock AI tools experience.",
    continue: "Continue",
    cancel: "Cancel"
  },
  ar: {
    title: "متجر الذكاء الاصطناعي",
    subtitle: "أفضل أدوات الذكاء الاصطناعي في مكان واحد",
    search: "ابحث عن أدوات...",
    login: "تسجيل / دخول",
    modalTitle: "الدخول للحساب",
    modalText: "أنشئ حسابك لتجربة أدوات الذكاء الاصطناعي",
    continue: "متابعة",
    cancel: "إلغاء"
  },
  fr: {
    title: "AI Store",
    subtitle: "Meilleurs outils IA",
    search: "Rechercher...",
    login: "Connexion",
    modalTitle: "Accès",
    modalText: "Créer un compte pour continuer",
    continue: "Continuer",
    cancel: "Annuler"
  },
  es: {
    title: "AI Store",
    subtitle: "Mejores herramientas IA",
    search: "Buscar...",
    login: "Entrar",
    modalTitle: "Acceso",
    modalText: "Crea tu cuenta para continuar",
    continue: "Continuar",
    cancel: "Cancelar"
  }
};

/* LANGUAGE FIX (FULL PAGE CHANGE) */
function changeLanguage() {
  lang = document.getElementById("langSelect").value;

  document.getElementById("title").innerText = t[lang].title;
  document.getElementById("subtitle").innerText = t[lang].subtitle;
  document.getElementById("searchBox").placeholder = t[lang].search;
  document.getElementById("authText").innerText = t[lang].login;

  document.getElementById("modalTitle").innerText = t[lang].modalTitle;
  document.getElementById("modalText").innerText = t[lang].modalText;

  document.querySelector(".yes").innerText = t[lang].continue;
  document.querySelector(".no").innerText = t[lang].cancel;
}

/* AUTH */
function openAuth() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}

/* ❌ NO REDIRECT (as you requested) */
function fakeSignup() {
  closeAuth();
  alert(lang === "ar" ? "تم إنشاء الحساب بنجاح 🎉" : "Account created successfully 🎉");
}

/* CLOSE OUTSIDE CLICK */
window.onclick = function(e) {
  if (e.target.id === "authModal") {
    closeAuth();
  }
};

/* SAMPLE DATA */
const tools = [
  { name: "ChatGPT", desc: "AI writing tool" },
  { name: "Midjourney", desc: "AI image tool" },
  { name: "Pika", desc: "AI video tool" }
];

function loadTools() {
  const box = document.getElementById("toolsContainer");
  box.innerHTML = "";

  tools.forEach(tl => {
    box.innerHTML += `
      <div class="card">
        <h3>${tl.name}</h3>
        <p>${tl.desc}</p>
      </div>
    `;
  });
}

loadTools();

/* INIT LANGUAGE */
changeLanguage();
