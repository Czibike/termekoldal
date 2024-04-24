const header = document.getElementById("header");

const renderHeader = () => {
  header.innerHTML = `
      <div class="welcomeSign">
        <a href="https://www.facebook.com/profile.php?id=61557302602462">
          <img src="./images/assect/facebook.png" alt="facebook"
        /></a>
        <a href="https://www.instagram.com/bogybeautycare/">
          <img src="./images/assect/instagram.png" alt="instagram"
        /></a>
        <div class="welcomeText">
          <button class="btn">&lt;</button>
          <p class="text active" id="firstText">Üdvözöllek az áruháhamban!</p>
          <p class="text" id="secondText">
            Ingyenes kiszállítás 10000Ft felett
          </p>
          <button class="btn">&gt;</button>
        </div>
      </div>
      <div class="name">
        <img src="./images/assect/search.png" alt="Keresés" />
        <h1>Bogy Beautycare</h1>
        <img src="./images/assect/shopping_cart.png" alt="Kosár" />
      </div>
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./products.html">Products</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./aboutUs.html">About Us</a></li>
          </ul>
        </div>
      </nav>
      `;
};

window.onload = renderHeader();
