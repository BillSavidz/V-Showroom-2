function getBrand() {
  return "byd"; // Single-brand site
}

const brand = getBrand();

// ===== HEADER =====
const headerHTML = `
<header>
  <img src="logo.jpg" alt="Zerosol Logo" class="logo">

  <h1 class="showroom-title">
    <img src="images/logos/${brand}.png" class="title-logo">
    BYD Showroom
  </h1>
</header>
`;

document.getElementById("header-placeholder").innerHTML = headerHTML;


// ===== FOOTER =====
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer-placeholder").innerHTML = html;
    document.getElementById("year").textContent = new Date().getFullYear();
  });