let plat = prompt("Jaký máš plat?");
plat = parseInt(plat);

if (plat > 50001) {
  alert("Juchů!!!");
} else if (plat > 50000) {
  alert("Docela dobrý");
} else if (plat > 30000) {
  alert("Fňuk");
} else {
  alert("Něco je velice špatně :-( ");
}
