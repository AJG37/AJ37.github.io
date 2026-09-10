/**
 * PROJECTS
 * -----------------------------------------------------------------------
 * This is the only thing you need to touch to add new work later.
 * Copy one of the objects below, fill in your own details, and add it
 * to the array. The page will render it automatically.
 *
 *   title       - project name (string)
 *   status      - short status label, e.g. "Live", "In progress" (string)
 *   description - one or two sentences on what it does (string)
 *   tags        - tools/languages used (array of strings)
 *   link        - a URL, or null if you don't have one yet
 * -----------------------------------------------------------------------
 */
const projects = [
  {
    title: "Cycle Life",
    status: "In progress",
    description:
      "A cycling life-sim built in Roblox where players take on jobs like food delivery, package runs, and bike repair, and level up rider skills — sprinting, endurance, and climbing — to earn a living and race on two wheels.",
    tags: ["Roblox Studio", "Lua"],
    link: null,
  },
  {
    title: "Sort For Treasure",
    status: "(LINK SOON)",
    description:
      "A browser-based game built from scratch with HTML, CSS, and JavaScript. You drag and drop items and sort them into what category they're in."
    tags: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
];

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;

  list.innerHTML = projects
    .map((p) => {
      const tags = p.tags
        .map((t) => `<li>${escapeHtml(t)}</li>`)
        .join("");

      const link = p.link
        ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project</a>`
        : `<span class="project-link disabled">Link coming soon</span>`;

      return `
        <article class="project-card">
          <p class="project-status">${escapeHtml(p.status)}</p>
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.description)}</p>
          <ul class="project-tags">${tags}</ul>
          ${link}
        </article>
      `;
    })
    .join("") + `
      <div class="project-card placeholder">
        More projects in the future!
      </div>
    `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", renderProjects);
