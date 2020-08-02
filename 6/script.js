let plat = prompt("Jaký máš plat?");
let plat = parseInt(plat);

if (plat > 50001) {
  alert("Juchů!!!");
} else if (30001 > plat > 50000) {
  alert("Docela dobrý");
} else if (20001 > plat > 30000) {
  alert("Fňuk");
} else {
  alert("Něco je velice špatně :-( ");
}

//test
console.log(plat);//test