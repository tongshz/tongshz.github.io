var myImage = document.querySelector('img');

myImage.onclick = function () {
    "use strict";
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google_logo.png') {
        myImage.setAttribute('src', 'images/google_logo2.png');
    } else {
        myImage.setAttribute('src', 'images/google_logo.png');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    "use strict";
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Google is good, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Google is good, ' + storedName;
}

myButton.onclick = function() {
    "use strict";
    setUserName();
}