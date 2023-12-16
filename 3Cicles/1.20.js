function getRandomInt(min, max) 
{                                           // I recomend running this with something like online google console
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessANum()
{
    do
    {
        let num = getRandomInt(0, 10);
        console.log(num);

        let guess = prompt("Guess a number (42 to exit)");
        if (guess == 42) break;
        
        if(num == guess) alert("You won!");
        else alert("You lost ):");

    }
    while(1);
}

guessANum();