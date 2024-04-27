let btn = document.getElementsByClassName("btn");
let obj = [
  document.getElementById("firstText"),
  document.getElementById("secondText"),
];

for (let j = 0; j < btn.length; j++) {
  btn[j].addEventListener("click", () => {
    for (let i = 0; i < obj.length; i++) {
      obj[i].classList.toggle("active");
    }
  });
}

window.onload = () => {
  setInterval(() => {
    for (let i = 0; i < obj.length; i++) {
      obj[i].classList.toggle("active");
    }
  }, 5000);
};
