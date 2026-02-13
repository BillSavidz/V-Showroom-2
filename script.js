const SHEET_ID = "18DipGlUjrFydq-xeJncUWtAhSiU2C4l6T8EZhrz9nu4";
const SHEET_NAME = "BYD";

function formatGHS(val) {
  if (!val) return "—";
  const num = parseFloat(String(val).replace(/[^\d.-]/g, ""));
  if (isNaN(num)) return "—";

  return "¢" + num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function sheetUrl() {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
}

function createVehicleCard(vehicle) {
  const { name, ghsNew, ghsPre, specs, yt, image } = vehicle;

  const card = document.createElement("div");
  card.className = "vehicle-card";

  const formattedSpecs = specs
    ? specs
        .split("\n")
        .map(line => line.replace(/^•\s*/, "").trim())
        .filter(line => line.length > 0)
        .map(line => `• ${line}`)
        .join("<br>")
    : "";

  card.innerHTML = `
    <a href="${yt || "#"}" target="_blank">
      <img src="images/${image || "placeholder.jpg"}" alt="${name}">
    </a>
    <h2>${name}</h2>
    <p>${formattedSpecs}</p>
    <div class="price-tags">
      <span class="price new">New: ${formatGHS(ghsNew)}</span>
      ${
        ghsPre && ghsPre !== "-"
          ? `<span class="price preowned">Pre-owned: ${formatGHS(ghsPre)}</span>`
          : ""
      }
    </div>
  `;

  return card;
}

async function loadVehicles() {
  try {
    const response = await fetch(sheetUrl());
    const text = await response.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const rows = json.table.rows;

    const container = document.getElementById("vehicles-container");
    container.innerHTML = "";

    rows.forEach(row => {
      if (!row.c || !row.c[0] || !row.c[0].v) return;

      const vehicle = {
        name: row.c[0]?.v || "",
        ghsNew: row.c[2]?.v || "",
        ghsPre: row.c[4]?.v || "",
        specs: row.c[6]?.v || "",
        yt: row.c[7]?.v || "",
        image: row.c[9]?.v || ""
      };

      container.appendChild(createVehicleCard(vehicle));
    });

  } catch (err) {
    console.error("Error loading vehicles:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadVehicles);
