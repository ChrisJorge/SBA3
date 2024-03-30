let word_list = ['computer', 'test', 'object', 'perscholas', 'coding', 'software', 'integer', 'boolean', 'float', 'array'];

let random_choice = Math.floor(Math.random() * 10);

let word = word_list[random_choice];
let word_arr = []
let guessed_letters = []
let approved  = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numGuesses = 5;

let guessesLeft = document.querySelector('.attemptsLeft')

for(let i = 0; i < word.length; i++)
{
    word_arr.push(word[i])
}

let container = document.getElementById('wordContainer');

let guessSpots = word_arr.length
for(let i = 0; i < word.length; i++)
{
    let letterBox = document.createElement('div');
    letterBox.setAttribute('class', 'letter');
    container.appendChild(letterBox);
}

let submitBtn = document.querySelector(".submit-btn")
submitBtn.addEventListener('click', () => {
    let letter = getLetter()
    guess(letter);
    
})

window.addEventListener('keydown', (event) => {
   if(event.key === 'Enter')
   {
    let letter = getLetter()
    guess(letter)
   }
})
// For Testing Purposes
console.log(word)
// _______________________________

const guess = (letter) => {
    this.letter = letter;
    let announcement = document.querySelector('.upperContainer').lastElementChild;
    if(!approved.includes(letter))
    {
        announcement.style.color = "red";
        announcement.innerHTML = "Guess is not a letter, try again"
        return;
    }
    let guessed = document.querySelector('.guessedLetters')
    
    if(guessed_letters.includes(letter))
    {
      announcement.style.color = "red"
      announcement.innerHTML = `The letter ${letter.toUpperCase()} has already been guessed, try another letter`
      return;
    }
    guessed_letters.push(letter)

    if(word_arr.includes(letter))
    {
        searchForLetter(letter)
        announcement.style.color = "green"
        announcement.innerHTML = `Guessed Letter ${letter.toUpperCase()} is in the word!`
        guessed.innerHTML += ` ${letter.toUpperCase()},`
        gameActive(numGuesses, guessSpots)
    } 
    else {
       announcement.style.color = "red"
       announcement.innerHTML = `The letter ${letter.toUpperCase()} is not in the word`
       numGuesses --;
       guessed.innerHTML += ` ${letter.toUpperCase()},`
       guessesLeft.innerHTML = `Guesses Left: ${numGuesses}`
       gameActive(numGuesses, guessSpots)
    }

}

const gameActive = (count, spots) => {
    this.count = count;
    let announcement = document.querySelector('.upperContainer').lastElementChild;
    if(guessSpots === 0)
    {
        announcement.style.color = "green";
        announcement.innerHTML = "You correctly guessed the word!!!";
        disabled()
        return;
    }
    console.log(count)
    if (count > 0){
        
    }
    else {
        announcement.style.color = "red"
        announcement.innerHTML = "Game Over: Unable to guess to guess the word"
        disabled();
    }
}

const disabled = () => {
    let input = document.querySelector('#input');
    input.setAttribute('disabled', true);
    let submitBtn = document.querySelector('.submit-btn');
    submitBtn.setAttribute('disabled', true);
}

const searchForLetter = (letter) => {
    this.letter = letter
    console.log(letter)
    for(i = 0; i < word_arr.length; i++)
    {
        if(word_arr[i] === letter)
        {
            let index = i
            console.log(index)
            let box = document.querySelectorAll('.letter')[index];
            box.innerHTML = letter.toUpperCase();
            guessSpots --;
        }
        else {
            continue;
        }
    }
}

const getLetter = () => {
    let char = document.getElementById('input');
    let letter = char.value;
    letter = letter.toLowerCase();
    char.value = '';
    return letter;
}