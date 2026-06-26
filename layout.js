const brand = "byd";

const headerHTML = `
<header>

  <img
    src="logo.png"
    alt="Zerosol Logo"
    class="logo">

  <h1 class="showroom-title">

    <img
      src="images/logos/byd.png"
      class="title-logo">

    BYD Showroom

  </h1>

</header>
`;

const footerHTML = `
<footer class="premium-footer">

  <div class="footer-brand">

    <h3>Zerosol Automotive</h3>

    <p>
      Electric vehicle leasing, sales, aftersales services, genuine parts.
    </p>

  </div>

  <div class="footer-contact">

    <a href="mailto:sales@zerosolafrica.co">
      ✉ sales@zerosolafrica.co
    </a>

    <a href="tel:+233595445544">
      ☎ +233 59 544 5544
    </a>

    <a href="tel:+233595444454">
      ☎ +233 59 544 4454
    </a>

    <a href="tel:+17348833934">
      ☎ +1 (734) 883-3934
    </a>

  </div>

  <div class="footer-copyright">

    © <span id="year"></span>
    Zerosol Automotive

  </div>

</footer>
`;

document.getElementById("header-placeholder").innerHTML = headerHTML;

document.getElementById("footer-placeholder").innerHTML = footerHTML;

document.getElementById("year").textContent = new Date().getFullYear();

function navLink(page, label) {
  const active = window.location.pathname.includes(page);

  return `
    <a
      href="${page}.html"
      class="${active ? "active-nav" : ""}">
      ${label}
    </a>
  `;
}
