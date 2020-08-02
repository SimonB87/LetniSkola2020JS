let inputElement = document.getElementById("inputText");

inputElement.value = "Naprosto skvěle";

let replyElement = document.getElementById("reply");

replyElement.innerText = inputElement.value;

replyElement.style = "color:salmon;"

/* You can edit the reply on site by executing this line in console: */
/*
replyElement.innerText = inputElement.value;
*/
