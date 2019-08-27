# fstbrk-1.5

Fst brk is a basketball themed rock paper scisors game built with basic HTML, CSS, JavaScript and jQuery.
The goal of the game is to guess the match up correctly. First player to 10 wins the game. 
Enjoy!

Game Values
*Offense
-shoot
-crossover
-pass

*Defense
-block
-lockdown
-steal


Game matchups

*(If user is on offense)

-Shoot
shoot < block : user loses, computer +1 and possesion 
shoot > steal : user wins, user +1
shoot = lockdown: draw, user repeats turn

-Crossover
crossover > block : user wins, user +1
crossover < lockdown : user loses, computer +1 and possesion
crossover < steal : user loses, computer +1 and possesion

-Pass
pass > block: user wins, user +1
pass = lockdown: draw, user repeats turn
pass < steal: user loses, computer +1 and posession

*(if user is on defense)

-Block
block > shoot : user wins, user +1 change posession
block < crossover : user loses, computer +1
block < pass : user loses, computer +1

-Lockdown 
lockdown = shoot : draw, user repeats turn
lockdown > crossover : user wins, user +1 change posession
lockdown = pass : draw, user repeats turn

-Steal
steal < shoot : user loses, computer +1
steal > crossover : user wins, user +1 change posession
steal > pass : user wins, user +1 change posession 
