// Start game
let characters = ["Archie", "Zia", "Chevy", "Spooky"];
let userChar = "";

$("#Play").click(() => {
    $("#Play").hide();
    $("#landingImg").hide();
    userCharSlct();
});

// User header
const userCharSlct = () => {

    let userCharTitle = document.createElement("h3");
    let text = document.createTextNode("Select your player");
    userCharTitle.appendChild(text);
    document.getElementById("user_char_header").append(userCharTitle);
    userCharTitle.setAttribute("id", "userCharTitle");

    const nextScreen1 = () => {
        opponentScreen();
    };

    // User selection
    // A
    let aCard = document.createElement("div");
    let aCardSub = document.createElement("div");
    let aName = document.createTextNode(characters[0]);
    let aCharImg = document.createElement("img");
    let aSelect = document.createElement("button");

    aCharImg.setAttribute("src", "archieSelect.png");
    aCharImg.setAttribute("class", "charImg");
    aCharImg.setAttribute("id","clickA");
    aCharImg.setAttribute("alt", "A");

    aCardSub.setAttribute("class", "cardSub");

    aSelect.setAttribute("class", "charButton");
    aSelect.setAttribute("id", "aButton");
    aSelect.appendChild(aName);

    aCard.appendChild(aCharImg);
    aCard.appendChild(aCardSub);
    aCardSub.appendChild(aSelect);

    document.getElementById("userCharContainer").append(aCard);
    aCard.setAttribute("class", "cardClass");

    $("#aButton").click(() => {
        userChar = characters[0];
        console.log(`your char is ${userChar}`);
        nextScreen1();
    });
    $("#clickA").click(()=>{
        userChar = characters[0];
        $("user_charInfo").text(userChar);
        console.log(`your char is ${userChar}`);
        nextScreen1(); 
    });

    // B
    let bCard = document.createElement("div");
    let bCardSub = document.createElement("div");
    let bName = document.createTextNode(characters[1]);
    let bCharImg = document.createElement("img");
    let bSelect = document.createElement("button");

    bCharImg.setAttribute("src", "ziaSelect.png");
    bCharImg.setAttribute("class", "charImg");
    bCharImg.setAttribute("id","clickB");
    bCharImg.setAttribute("alt", "B");

    bCardSub.setAttribute("class", "cardSub");

    bSelect.setAttribute("class", "charButton");
    bSelect.setAttribute("id", "bButton");
    bSelect.appendChild(bName);

    bCard.appendChild(bCharImg);
    bCard.appendChild(bCardSub);
    bCardSub.appendChild(bSelect);

    document.getElementById("userCharContainer").append(bCard);
    bCard.setAttribute("class", "cardClass");

    $("#bButton").click(() => {
        userChar = characters[1];
        console.log(`your char is ${userChar}`);
        nextScreen1();
    });
    $("#clickB").click(()=>{
        userChar = characters[1];
        console.log(`your char is ${userChar}`);
        nextScreen1(); 
    });

    // C
    let cCard = document.createElement("div");
    let cCardSub = document.createElement("div");
    let cName = document.createTextNode(characters[2]);
    let cCharImg = document.createElement("img");
    let cSelect = document.createElement("button");

    cCharImg.setAttribute("src", "chevySelect.png");
    cCharImg.setAttribute("class", "charImg");
    cCharImg.setAttribute("id","clickC");
    cCharImg.setAttribute("alt", "C");

    cCardSub.setAttribute("class", "cardSub");

    cSelect.setAttribute("class", "charButton");
    cSelect.setAttribute("id", "cButton");
    cSelect.appendChild(cName);

    cCard.appendChild(cCharImg);
    cCard.appendChild(cCardSub);
    cCardSub.appendChild(cSelect);

    document.getElementById("userCharContainer").append(cCard);
    cCard.setAttribute("class", "cardClass");

    $("#cButton").click(() => {
        userChar = characters[2];
        console.log(`your char is ${userChar}`);
        nextScreen1();
    });
    $("#clickC").click(()=>{
        userChar = characters[2];
        console.log(`your char is ${userChar}`);
        nextScreen1(); 
    });

    // D
    let dCard = document.createElement("div");
    let dCardSub = document.createElement("div");
    let dName = document.createTextNode(characters[3]);
    let dCharImg = document.createElement("img");
    let dSelect = document.createElement("button");

    dCharImg.setAttribute("src", "spookySelect.png");
    dCharImg.setAttribute("class", "charImg");
    dCharImg.setAttribute("id","clickD");
    dCharImg.setAttribute("alt", "D");

    dCardSub.setAttribute("class", "cardSub");

    dSelect.setAttribute("class", "charButton");
    dSelect.setAttribute("id", "dButton");
    dSelect.appendChild(dName);

    dCard.appendChild(dCharImg);
    dCard.appendChild(dCardSub);
    dCardSub.appendChild(dSelect);

    document.getElementById("userCharContainer").append(dCard);
    dCard.setAttribute("class", "cardClass");

    $("#dButton").click(() => {
        userChar = characters[3];
        console.log(`your char is ${userChar}`);
        nextScreen1();
    });
    $("#clickD").click(()=>{
        userChar = characters[3];
        console.log(`your char is ${userChar}`);
        nextScreen1(); 
    });

};
