function addNumbers() {
  const numberFirst = parseInt(document.getElementById("numberFirst").value);
  const numberSecond = parseInt(document.getElementById("numberSecond").value);

  const result = numberFirst + numberSecond;
  document.getElementById("result").innerText = result;
}