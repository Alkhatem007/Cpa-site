let lang = "en";
let currentFilter = "all";

/* DATA */
let tools = [
  { id: 1, name: "ChatGPT", type: "writing", rating: 5, trending: true },
  { id: 2, name: "Midjourney", type: "image", rating: 5, trending: true },
  { id: 3, name: "Pika", type: "video", rating: 4, trending: true },
  { id: 4, name: "Notion AI", type: "writing", rating: 4, trending: false }
];

/* FAVORITES (LOCAL STORAGE) */
let favorites = JSON.parse(localStorage.getItem("fav")) || [];

/* LANGUAGE */
function changeLanguage() {
  lang = document.getElementById("langSelect").value;
}

/* AUTH */
function openAuth() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}

function fakeLogin() {
  closeAuth();
  alert(lang === "ar" ? "تم تسجيل الدخول 🎉" : "Logged in 🎉");
}

/* FAVORITE */
function toggleFav(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("fav", JSON.stringify(favorites));
  renderTools();
}

/* FILTER */
function filterCategory(type) {
  currentFilter = type;
  renderTools();
}

/* SEARCH */
function searchTools() {
  renderTools();
}

/* RENDER */
function renderTools() {
  const box = document.getElementById("toolsContainer");
  const search = document.getElementById("searchBox").value.toLowerCase();

  box.innerHTML = "";

  let filtered = tools.filter(t => {
    let matchFilter =
      currentFilter === "all" ||
      (currentFilter === "trending" && t.trending) ||
      t.type === currentFilter;

    let matchSearch = t.name.toLowerCase().includes(search);

    return matchFilter && matchSearch;
  });

  filtered.forEach(t => {
    let isFav = favorites.includes(t.id);

    box.innerHTML += `
      <div class="card">
        <div class="heart" onclick="toggleFav(${t.id})">
          ${isFav ? "❤️" : "🤍"}
        </div>

        <h3>${t.name}</h3>

        <div class="small">${t.type}</div>

        <div class="stars">
          ${"⭐".repeat(t.rating)}
        </div>
      </div>
    `;
  });
}

/* INIT */
renderTools();
