$(document).ready(function () {

    var agnetha = {
        name: "Agnetha",
        src: "assets/images/agnetha.jpg",
        health: 120,
        attack: 8,
        counterAttack: 20

    }

    var bjorn = {
        name: "Björn",
        src: "assets/images/bjorn.jpg",
        health: 100,
        attack: 10,
        counterAttack: 12

    }

    var benny = {
        name: "Benny",
        src: "assets/images/benny.jpg",
        health: 180,
        attack: 6,
        counterAttack: 10

    }

    var frida = {
        name: "Anni-Frid",
        src: "assets/images/frida.jpg",
        health: 150,
        attack: 12,
        counterAttack: 14

    }

    var characterArr = [agnetha, bjorn, benny, frida];


    function gameStart() {
        //adds the four images and their stats to the character div
        for (var i = 0; i < characterArr.length; i++) {
            //creates an img ready to go on the page
            var characterPic = $("<img>");
            //adds a class to the new img
            characterPic.attr("class", "health attack counterAttack");
            characterPic.attr("id", characterArr[i].name);
            //assigns one of the images from the imgGallery array in order
            characterPic.attr("src", characterArr[i].src);
            //adds the stats from the object to each img
            characterPic.attr("health", characterArr[i].health);
            characterPic.attr("attack", characterArr[i].attack);
            characterPic.attr("counterAttack", characterArr[i].counterAttack);
            //sticks them onto the page in the character div
            $("#character").append(characterPic);
        }

    }


    gameStart();
    $(".health").on("click", function () {
        console.log("you clicked " + ($(this).attr("id")));


    })



})