let theme = "dark";
let category = "all";

/* DATA */
let tools = [
  { id: 1, name: "ChatGPT", type: "writing", trending: true },
  { id: 2, name: "Midjourney", type: "image", trending: true },
  { id: 3, name: "Pika", type: "video", trending: true },
  { id: 4, name: "Notion AI", type: "writing", trending: false }
];

/* FAVORITES */
let favorites = JSON.parse(localStorage.getItem("fav")) || [];

/* INIT THEME */
document.body.classList.add("dark");

/* TOGGLE THEME */
function toggleTheme() {
  if (theme === "dark") {
    theme = "light";
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.getElementById("themeBtn").innerText = "☀️";
  } else {
    theme = "dark";
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    document.getElementById("themeBtn").innerText = "🌙";
  }
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

/* CATEGORY */
function filterCategory(c) {
  category = c;
  renderTools();
}

/* SEARCH */
function searchTools() {
  renderTools();
}

/* RENDER */
function renderTools() {
  const box = document.getElementById("toolsContainer");
  const search = document.getElementById("searchBox").value?.toLowerCase() || "";

  box.innerHTML = "";

  let filtered = tools.filter(t => {

    let matchCat =
      category === "all" ||
      (category === "trending" && t.trending) ||
      t.type === category;

    let matchSearch = t.name.toLowerCase().includes(search);

    return matchCat && matchSearch;
  });

  filtered.forEach(t => {
    let isFav = favorites.includes(t.id);

    box.innerHTML += `
      <div class="card">
        <div class="heart" onclick="toggleFav(${t.id})">
          ${isFav ? "❤️" : "🤍"}
        </div>

        <h3>${t.name}</h3>
        <p>${t.type}</p>
      </div>
    `;
  });
}

/* AUTH */
function openAuth() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}

/* INIT */
renderTools();
