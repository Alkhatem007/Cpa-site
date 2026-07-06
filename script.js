const tools = [
  {
    name: "ChatGPT",
    category: "writing",
    desc: "AI writing assistant",
    link: "https://chat.openai.com"
  },
  {
    name: "Midjourney",
    category: "image",
    desc: "AI image generator",
    link: "https://www.midjourney.com"
  },
  {
    name: "Pika Labs",
    category: "video",
    desc: "AI video generator",
    link: "https://pika.art"
  },
  {
    name: "Notion AI",
    category: "study",
    desc: "AI productivity tool",
    link: "https://notion.so"
  }
];

let currentCategory = "all";

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
    const filtered = tools.filter(t => t.category === cat);
    displayTools(filtered);
  }
}

document.getElementById("searchBox").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(value)
  );

  displayTools(filtered);
});

// initial load
displayTools(tools);
