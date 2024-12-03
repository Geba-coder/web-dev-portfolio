const onclickImg = document.querySelector("img");

onclickImg.onclick = function () {
  let mySrc = onclickImg.getAttribute("src");
  if (mySrc === "images/me.webp") {
    onclickImg.setAttribute("src", "images/me2.jpg");
    console.log('all work')
  } else {
    onclickImg.setAttribute("src", "images/me.webp")
  }
}


function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "COOl is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

