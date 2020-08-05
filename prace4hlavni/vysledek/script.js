let lightBulbOn = false;

function switchLight() {
  const lightBulb = document.getElementById("lightBulb");
  if (lightBulbOn === true) {
    lightBulb.src = "img/zarovkaVypnuta.jpg";
    lightBulbOn = false;
  } else {
    lightBulb.src = "img/zarovkaZapnuta.jpg";
    lightBulbOn = true;
  }
}

document.getElementById("buttonSwitch").addEventListener("click", function () {
  switchLight();
});