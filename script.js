var imageTags = ["pic0", "pic1", "pic2", "pic3"];
var blankImagePath = "5.jpg";
var actualPics = ["strawberry.jpg", "flower.jpg"];
var pics = [];
var picMapping = [0, 0];//first number is the index of the cell The second number is the selected image that is flipped the 0s represent the images 

function printBlanks() {
    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}


function createRandomImageArray() {
    while (pics.length < imageTags.length) {

        //console.log("imageTag is " + i);
        var randomNumber = Math.floor(Math.random() * actualPics.length);
        console.log("actualPic is " + randomNumber);
        if (picMapping[randomNumber] < 2) {

            pics.push(actualPics[randomNumber]);
            picMapping[randomNumber] += 1;
        }


    }
}


//end of function 2

function flipImage(number) {
    document.getElementById(imageTags[number]).src = pics[number];
}
