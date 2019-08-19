const display = () => {
    const game = () => {
        logic();
    }

    // Court display
    let bgDisplay = document.createElement("div");
    let bgSub = document.createElement("div");
    let bgName = document.createTextNode(court);
    let bgCourtImg = document.createElement("img");
    
    let outcome = document.createElement("div");
    outcome.setAttribute("id", "outcome");

    if(court === courts[0]){
        bgCourtImg.setAttribute("src", "bgday.png");
        bgCourtImg.setAttribute("class", "displayCourtImg");
        bgCourtImg.setAttribute("alt", "");
    
        bgSub.setAttribute("class", "displaySub");
    
        bgDisplay.appendChild(bgCourtImg);
        bgDisplay.appendChild(bgSub);
        bgDisplay.appendChild(bgSub);
        bgSub.appendChild(bgName);
    
      document.getElementById("gameInfoContainer").appendChild(outcome);
    
        document.getElementById("imgBg").append(bgDisplay);
        bgDisplay.setAttribute("class", "displayContainer");
    }
    else{

        bgCourtImg.setAttribute("src", "bgnite.png");
        bgCourtImg.setAttribute("class", "displayCourtImg");
        bgCourtImg.setAttribute("alt", "");
    
        bgSub.setAttribute("class", "displaySub");
    
        bgDisplay.appendChild(bgCourtImg);
        bgDisplay.appendChild(bgSub);
        bgDisplay.appendChild(bgSub);
        bgSub.appendChild(bgName);
    
      document.getElementById("gameInfoContainer").appendChild(outcome);
    
        document.getElementById("imgBg").append(bgDisplay);
        bgDisplay.setAttribute("class", "displayContainer");
    }

    // user

    if(userChar === characters[0]){
    let userCharDisplay = document.createElement("img");

    userCharDisplay.setAttribute("src", "archie.png");
    userCharDisplay.setAttribute("class", "userDisplayImg");

    document.getElementById("imgBg").append(userCharDisplay);
    }

    else if(userChar === characters[1]){
    let userCharDisplay = document.createElement("img");

    userCharDisplay.setAttribute("src", "zia.png");
    userCharDisplay.setAttribute("class", "userDisplayImg");

    document.getElementById("imgBg").append(userCharDisplay);

    }
    else if(userChar === characters[2]){
        let userCharDisplay = document.createElement("img");

        userCharDisplay.setAttribute("src", "Chevy.png");
        userCharDisplay.setAttribute("class", "userDisplayImg");
    
        document.getElementById("imgBg").append(userCharDisplay);
    }
    else{
        let userCharDisplay = document.createElement("img");

        userCharDisplay.setAttribute("src", "spooky.png");
        userCharDisplay.setAttribute("class", "userDisplayImg");
    
        document.getElementById("imgBg").append(userCharDisplay);
    }

    // computer

    if(compChar === characters[0]){

        let compCharDisplay = document.createElement("img");

        compCharDisplay.setAttribute("src", "archie.png");
        compCharDisplay.setAttribute("class", "compDisplayImg");
    
        document.getElementById("imgBg").append(compCharDisplay);
    }
    else if(compChar === characters[1]){

        let compCharDisplay = document.createElement("img");

        compCharDisplay.setAttribute("src", "zia.png");
        compCharDisplay.setAttribute("class", "compDisplayImg");
    
        document.getElementById("imgBg").append(compCharDisplay);

    }
    else if(compChar === characters[2]){

        let compCharDisplay = document.createElement("img");

        compCharDisplay.setAttribute("src", "Chevy.png");
        compCharDisplay.setAttribute("class", "compDisplayImg");
    
        document.getElementById("imgBg").append(compCharDisplay);

    }
    else{ 

        let compCharDisplay = document.createElement("img");

        compCharDisplay.setAttribute("src", "spooky.png");
        compCharDisplay.setAttribute("class", "compDisplayImg");
    
        document.getElementById("imgBg").append(compCharDisplay);

    }

    game();

};