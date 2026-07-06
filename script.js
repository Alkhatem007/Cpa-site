let theme = "dark";

/* DATABASE (IMPORTANT UPGRADE) */
const tools = [
  {
    id: 1,
    name: "ChatGPT",
    type: "Writing AI",
    desc: "Powerful AI assistant for writing and coding.",
    link: "https://chat.openai.com"
  },
  {
    id: 2,
    name: "Midjourney",
    type: "Image AI",
    desc: "Generate high quality AI images.",
    link: "https://www.midjourney.com"
  },
  {
    id: 3,
    name: "Pika Labs",
    type: "Video AI",
    desc: "Create AI videos easily.",
    link: "https://pika.art"
  }
];

/* THEME */
function toggleTheme() {
  if (theme === "dark") {
    theme = "light";
    document.body.className = "light";
  } else {
    theme = "dark";
    document.body.className = "dark";
  }
}

/* RENDER TOOLS */
function renderTools() {
  const box = document.getElementById("toolsContainer");
  const search = document.getElementById("searchBox").value?.toLowerCase() || "";

  box.innerHTML = "";

  tools
    .filter(t =>
      t.name.toLowerCase().includes(search) ||
      t.type.toLowerCase().includes(search)
    )
    .forEach(t => {
      box.innerHTML += `
        <div class="card" onclick="openTool(${t.id})">
          <h3>${t.name}</h3>
          <p>${t.type}</p>
        </div>
      `;
    });
}

/* TOOL PAGE */
function openTool(id) {
  const tool = tools.find(t => t.id === id);

  document.getElementById("toolName").innerText = tool.name;
  document.getElementById("toolDesc").innerText = tool.desc;
  document.getElementById("toolLink").href = tool.link;

  document.getElementById("toolPage").style.display = "block";
}

function closeTool() {
  document.getElementById("toolPage").style.display = "none";
}

/* INIT */
renderTools();
