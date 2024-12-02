// // const myHeading = document.querySelector("h1");
// // myHeading.textContent = "Hello world!";

// // let myVariable = "Bob"; // переменная myVariable инициализируется значением "Bob"
// // // myVariable = "Steve";    // переменной myVariable присваивается новое значение "Steve"


// // console.log(myVariable)


// function multiply(num1, num2) {
//     let decide = num1 * num2;
//     if (decide === 3){
//         alert("Yay, I love chocolate ice cream!");
//     }
//     else( alert('test no compleate '))

//     return decide;
//   }

// document.querySelector("img").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };

// var myHTML = document.querySelector("html");
// myHTML.onclick = function () {};



// let onclickImg = document.querySelector("img");
// onclickImg.onclick = function (){
//     alert('click')

// };




const onclickImg = document.querySelector("img");

onclickImg.onclick = function () {
    let mySrc = onclickImg.getAttribute("src");
   if (mySrc === "images/me.webp") {
     onclickImg.setAttribute("src", "images/me2.jpg");
     console.log('all work')
 } else {
    onclickImg.setAttribute("src", "images/me.webp")
}}



// let oneclickImg2 = document.querySelector(img);

// oneclickImg2.onclick = function (){
// let mySrc2 = oneclickImg2.getAttribute("src");
// if (mySrc2 === "images/me2.jpg"){
//   oneclickImg2.setAttribute("src", "images/me.webp")
//   console.log("all2 work")
// } else{
//   console.log("not work")
//  } 
// }



// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");


// function setUserName() {
//     let myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = "COOl is cool, " + myName;
//   }
//   if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "Mozilla is, " + storedName;
//   }
  
//   myButton.onclick = function () {
//     setUserName();
//   };
localStorage.clear();
function greet(name) {
  console.log("Hello, " + name + "!");
}

let name1= "lice";

greet(name1);