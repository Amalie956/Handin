//1 - What To Wear
function clothesToWear(celsius) {
    if (celsius <= 15) {
        return "Du skal tage din jakke på!";
    } else {
        return "Nu kan du begynde at tage sommertøj på";
    }
}
console.log(clothesToWear(13));

//2 - Dice game
function diceGame(numberOfTimes) {
    let Hits6InEveryRoll = 0;
    for (let i = 1; i <= numberOfTimes; i++) {
        let logOut6 = Math.floor(Math.random() * 6) + 1;
        console.log(logOut6)
        if (logOut6 === 6) {
            Hits6InEveryRoll  = Hits6InEveryRoll  + 1;
            console.log("you hit 6!");
        }
    }
    if (Hits6InEveryRoll  === numberOfTimes) {
        console.log("jackpot");
    }
}
diceGame(1););