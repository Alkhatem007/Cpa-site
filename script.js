let lang = "en";
const OFFER_URL = "https://unlockplay.online/cl/i/4ordr1";

/* TEXTS - تم تحديث القاموس ليشمل أزرار التواصل الاجتماعي */
const t = {
  en: {
    title: "AI Store",
    subtitle: "Find the best AI tools in one place",
    search: "Search AI tools...",
    login: "Login / Sign Up",
    logout: "Logout",
    welcome: "Welcome",
    modalTitle: "Account Access",
    modalText: "Create your account to unlock AI tools experience.",
    btnGoogle: "Continue with Google",
    btnFacebook: "Continue with Facebook",
    dividerText: "Or use standard access",
    rememberLabel: "Remember me on this device",
    continue: "Continue",
    cancel: "Cancel"
  },
  ar: {
    title: "متجر الذكاء الاصطناعي",
    subtitle: "أفضل أدوات الذكاء الاصطناعي في مكان واحد",
    search: "ابحث عن أدوات...",
    login: "تسجيل / دخول",
    logout: "خروج",
    welcome: "مرحباً بك",
    modalTitle: "الدخول للحساب",
    modalText: "أنشئ حسابك لتجربة أدوات الذكاء الاصطناعي كاملة.",
    btnGoogle: "المتابعة باستخدام جوجل",
    btnFacebook: "المتابعة باستخدام فيسبوك",
    dividerText: "أو الدخول العادي",
    rememberLabel: "تذكر حسابي على هذا الجهاز",
    continue: "متابعة",
    cancel: "إلغاء"
  },
  fr: {
    title: "AI Store", subtitle: "Meilleurs outils IA", search: "Rechercher...", login: "Connexion", logout: "Déconnexion", welcome: "Bienvenue", modalTitle: "Accès", modalText: "Créer un compte pour continuer", btnGoogle: "Continuer avec Google", btnFacebook: "Continuer avec Facebook", dividerText: "Ou", rememberLabel: "Se souvenir de moi", continue: "Continuer", cancel: "Annuler"
  },
  es: {
    title: "AI Store", subtitle: "Mejores herramientas IA", search: "Buscar...", login: "Entrar", logout: "Salir", welcome: "Bienvenido", modalTitle: "Acceso", modalText: "Crea tu cuenta para continuar", btnGoogle: "Continuar con Google", btnFacebook: "Continuar con Facebook", dividerText: "O", rememberLabel: "Recordarme", continue: "Continuar", cancel: "Cancelar"
  },
  de: { title: "AI Store", subtitle: "Die besten KI-Tools", search: "Suchen...", login: "Einloggen", logout: "Ausloggen", welcome: "Willkommen", modalTitle: "Konto-Zugriff", modalText: "Konto erstellen", btnGoogle: "Mit Google fortfahren", btnFacebook: "Mit Facebook fortfahren", dividerText: "Oder", rememberLabel: "Angemeldet bleiben", continue: "Weiter", cancel: "Abbrechen" },
  pt: { title: "AI Store", subtitle: "As melhores ferramentas", search: "Buscar...", login: "Entrar", logout: "Sair", welcome: "Bem-vindo", modalTitle: "Acesso", modalText: "Crie sua conta", btnGoogle: "Continuar com Google", btnFacebook: "Continuar com Facebook", dividerText: "Ou", rememberLabel: "Lembrar de mim", continue: "Continuar", cancel: "Cancelar" },
  hi: { title: "एआई स्टोर", subtitle: "सर्वश्रेष्ठ एआई टूल्स", search: "خوزें...", login: "लॉगिन", logout: "लॉगआउट", welcome: "स्वागत हे", modalTitle: "खाता पहुंच", modalText: "आगे बढ़ने के लिए खाता बनाएं", btnGoogle: "Google के साथ जारी रखें", btnFacebook: "Facebook के साथ जारी रखें", dividerText: "अथवा", rememberLabel: "मुझे याद रखें", continue: "जारी रखें", cancel: "रद्द करें" }
};

/* SAMPLE DATA */
const tools = [
  { name: "ChatGPT", desc: { en: "AI writing and conversational tool", ar: "أداة ذكية للكتابة والمحادثة وتحليل النصوص" } },
  { name: "Midjourney", desc: { en: "Advanced AI image generation tool", ar: "أداة متطورة لتوليد الصور من النصوص" } },
  { name: "Pika", desc: { en: "AI-powered video creation platform", ar: "منصة ممتازة لصناعة وتوليد الفيديو بالذكاء الاصطناعي" } }
];

/* CHNAGE & INITIALIZE LANGUAGE */
function changeLanguage() {
  const selectElement = document.getElementById("langSelect");
  lang = selectElement ? selectElement.value : "en";
  const cur = t[lang] || t["en"];

  // تحديث النصوص الثابتة
  document.getElementById("title").innerText = cur.title;
  document.getElementById("subtitle").innerText = cur.subtitle;
  document.getElementById("searchBox").placeholder = cur.search;
  document.getElementById("modalTitle").innerText = cur.modalTitle;
  document.getElementById("modalText").innerText = cur.modalText;
  document.getElementById("btnGoogle").innerText = cur.btnGoogle;
  document.getElementById("btnFacebook").innerText = cur.btnFacebook;
  document.getElementById("dividerText").innerText = cur.dividerText;
  document.getElementById("rememberLabel").innerText = cur.rememberLabel;
  document.querySelector(".yes").innerText = cur.continue;
  document.querySelector(".no").innerText = cur.cancel;

  // قلب الاتجاه للعربية
  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }

  // تحديث حالة زر الدخول/الترحيب العلوي بناءً على اللغة المحددة
  updateAuthButtonUI();

  const searchQuery = document.getElementById("searchBox").value;
  loadTools(searchQuery);
}

/* إدارة حالة تسجيل الدخول تلقائياً وباحترافية */
function updateAuthButtonUI() {
  const authBtn = document.querySelector(".auth-btn");
  const authText = document.getElementById("authText");
  const isLogged = localStorage.getItem("ai_store_logged");
  const userProvider = localStorage.getItem("ai_store_provider") || "User";
  const cur = t[lang] || t["en"];

  if (isLogged === "true") {
    // لو مسجل دخول يظهر اسمه أو الخدمة المختار ويتحول لزر تسجيل خروج عند الضغط
    authText.innerText = `${cur.welcome}, ${userProvider} ✓`;
    authBtn.style.background = "#10b981"; // يتحول للأخضر دلالة على النجاح
    authBtn.onclick = handleLogout;
  } else {
    authText.innerText = cur.login;
    authBtn.style.background = "#2563eb"; // يرجع للون الأزرق العادي
    authBtn.onclick = openAuth;
  }
}

/* دالة تسجيل الخروج في حال أراد المستخدم تبديل الحساب */
function handleLogout() {
  localStorage.removeItem("ai_store_logged");
  localStorage.removeItem("ai_store_provider");
  updateAuthButtonUI();
}

/* دالة تسجيل الدخول عبر شبكات التواصل الاجتماعي والتحويل للعرض */
function socialLogin(provider) {
  const isRememberMeChecked = document.getElementById("rememberMe").checked;
  
  if (isRememberMeChecked) {
    // حفظ الجلسة في المتصفح ليدخل تلقائياً المرة القادمة
    localStorage.setItem("ai_store_logged", "true");
    localStorage.setItem("ai_store_provider", provider);
  }

  // إغلاق المودال والتحويل الفوري في نفس التبويب لرابط العرض الخاص بك
  closeAuth();
  window.location.href = OFFER_URL;
}

/* الدالة الافتراضية للزر الأخضر العادي */
function fakeSignup() {
  socialLogin("User");
}

/* LOAD TOOLS WITH LIVE FILTER */
function loadTools(filterText = "") {
  const box = document.getElementById("toolsContainer");
  if (!box) return;
  box.innerHTML = "";
  const query = filterText.toLowerCase().trim();

  tools.forEach(tl => {
    const description = tl.desc[lang] || tl.desc["en"];
    if (tl.name.toLowerCase().includes(query) || description.toLowerCase().includes(query)) {
      box.innerHTML += `
        <div class="card">
          <h3>${tl.name}</h3>
          <p>${description}</p>
        </div>
      `;
    }
  });
}

/* EVENT LISTENERS */
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("input", (e) => {
      loadTools(e.target.value);
    });
  }
  changeLanguage();
});

/* MODAL CONTROL */
function openAuth() {
  document.getElementById("authModal").style.display = "flex";
}
function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}
window.onclick = function(e) {
  if (e.target.id === "authModal") { closeAuth(); }
};
