let value = ["offense", "defense"];

let offVal = ["Shoot", "Crossover", "Pass",];
let defVal = ["Block", "Lockdown", "Steal"];

let userValue = "";
let compValue = "";

let userMoveOptions = "";
let compMoveOptions = "";

let userPossession = "";
let compPossession = "";

let userMove = "";
let ComprMove = "";

let userScore = 1;
let compScore = 1;

var randomPossession = value[Math.floor(Math.random() * value.length)];
console.log(randomPossession);

const newGame = () => {
    $("#newGame").click(function () {
        window.location.reload(true)
    });
};

const jumpball = () => {

    if (randomPossession == value[0]) {
        $("#defensive_button_container").hide();
        userValue = offVal;
        compValue = defVal;
        userPossession = value[0];
        compPossesion = value[1];
        console.log("your moves:" + offVal);
        console.log("computer moves:" + defVal);
    }
    else {
        $("#offensive_button_container").hide();
        userValue = defVal;
        compValue = offVal;
        userPossession = value[1];
        compPossesion = value[0];
        console.log("your moves:" + defVal);
        console.log("computer moves:" + offVal);
    };
};

const toggleswitch = () => {
    $("#offensive_button_container, #defensive_button_container").toggle();
};

const stopGameforUser = () => {
    if (userScore > 5) {
        $("#comp_score").hide();
        $("#user_score").hide();
        $("#offensive_button_container").hide();
        $("#defensive_button_container").hide();
        $("#user_move").hide();
        $("#comp_move").hide();
        $("#match_response").hide();
        $("#gameOver").text("Congratulations! You win!");
        $("#moveContainer").hide(); 

        let newGameButton = document.createElement("button");
        var text = document.createTextNode("Play again");
        newGameButton.appendChild(text);
        document.getElementById("game_reset").append(newGameButton);
        newGameButton.setAttribute("id", "newGame");
        newGame();
    };
};

const stopGameforComputer = () => {
    if (compScore > 5) {

        $("#comp_score").hide();
        $("#user_score").hide();
        $("#offensive_button_container").hide();
        $("#defensive_button_container").hide();
        $("#user_move").hide();
        $("#comp_move").hide();
        $("#match_response").hide();
        $("#gameOver").text("Sorry, you lose");
        $("#moveContainer").hide();

        let newGameButton = document.createElement("button");
        let text = document.createTextNode("Play again");
        newGameButton.appendChild(text);
        document.getElementById("game_reset").append(newGameButton);
        newGameButton.setAttribute("id", "newGame");
        newGame();

    };
};

const userScoreboard = () => {

    $("#user_score").text(userScore++);

    console.log(userScore);

    stopGameforUser();
};

const computeScoreboard = () => {

    $("#comp_score").text(compScore++);

    console.log(compScore);

    stopGameforComputer();
};

const offensive_buttons = () => {
    // shoot
    let shootButton = document.createElement("button");
    let stext = document.createTextNode("Shoot");
    shootButton.appendChild(stext);
    document.getElementById("offensive_button_container").append(shootButton);
    shootButton.setAttribute("id", "shootId");
    // crossover
    let crossoverButton = document.createElement("button");
    let ctext = document.createTextNode("Cross Over");
    crossoverButton.appendChild(ctext);
    document.getElementById("offensive_button_container").append(crossoverButton);
    crossoverButton.setAttribute("id", "crossoverId");
    // pass
    let passButton = document.createElement("button");
    let ptext = document.createTextNode("Pass");
    passButton.appendChild(ptext);
    document.getElementById("offensive_button_container").append(passButton);
    passButton.setAttribute("id", "passtId");
};

/***************************Defensive buttons */

const defensive_buttons = () => {
    // block
    let blockButton = document.createElement("button");
    let btext = document.createTextNode("Block");
    blockButton.appendChild(btext);
    document.getElementById("defensive_button_container").append(blockButton);
    blockButton.setAttribute("id", "blockId");
    // lockdown
    let lockdownButton = document.createElement("button");
    let ltext = document.createTextNode("Lockdown");
    lockdownButton.appendChild(ltext);
    document.getElementById("defensive_button_container").append(lockdownButton);
    lockdownButton.setAttribute("id", "lockdownId");
    // steal
    let stealButton = document.createElement("button");
    let stext = document.createTextNode("Steal");
    stealButton.appendChild(stext);
    document.getElementById("defensive_button_container").append(stealButton);
    stealButton.setAttribute("id", "stealId");
};

$("#userStatus").hide();
$("#compStatus").hide();

/************************************************************************************************************* */
// Actual Game Logic

const logic = () => {

    $("#court_header").hide();
    $("#courtSlctContainer").hide();
    $("#user_score").text(userChar + "00");
    $("#comp_score").text(compChar + "00 ");

    console.log("you are " + userChar)
    console.log("comp is " + compChar );
    console.log("court is "+ court)
    
    jumpball();
    
    var shootButton = document.createElement("button");
    var text = document.createTextNode("Shoot");
    shootButton.appendChild(text);
    document.getElementById("offensive_button_container").append(shootButton);
    shootButton.setAttribute("id", "shootId");

    var crossoverButton = document.createElement("button");
    var text = document.createTextNode("Cross Over");
    crossoverButton.appendChild(text);
    document.getElementById("offensive_button_container").append(crossoverButton);
    crossoverButton.setAttribute("id", "crossoverId");

    var passButton = document.createElement("button");
    var text = document.createTextNode("Pass");
    passButton.appendChild(text);
    document.getElementById("offensive_button_container").append(passButton);
    passButton.setAttribute("id", "passId");

    var blockButton = document.createElement("button");
    var text = document.createTextNode("Block");
    blockButton.appendChild(text);
    document.getElementById("defensive_button_container").append(blockButton);
    blockButton.setAttribute("id", "blockId");

    var lockdownButton = document.createElement("button");
    var text = document.createTextNode("Lockdown");
    lockdownButton.appendChild(text);
    document.getElementById("defensive_button_container").append(lockdownButton);
    lockdownButton.setAttribute("id", "lockdownId");

    var stealButton = document.createElement("button");
    var text = document.createTextNode("Steal");
    stealButton.appendChild(text);
    document.getElementById("defensive_button_container").append(stealButton);
    stealButton.setAttribute("id", "stealId");

    // Offensive Logic

    // conditional logic for shoot
    $("#shootId").click(function () {
        console.log("your moves:" + userValue);
        console.log("computer moves:" + compValue);
        compMove = defVal[Math.floor(Math.random() * defVal.length)];
        console.log(compMove);
        console.log("You choose: shoot")
        console.log("Computer did: " + compMove);

        if (compMove == defVal[0]) {
            console.log("lose")
            $("#outome").text("Lose");
            $("#match_response").text("Your shot was blocked. It happens to the best of us.")
            $("#user_move").text("Shoot")
            $("#computer_move").text(compMove)
            toggleswitch();
            computeScoreboard();
        }
        else if (compMove == defVal[2]) {
            console.log("win")
            $("#outcome").text("Win");
            $("#match_response").text("Your opponent attempted to steal but you shot it right in there face")
            $("#user_move").text("Shoot")
            $("#computer_move").text(compMove)
            userScoreboard();
        }
        else {
            console.log("draw")
            $("#outcome").text("Draw");
            $("#match_response").text("Your opponent put the locks down. This might be tough.")
            $("#user_move").text("Shoot")
            $("#computer_move").text(compMove)
        }
    });

    // Conditional logic for crossover
    $("#crossoverId").click(function () {
        console.log("your moves:" + userValue);
        console.log("computer moves:" + compValue);
        compMove = defVal[Math.floor(Math.random() * defVal.length)];
        console.log(compMove);
        console.log("You choose: crossover")
        console.log("Computer did:" + compMove);

        if (compMove == defVal[0]) {
            console.log("win")
            $("#outcome").text("Win");
            $("#match_response").text("Your opponent bit on the crossover. Good move!")
            $("#user_move").text("Crossover")
            $("#computer_move").text(compMove)
            userScoreboard()

        }
        else {
            console.log("lose")
            $("#outcome").text("Lose")
            $("#match_response").text("Your opponent saw the crossover coming. Try again.")
            $("#user_move").text("Crossover")
            $("#computer_move").text(compMove)
            toggleswitch();
            computeScoreboard();
        }
    });

    // Conditional logic for pass
    $("#passId").click(function () {
        console.log("your moves:" + userValue);
        console.log("computer moves:" + compValue);
        compMove = defVal[Math.floor(Math.random() * defVal.length)];
        console.log(compMove);
        console.log("You choose: pass")
        console.log("Computer did:" + compMove);

        if (compMove == defVal[0]) {
            console.log("win")
            $("#outcome").text("Win")
            $("#match_response").text("You got the ball to the open man. Good court vision.")
            $("#user_move").text("Pass")
            $("#computer_move").text(compMove)
            userScoreboard();
        }
        else if (compMove == defVal[2]) {
            console.log("lose")
            $("#outcome").text("Lose");
            $("#match_response").text("Your opponent read the play and stole the ball. Keep going.")
            $("#user_move").text("Pass")
            $("#computer_move").text(compMove)
            toggleswitch();
            computeScoreboard();
        }
        else {
            console.log("draw");
            $("#outcome").text("Draw");
            $("#match_response").text("Your opponent is locked in. It won't be that easy.")
            $("#user_move").text("Pass")
            $("#computer_move").text(compMove)
        }
    });

    // Defensive Logic

    // Conditional logic for block
    $("#blockId").click(function () {
        console.log("your moves:" + userValue);
        console.log("computer moves:" + compValue);
        compMove = offVal[Math.floor(Math.random() * offVal.length)];

        console.log(compMove);

        console.log("You choose: block")
        console.log("Computer did:" + compMove);

        if (compMove == offVal[0]) {
            console.log("win");
            $("#outcome").text("Win");
            $("#match_response").text("You beat that shot up! Let them know you're not the one.")
            $("#user_move").text("Block")
            $("#computer_move").text(compMove)
            userScoreboard();
            toggleswitch();
        }
        else {
            console.log("lose");
            $("#outcome").text("Lose");
            $("#match_response").text("Your opponent is just too fast. Keep up!")
            $("#user_move").text("Block")
            $("#computer_move").text(compMove)

            computeScoreboard();
        }

    });
    // Conditional logic for lockdown
    $("#lockdownId").click(function () {
        console.log("your moves:" + userValue);
        console.log("computer moves:" + compValue);
        compMove = offVal[Math.floor(Math.random() * offVal.length)];

        console.log(compMove);

        console.log("You choose: lockdown")
        console.log("Computer did:" + compMove);

        if (compMove == offVal[0]) {
            console.log("draw");
            $("#outcome").text("Draw");
            $("#match_response").text("Good defense. Now to convert!")
            $("#user_move").text("Lockdown")
            $("#computer_move").text(compMove)

        }
        else if (compMove == offVal[1]) {
            toggleswitch();
            console.log("win");
            $("#outcome").text("Win");
            $("#match_response").text("Your defense is just too good for their tired moves.")
            userScoreboard();
            $("#user_move").text("Lockdown")
            $("#computer_move").text(compMove)
        }
        else {
            console.log("draw")
            $("#outcome").text("Draw");
            $("#match_response").text("Good defense. Lets go!")
            $("#user_move").text("Lockdown")
            $("#computer_move").text(compMove)
        }
    });

    // Conditional logic for steal
    $("#stealId").click(function () {
        console.log("your moves:" + userValue);
        console.log("computer moves:" + compValue);
        compMove = offVal[Math.floor(Math.random() * offVal.length)];

        console.log(compMove);

        console.log("You choose: steal")
        console.log("Computer did:" + compMove);

        if (compMove == offVal[0]) {
            console.log("lose");
            $("#outcome").text("Lose");
            $("#match_response").text("You made the wrong read. No worries, keep going!")
            $("#user_move").text("Steal")
            $("#computer_move").text(compMove)
            computeScoreboard();
        }
        else {
            console.log("win")
            $("#outcome").text("Win");
            $("#match_response").text("Good eye. Even better defense!")
            $("#user_move").text("Steal")
            $("#computer_move").text(compMove)
            toggleswitch();
            userScoreboard();
        }
    });
};

