const richPerson = prompt("Máš hodně peněz? - 1 pro 'ano', 0 pro 'ne'");
const animalLover = prompt("Máš rád zvířata? - 1 pro 'ano', 0 pro 'ne'");
const cityInhabitant = prompt("Žiješ ve městě? - 1 pro 'ano', 0 pro 'ne'");

if (richPerson == true && animalLover == true && cityInhabitant == false) {
  console.log("Kup si koně.");
} else if (richPerson == true || animalLover == false) {
  console.log("Kup si Porsche.");
} else if (richPerson == false && animalLover == true && !(cityInhabitant == false)) {
  console.log("Kup si morče.");
} else {
  console.log("Kup si čokoládu.");
}

/* You can rewrite this to shorter version like this:

if (richPerson && animalLover && cityInhabitant) {
  console.log("Kup si koně.");
} else if (richPerson || !animalLover) {
  console.log("Kup si Porsche.");
} else if (!richPerson && animalLover && cityInhabitant) {
  console.log("Kup si morče.");
} else {
  console.log("Kup si čokoládu.");
}

*/
