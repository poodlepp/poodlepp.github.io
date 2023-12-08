let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/gulou.png") {
        myImage.setAttribute("src", "images/gulou2.png");
    } else {
        myImage.setAttribute("src", "images/gulou.png");
    }
};


let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function () {
    setUserName();
};


