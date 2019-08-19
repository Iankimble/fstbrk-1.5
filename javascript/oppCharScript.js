let compChar = "";

// Opponent Page
const opponentScreen = () => {
    $("#user_char_header").hide()
    $("#userCharContainer").hide()
    oppCharSlct();
};

// Computer header
const oppCharSlct = () => {

    let oppCharTitle = document.createElement("h3");
    let text = document.createTextNode("Select your Opponent");
    oppCharTitle.appendChild(text);
    document.getElementById("opp_char_header").append(oppCharTitle);
    oppCharTitle.setAttribute("id", "oppCharTitle");

    const nextScreen2 = () => {
        courtScreen();
    };

    // Computer selection
    // A (opponent)
    let aCard = document.createElement("div");
    let aCardSub = document.createElement("div");
    let aName = document.createTextNode(characters[0]);
    let aCharImg = document.createElement("img");
    let aSelect = document.createElement("button");

    aCharImg.setAttribute("src", "archieSelect.png");
    aCharImg.setAttribute("class", "charImg");
    aCharImg.setAttribute("id","clickA2");
    aCharImg.setAttribute("alt", "A");

    aCardSub.setAttribute("class", "cardSub");

    aSelect.setAttribute("class", "charButton");
    aSelect.setAttribute("id", "aButton2");
    aSelect.appendChild(aName);

    aCard.appendChild(aCharImg);
    aCard.appendChild(aCardSub);
    aCardSub.appendChild(aSelect);

    document.getElementById("oppCharContainer").append(aCard);
    aCard.setAttribute("class", "cardClass");

    $("#aButton2").click(() => {
        compChar = characters[0];
        console.log(`computer char is ${compChar}`);
        nextScreen2();
    });
    $("#clickA2").click(()=>{
        compChar = characters[0];
        console.log(`computer char is ${compChar}`);
        nextScreen2(); 
    });

    // B (opponent)
    let bCard = document.createElement("div");
    let bCardSub = document.createElement("div");
    let bName = document.createTextNode(characters[1]);
    let bCharImg = document.createElement("img");
    let bSelect = document.createElement("button");

    bCharImg.setAttribute("src", "ziaSelect.png");
    bCharImg.setAttribute("class", "charImg");
    bCharImg.setAttribute("id","clickB2");
    bCharImg.setAttribute("alt", "B");

    bCardSub.setAttribute("class", "cardSub");

    bSelect.setAttribute("class", "charButton");
    bSelect.setAttribute("id", "bButton2");
    bSelect.appendChild(bName);

    bCard.appendChild(bCharImg);
    bCard.appendChild(bCardSub);
    bCardSub.appendChild(bSelect);

    document.getElementById("oppCharContainer").append(bCard);
    bCard.setAttribute("class", "cardClass");

    $("#bButton2").click(() => {
        compChar = characters[1];
        console.log(`computer char is ${compChar}`);
        nextScreen2();
    });
    $("#clickB2").click(()=>{
        compChar = characters[1];
        console.log(`computer char is ${compChar}`);
        nextScreen2(); 
    });

    // C (opponent)
    let cCard = document.createElement("div");
    let cCardSub = document.createElement("div");
    let cName = document.createTextNode(characters[2]);
    let cCharImg = document.createElement("img");
    let cSelect = document.createElement("button");

    cCharImg.setAttribute("src", "chevySelect.png");
    cCharImg.setAttribute("class", "charImg");
    cCharImg.setAttribute("id","clickC2");
    cCharImg.setAttribute("alt", "C");

    cCardSub.setAttribute("class", "cardSub");

    cSelect.setAttribute("class", "charButton");
    cSelect.setAttribute("id", "cButton2");
    cSelect.appendChild(cName);

    cCard.appendChild(cCharImg);
    cCard.appendChild(cCardSub);
    cCardSub.appendChild(cSelect);

    document.getElementById("oppCharContainer").append(cCard);
    cCard.setAttribute("class", "cardClass");

    $("#cButton2").click(() => {
        compChar = characters[2];
        console.log(`computer char is ${compChar}`);
        nextScreen2();
    });
    $("#clickC2").click(()=>{
        compChar = characters[2];
        console.log(`computer char is ${compChar}`);
        nextScreen2(); 
    });

    // D (opponent)
    let dCard = document.createElement("div");
    let dCardSub = document.createElement("div");
    let dName = document.createTextNode(characters[3]);
    let dCharImg = document.createElement("img");
    let dSelect = document.createElement("button");

    dCharImg.setAttribute("src", "spookySelect.png");
    dCharImg.setAttribute("class", "charImg");
    dCharImg.setAttribute("id","clickD2");
    dCharImg.setAttribute("alt", "D");

    dCardSub.setAttribute("class", "cardSub");

    dSelect.setAttribute("class", "charButton");
    dSelect.setAttribute("id", "dButton2");
    dSelect.appendChild(dName);

    dCard.appendChild(dCharImg);
    dCard.appendChild(dCardSub);
    dCardSub.appendChild(dSelect);

    document.getElementById("oppCharContainer").append(dCard);
    dCard.setAttribute("class", "cardClass");

    $("#dButton2").click(() => {
        compChar = characters[3];
        console.log(`computer char is ${compChar}`);
        nextScreen2();
    });
    $("#clickD2").click(()=>{
        compChar = characters[3];
        console.log(`comp char is ${compChar}`);
        nextScreen2(); 
    });
};
