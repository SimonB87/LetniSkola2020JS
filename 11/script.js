let inputElement1 = document.getElementById("inputText");

inputElement1.value = "Naprosto skvěle";

let replyElement = document.getElementById("reply");

replyElement.innerHTML = inputElement1.value;

replyElement.style = "color:salmon;"


let inputElement2 = document.getElementById("inputResult");

inputElement2.value = "<span><strong>Báječně!</strong></span><br><span class='italic'>Fakt parádně!</span>";

let responceElement = document.getElementById("responce");

responceElement.innerHTML = inputElement2.value;

let italicText = document.querySelector(".italic");
italicText.style = "font-style: italic;"

/* You can edit the reply on site by executing this line in console: */
/*
replyElement.innerText = inputElement.value;
*/
