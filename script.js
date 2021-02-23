var imageTags = ["pic0", "pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7", "pic8", "pic9"];
var blankImagePath = "5.jpg";
var actualPics = ["strawberry.jpg", "flower.jpg", "leaves.jpg", "pago.jpg", "ferris.jpg"];
var pics = [];
var picMapping = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//first number is the index of the cell The second number is the selected image that is flipped the 0s represent the images 
var firstNumber = -1;
var secondNumber = -1;
var clicks = 0;

//JSON TIME LETS GOOOO
var player = { "firstname": "", "lastname": "", "age": "" };

//end of JSON
function printBlanks() {
    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}


function createRandomImageArray() {

    //console.log(pics.length + " " + imageTags.length + " " + randomNumber);
    while (pics.length < imageTags.length) {
        var randomNumber = Math.floor(Math.random() * actualPics.length);
        //console.log("imageTag is " + i);

        //  console.log("actualPic is " + randomNumber);
        if (picMapping[randomNumber] < 2) {

            pics.push(actualPics[randomNumber]);
            picMapping[randomNumber] += 1;
        }


    }
}


//end of function 2

function flipImage(number) {
    clicks += 1;
    if (clicks == 2) {
        clicks = 0;
        console.log("you did a good");
        attemptGet();
    }
    //firstNumber = number;
    // document.getElementById(imageTags[number]).src = pics[number];
    if (firstNumber >= 0) {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = pics[secondNumber];
        // setTimeout(imagesDisappear, 2000);
    }
    else if (firstNumber < 0) {

        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src = pics[firstNumber];
    }
    console.log(pics[secondNumber] + " " + pics[firstNumber])
    if (pics[secondNumber] != pics[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {

        setTimeout(imagesDisappear, 1500);
    }
    else if (pics[secondNumber] == pics[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        firstNumber = -1;
        secondNumber = -1;
    }


}
function imagesDisappear() {
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    // imagesDisappear();
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    // imagesDisappear();
    firstNumber = -1;
    secondNumber = -1;
}

//part 2 is here

function addToPlayer() {
    var firstName = document.getElementById("firstNameGet").value;
    player.firstName = firstName;
    var lastName = document.getElementById("lastNameGet").value;
    player.lastName = lastName;
    var age = document.getElementById("ageGet").value;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";

}
//THis is how we keep storage for other pages
function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    var playerInformation = localStorage.getItem("attemptGet");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
    console.log(player.age);
    console.log(player.lastname);

}

//Ok lets do this attempt thing and hope we dont break it. ^_^

var attempts = 0;

function attemptGet() {
    attempts += 1;
    console.log(attempts);
    document.getElementById('score').innerHTML = attempts;
}