const footer = document.getElementById("footer");

const renderFooter = () => {
  footer.innerHTML = `
  <div class="smedia-container">
  <ul class="smedia">
    <li class="media-item">
      <a href="https://www.facebook.com/profile.php?id=61557302602462">
        <img src="../images/assect/facebook.png" alt="facebook"
      /></a>
    </li>
    <li class="media-item">
      <a
        href="https://www.instagram.com/bogybeautycare?igsh=MTJobmRncWowam9sZA=="
      >
        <img src="../images/assect/instagram.png" alt="instagram"
      /></a>
    </li>
  </ul>
</div>
<div class="copyright">
  <p><small>&copy; 2024,</small></p>
  <p>
    <a href="#"><small>BogyBeautycare</small></a>
  </p>
  <p>
    <a href="#"><small> powered by SC.</small></a>
  </p>
</div>
    `;
};

window.onload = renderFooter();
