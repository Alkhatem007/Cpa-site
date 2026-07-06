let lang = "en";
const OFFER_URL = "https://unlockplay.online/cl/i/4ordr1";

/* نصوص الواجهة والترجمة للغتين */
const t = {
  en: {
    heroTitle: "The Next-Gen AI Operations Platform", heroSubtitle: "Connect your identity to deploy, monitor, and scale advanced models globally.", heroCta: "Get Started Free", login: "Login", logout: "Logout", menuOverview: "📊 Overview", menuTools: "🤖 AI Models", menuAnalytics: "📈 Live Analytics", menuApi: "🔑 API Credentials", dashWelcome: "Welcome back, Developer", statTokens: "Tokens Consumed", statCost: "Total Spending", statStatus: "System Gateway", toolsTitle: "Enterprise AI Clusters", analyticsTitle: "Real-Time Request Streams", lockAnalyticsTitle: "Advanced Graph Metrics Locked", lockAnalyticsText: "To access full real-time user stream maps and data filtering, please unlock your dashboard token.", unlockBtn1: "Unlock Analytics Now", apiTitle: "Production Access Tokens", lockApiTitle: "Generate Production API Key", lockApiText: "Deploy your code to live apps. Requires a brief developer authentication verification.", unlockBtn2: "Verify & Generate Key", modalTitle: "Secure Cloud Gateway", modalText: "Select your authorization layer to access the dashboard terminal.", btnFacebook: "Sign in with Facebook", dividerText: "Or Developer Credentials", btnGuest: "Guest Access", btnCancel: "Cancel"
  },
  ar: {
    heroTitle: "منصة عمليات الذكاء الاصطناعي للمستقبل", heroSubtitle: "اربط هويتك الرقمية لتشغيل ومراقبة وتوسيع النماذج البرمجية عالمياً.", heroCta: "ابدأ مجاناً الآن", login: "تسجيل دخول", logout: "تسجيل خروج", menuOverview: "📊 نظرة عامة", menuTools: "🤖 نماذج الذكاء", menuAnalytics: "📈 التحليلات المباشرة", menuApi: "🔑 مفاتيح الـ API", dashWelcome: "مرحباً بك مجدداً، مطور البرمجيات", statTokens: "الرموز المستهلكة (Tokens)", statCost: "إجمالي الإنفاق الكلي", statStatus: "بوابة النظام", toolsTitle: "مجموعات الذكاء الاصطناعي للمؤسسات", analyticsTitle: "تدفق البيانات الفوري", lockAnalyticsTitle: "الرسوم البيانية المتقدمة مقفلة", lockAnalyticsText: "للوصول إلى خرائط تدفق المستخدمين في الوقت الفعلي وتصفية البيانات، يرجى فك قفل لوحة التحكم.", unlockBtn1: "افتح التحليلات الآن", apiTitle: "رموز وصول الإنتاج الفعلي", lockApiTitle: "توليد مفتاح API للإنتاج", lockApiText: "انشر تطبيقاتك على الخوادم الحية. يتطلب هذا الإجراء توثيقاً سريعاً لملف المطور.", unlockBtn2: "توثيق وتوليد المفتاح", modalTitle: "بوابة الحماية السحابية الآمنة", modalText: "اختر طبقة المصادقة المناسبة للدخول إلى واجهة لوحة التحكم.", btnFacebook: "المتابعة باستخدام فيسبوك", dividerText: "أو صلاحيات مطور فرعية", btnGuest: "دخول كـ زائر", btnCancel: "إلغاء"
  }
};

/* نماذج الذكاء الاصطناعي المعروضة جوة صفحة الـ Models */
const tools = [
  { name: "LLaMA 3.1-Ultra", desc: { en: "High-throughput fine-tuned text agent.", ar: "نموذج معالج نصوص فائق السرعة مخصص للمؤسسات." } },
  { name: "Stable Diffusion XL", desc: { en: "Latent text-to-image synthesis cluster.", ar: "عنقود توليد ومعالجة الصور المتقدمة من النصوص." } },
  { name: "Whisper Pro-V3", desc: { en: "Neural audio transcription and speech model.", ar: "النموذج العصبي المتطور لنسخ وتحليل الملفات الصوتية." } }
];

/* تبديل اللغات وتطبيق الاتجاهات */
function changeLanguage() {
  const selectElement = document.getElementById("langSelect");
  lang = selectElement ? selectElement.value : "en";
  const cur = t[lang] || t["en"];

  // تحديث نصوص الهبوط واللوحة
  for (let key in cur) {
    const el = document.getElementById(key);
    if (el) el.innerText = cur[key];
  }

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }
  
  updateAuthUI();
  loadTools();
}

/* تبديل الثيم: ليلي / نهاري */
function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    btn.innerText = "☀️";
    localStorage.setItem("ai_theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    btn.innerText = "🌙";
    localStorage.setItem("ai_theme", "dark");
  }
}

/* فحص حالة تسجيل الدخول وتغيير الشاشات فوراً */
function updateAuthUI() {
  const isLogged = localStorage.getItem("ai_store_logged") === "true";
  const authText = document.getElementById("authText");
  const landing = document.getElementById("landingPage");
  const dashboard = document.getElementById("dashboardPage");
  const cur = t[lang] || t["en"];

  if (isLogged) {
    authText.innerText = cur.logout;
    landing.style.display = "none";
    dashboard.style.display = "block";
  } else {
    authText.innerText = cur.login;
    landing.style.display = "block";
    dashboard.style.display = "none";
  }
}

function handleAuthAction() {
  if (localStorage.getItem("ai_store_logged") === "true") {
    localStorage.removeItem("ai_store_logged");
    updateAuthUI();
  } else {
    openAuth();
  }
}

/* 🌟 استقبال رد جوجل الحقيقي ودخول الموقع مباشرة بدون مغادرة 🌟 */
function handleCredentialResponse(response) {
  localStorage.setItem("ai_store_logged", "true");
  closeAuth();
  updateAuthUI(); // حيفتح الـ Dashboard الفخم للمستخدم فوراً في نفس الصفحة!
}

function socialLogin(provider) {
  localStorage.setItem("ai_store_logged", "true");
  closeAuth();
  updateAuthUI();
}
function fakeSignup() { socialLogin("Guest"); }

/* التنقل بين الصفحات الداخلية للـ Dashboard */
function switchTab(element, tabId) {
  document.querySelectorAll(".nav-menu li").forEach(li => li.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
  
  element.classList.add("active");
  document.getElementById(tabId).style.display = "block";
}

/* بناء كروت نماذج الـ AI */
function loadTools() {
  const container = document.getElementById("toolsContainer");
  if (!container) return;
  container.innerHTML = "";

  tools.forEach(tl => {
    const desc = tl.desc[lang] || tl.desc["en"];
    container.innerHTML += `
      <div class="card">
        <h3>${tl.name}</h3>
        <p>${desc}</p>
        <button class="run-btn" onclick="triggerCpa()">${lang === 'ar' ? 'تشغيل النموذج ⚡' : 'Deploy Model ⚡'}</button>
      </div>
    `;
  });
}

/* 🔥 دالة التوجيه الذكي لعرض الـ CPA عند الرغبة في الفتح والميزات الفخمة 🔥 */
function triggerCpa() {
  window.location.href = OFFER_URL;
}

/* تهيئة الإعدادات عند تحميل الصفحة */
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("ai_theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.getElementById("themeToggle").innerText = savedTheme === "light" ? "☀️" : "🌙";
  }
  changeLanguage();
});

function openAuth() { document.getElementById("authModal").style.display = "flex"; }
function closeAuth() { document.getElementById("authModal").style.display = "none"; }
window.onclick = function(e) { if (e.target.id === "authModal") closeAuth(); };
