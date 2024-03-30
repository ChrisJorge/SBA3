// Create a list of words
let word_list = ['computer', 'test', 'object', 'perscholas', 'coding', 'software', 'integer', 'boolean', 'float', 'array'];

// Get a random number from 0 - 9 (indexes of the word_list array)
let random_choice = Math.floor(Math.random() * 10);

// Assign the word randomly and instantiate other necessary variables
let word = word_list[random_choice];
let word_arr = []
let guessed_letters = []
let approved  = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numGuesses = 5;

// Cache document variables necessary for functionality
let guessesLeft = document.querySelector('.attemptsLeft')
let container = document.getElementById('wordContainer');

// Push each letter of the chosen word into an array
for(let i = 0; i < word.length; i++)
{
    word_arr.push(word[i])
}


// Get number of spots (Used to check if user won)
let guessSpots = word_arr.length

// Create the necessary number of boxes based on number of letters in word
for(let i = 0; i < word.length; i++)
{
    let letterBox = document.createElement('div');
    letterBox.setAttribute('class', 'letter');
    container.appendChild(letterBox);
}

// Event listener for submit button
let submitBtn = document.querySelector(".submit-btn")
submitBtn.addEventListener('click', () => {
    // Function converting users letter to lowercase and resetting input field
    let letter = getLetter()
    // Function which handles if the input is valid, correct, or incorrect
    guess(letter);
    
})

// Event listener for the enter key
window.addEventListener('keydown', (event) => {
   if(event.key === 'Enter')
   {
    // Function converting users letter to lowercase and resetting input field
    let letter = getLetter()
     // Function which handles if the input is valid, correct, or incorrect
    guess(letter)
   }

})

// For Testing Purposes
console.log(word)
// _______________________________

const guess = (letter) => {
    this.letter = letter;
    // Cache variable used to display to user if guess was correct, incorrect, or invalid
    let announcement = document.querySelector('.upperContainer').lastElementChild;
    // Check users input against approved inputs
    if(!approved.includes(letter))
    {
        announcement.style.color = "red";
        announcement.innerHTML = "Guess is not a letter, try again"
        return;
    }
    // Cache location of the guessed letters paragraph element
    let guessed = document.querySelector('.guessedLetters')
    
    // Check if guessed letter has been guessed already
    if(guessed_letters.includes(letter))
    {
      announcement.style.color = "red"
      announcement.innerHTML = `The letter ${letter.toUpperCase()} has already been guessed, try another letter`
      return;
    }
    guessed_letters.push(letter)

    // Check if the guessed letter is part of the word
    if(word_arr.includes(letter))
    {
        // Function that adds the letter into its corresponding box
        searchForLetter(letter)
        announcement.style.color = "green"
        announcement.innerHTML = `Letter ${letter.toUpperCase()} is in the word!`
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

// Checks if the game is still in progress, or if it is over
const gameActive = (count, spots) => {
    this.count = count;
    this.spots = spots
    let announcement = document.querySelector('.upperContainer').lastElementChild;
    if(spots === 0)
    {
        announcement.style.color = "green";
        announcement.innerHTML = "You correctly guessed the word!!!";
        disabled()
        let container = document.querySelector('.inputContainer');
        btn = document.createElement('button');
        btn.setAttribute('class', 'show-btn');
        btn.setAttribute('onClick', 'reset()');
        btn.textContent = "Replay"
        container.appendChild(btn);

    }

    if (count > 0){
        
    }
    else {
        announcement.style.color = "red";
        announcement.innerHTML = "Game Over: Unable to guess the word";
        // Function that disabled the input field and submit button
        disabled();
        let container = document.querySelector('.inputContainer');
        let btn = document.createElement('button');
        btn.setAttribute('class', 'show-btn');
        btn.setAttribute('onClick', 'show()');
        btn.textContent = "Click to show word"
        container.appendChild(btn);

        btn = document.createElement('button');
        btn.setAttribute('class', 'show-btn');
        btn.setAttribute('onClick', 'reset()');
        btn.textContent = "Replay"
        container.appendChild(btn);

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

// Function that shows the word if the user looses and clicks on the button
const show = () => 
{
   for(let i = 0; i < word_arr.length; i++)
   {
    let box = document.querySelectorAll('.letter')[i];
    box.innerHTML = word_arr[i].toUpperCase()
   }
}

const reset = () =>{
    window.location.reload();
}
