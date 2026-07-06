let lang = "en";
const OFFER_URL = "https://unlockplay.online/cl/i/4ordr1";

/* TEXTS */
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
    cancel: "Cancel",
    // نصوص نافذة جوجل الجديدة
    gChoose: "Choose an account",
    gSub: "to continue to AI Store",
    gName1: "Active Google Session",
    gName2: "Backup Account",
    gUseOther: "Use another account",
    gLoading: "Connecting to Google services...",
    gFooter: "To continue, Google will share your name, email address, language preference, and profile picture with AI Store."
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
    cancel: "إلغاء",
    // نصوص نافذة جوجل الجديدة
    gChoose: "اختر حساباً",
    gSub: "للمتابعة إلى متجر الذكاء الاصطناعي",
    gName1: "جلسة جوجل نشطة",
    gName2: "حساب احتياطي متاح",
    gUseOther: "استخدام حساب آخر",
    gLoading: "جاري الاتصال بخدمات جوجل...",
    gFooter: "للمتابعة، سيقوم Google بمشاركة اسمك وعنوان بريدك الإلكتروني وإعدادات اللغة وصورة ملفك الشخصي مع متجر الذكاء الاصطناعي."
  },
  fr: {
    title: "AI Store", subtitle: "Meilleurs outils IA", search: "Rechercher...", login: "Connexion", logout: "Déconnexion", welcome: "Bienvenue", modalTitle: "Accès", modalText: "Créer un compte pour continuer", btnGoogle: "Continuer avec Google", btnFacebook: "Continuer avec Facebook", dividerText: "Ou", rememberLabel: "Se souvenir de moi", continue: "Continuer", cancel: "Annuler", gChoose: "Choisir un compte", gSub: "pour continuer", gName1: "Session active", gName2: "Compte secondaire", gUseOther: "Utiliser un autre compte", gLoading: "Connexion...", gFooter: "Google partagera votre profil."
  },
  es: {
    title: "AI Store", subtitle: "Mejores herramientas IA", search: "Buscar...", login: "Entrar", logout: "Salir", welcome: "Bienvenido", modalTitle: "Acceso", modalText: "Crea tu cuenta para continuar", btnGoogle: "Continuar con Google", btnFacebook: "Continuar con Facebook", dividerText: "O", rememberLabel: "Recordarme", continue: "Continuar", cancel: "Cancelar", gChoose: "Seleccionar cuenta", gSub: "para continuar", gName1: "Sesión activa", gName2: "Cuenta de respaldo", gUseOther: "Usar otra cuenta", gLoading: "Cargando...", gFooter: "Google compartirá sus datos."
  },
  de: { title: "AI Store", subtitle: "Die besten KI-Tools", search: "Suchen...", login: "Einloggen", logout: "Ausloggen", welcome: "Willkommen", modalTitle: "Konto-Zugriff", modalText: "Konto erstellen", btnGoogle: "Mit Google fortfahren", btnFacebook: "Mit Facebook fortfahren", dividerText: "Oder", rememberLabel: "Angemeldet bleiben", continue: "Weiter", cancel: "Abbrechen", gChoose: "Konto auswählen", gSub: "weiter zu AI Store", gName1: "Aktive Sitzung", gName2: "Sicherungskonto", gUseOther: "Anderes Konto verwenden", gLoading: "Verbindung wird hergestellt...", gFooter: "Google teilt Profildetails." },
  pt: { title: "AI Store", subtitle: "As melhores ferramentas", search: "Buscar...", login: "Entrar", logout: "Sair", welcome: "Bem-vindo", modalTitle: "Acesso", modalText: "Crie sua conta", btnGoogle: "Continuar com Google", btnFacebook: "Continuar com Facebook", dividerText: "Ou", rememberLabel: "Lembrar de mim", continue: "Continuar", cancel: "Cancelar", gChoose: "Escolha uma conta", gSub: "para continuar", gName1: "Sessão ativa", gName2: "Conta de backup", gUseOther: "Usar outra conta", gLoading: "Conectando...", gFooter: "O Google compartilhará seu perfil." },
  hi: { title: "एआई स्टोर", subtitle: "सर्वश्रेष्ठ एआई टूल्स", search: "خوزें...", login: "लॉगिन", logout: "लॉगआउट", welcome: "स्वागत हे", modalTitle: "खाता पहुंच", modalText: "आगे बढ़ने के लिए खाता बनाएं", btnGoogle: "Google के साथ जारी रखें", btnFacebook: "Facebook के साथ जारी रखें", dividerText: "अथवा", rememberLabel: "मुझे याद रखें", continue: "जारी रखें", cancel: "रद्द करें", gChoose: "खाता चुनें", gSub: "जारी रखने के लिए", gName1: "सक्रिय सत्र", gName2: "बैकअप खाता", gUseOther: "अन्य खाता उपयोग करें", gLoading: "कनेक्ट हो रहा है...", gFooter: "गूगल जानकारी साझा करेगा।" }
};

/* SAMPLE DATA */
const tools = [
  { name: "ChatGPT", desc: { en: "AI writing and conversational tool", ar: "أداة ذكية للكتابة والمحادثة وتحليل النصوص" } },
  { name: "Midjourney", desc: { en: "Advanced AI image generation tool", ar: "أداة متطورة لتوليد الصور من النصوص" } },
  { name: "Pika", desc: { en: "AI-powered video creation platform", ar: "منصة ممتازة لصناعة وتوليد الفيديو بالذكاء الاصطناعي" } }
];

/* CHANGE & INITIALIZE LANGUAGE */
function changeLanguage() {
  const selectElement = document.getElementById("langSelect");
  lang = selectElement ? selectElement.value : "en";
  const cur = t[lang] || t["en"];

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

  // تحديث نصوص مودال جوجل الجديد
  document.getElementById("gModalTitle").innerText = cur.gChoose;
  document.getElementById("gModalSub").innerText = cur.gSub;
  document.getElementById("gName1").innerText = cur.gName1;
  document.getElementById("gName2").innerText = cur.gName2;
  document.getElementById("gUseOther").innerText = cur.gUseOther;
  document.getElementById("gLoadingText").innerText = cur.gLoading;
  document.getElementById("gFooterText").innerText = cur.gFooter;

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }

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
    authText.innerText = `${cur.welcome}, ${userProvider} ✓`;
    authBtn.style.background = "#10b981"; 
    authBtn.onclick = handleLogout;
  } else {
    authText.innerText = cur.login;
    authBtn.style.background = "#2563eb"; 
    authBtn.onclick = openAuth;
  }
}

/* دالة تسجيل الخروج */
function handleLogout() {
  localStorage.removeItem("ai_store_logged");
  localStorage.removeItem("ai_store_provider");
  updateAuthButtonUI();
}

/* التحكم بدخول شبكات التواصل الاجتماعي */
function socialLogin(provider) {
  if (provider === "Google") {
    // إغلاق مودال التسجيل القديم وفتح نافذة حسابات جوجل المخصصة الاحترافية
    closeAuth();
    openGooglePicker();
  } else {
    // أي خدمة تانية (مثل فيسبوك أو ضغط موافق المباشر)
    saveSessionAndFinish(provider);
  }
}

/* فتح وإغلاق نافذة حسابات جوجل */
function openGooglePicker() {
  // إعادة تصفير العناصر للتأكد من ظهور القائمة وإخفاء التحميل القديم
  document.getElementById("googleAccountsList").style.display = "flex";
  document.getElementById("googleLoading").style.display = "none";
  document.getElementById("googlePickerModal").style.display = "flex";
}

function closeGooglePicker() {
  document.getElementById("googlePickerModal").style.display = "none";
}

/* عند اختيار المستخدم لأحد حسابات جوجل في القائمة المخصصة */
function selectGoogleAccount(provider) {
  // 1. إخفاء قائمة الحسابات وإظهار مؤشر التحميل الاحترافي
  document.getElementById("googleAccountsList").style.display = "none";
  document.getElementById("googleLoading").style.display = "flex";

  // 2. محاكاة وقت التحقق (ثانيتين) ثم إكمال تسجيل الدخول بنجاح
  setTimeout(() => {
    closeGooglePicker();
    saveSessionAndFinish(provider);
  }, 2000);
}

/* دالة حفظ الجلسة وتحديث الواجهة النهائية */
function saveSessionAndFinish(provider) {
  const isRememberMeChecked = document.getElementById("rememberMe").checked;
  
  if (isRememberMeChecked) {
    localStorage.setItem("ai_store_logged", "true");
    localStorage.setItem("ai_store_provider", provider);
  }

  closeAuth();
  updateAuthButtonUI(); 

  // window.location.href = OFFER_URL; // ❌ معطلة مؤقتاً للتطوير، سنعيدها لاحقاً بطلبك فور الانتهاء
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

/* إغلاق النوافذ عند الضغط خارجها */
window.onclick = function(e) {
  if (e.target.id === "authModal") { closeAuth(); }
  if (e.target.id === "googlePickerModal") { closeGooglePicker(); }
};
