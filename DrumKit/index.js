for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        var audio = makeSound(buttonInnerHTML);
        if (audio) {
            audio.play();
        }

    });
}
document.addEventListener("keydown", function (event) {
    var audi = makeSound(event.key);
    audi.play();
})

function makeSound(key) {
    var aud;
    switch (key) {
        case "w":
        case "W":
            aud = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
        case "A":
            aud = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
        case "S":
            aud = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
        case "D":
            aud = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
        case "J":
            aud = new Audio("./sounds/snare.mp3");
            break;
        case "k":
        case "K":
            aud = new Audio("./sounds/crash.mp3");
            break;
        case "l":
        case "L":
            aud = new Audio("./sounds/kick-bass.mp3");
            break;
    }
    return aud;
}
