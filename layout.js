function getBrand() {

return "byd";
}

const brand = getBrand();

const headerHTML = `
<header>

  <img src="logo.jpg"
       alt="Zerosol Logo"
       class="logo">

  <h1 class="showroom-title">

    ${
      brand
        ? `<img src="images/logos/byd.png"
                 class="title-logo">`
        : ""
    }

    ${
      brand
        ? brand === "byd"
          ? "BYD"
          : brand.charAt(0).toUpperCase() + brand.slice(1)
        : ""
    }

    Showroom

  </h1>
</header>
`;

const footerHTML = `
<footer>

  <p>
    Contact us:
    <a href="mailto:sales@zerosolafrica.co">
      sales@zerosolafrica.co
    </a>
  </p>

  <p>
    ☎
    <a href="tel:+233595445544">
      +233 59 544 5544
    </a>
    |

    <a href="tel:+233595444454">
      +233 59 544 4454
    </a>
    |

    <a href="tel:+17348833934">
      +1 (734) 883-3934
    </a>
  </p>

  <p>
    &copy;
    <span id="year"></span>
    Zerosol Automotive.
    All rights reserved.
  </p>

</footer>
`;

document.getElementById("header-placeholder").innerHTML = headerHTML;

document.getElementById("footer-placeholder").innerHTML = footerHTML;

document.getElementById("year").textContent =
  new Date().getFullYear();