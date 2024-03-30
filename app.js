let word_list = ['example', 'test', 'dictionary', 'perscholas', 'coding', 'software'];

let random_choice = Math.floor(Math.random() * 6);

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
    let char = document.getElementById('input');
    let letter = char.value;
    letter = letter.toLowerCase();
    guess(letter);
    
})
// For Testing Purposes
console.log(word)
// _______________________________

const guess = (letter) => {
    this.letter = letter;
    console.log(typeof(letter))
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
        let index = (word_arr.indexOf(letter))
        let box = document.querySelectorAll('.letter')[index]
        announcement.style.color = "green"
        announcement.innerHTML = `Guessed Letter ${letter.toUpperCase()} is in the word!`
        box.innerHTML = letter.toUpperCase()
        guessed.innerHTML += ` ${letter.toUpperCase()},`
        guessSpots --;
        console.log(guessSpots)
        gameActive(numGuesses, guessSpots)
    } 
    else {
       announcement.style.color = "red"
       announcement.innerHTML = `The letter ${letter.toUpperCase()} is not in the word`
       numGuesses --;
       guessed.innerHTML += ` ${letter.toUpperCase()},`
       guessesLeft.innerHTML = `Guesses Left: ${numGuesses}`
    }

}

const gameActive = (count, spots) => {
    this.count = count
    if(guessSpots === 0)
    {
        alert('User Wins')
    }
    if (count > 0){
        console.log('Game Still active')
    }
    else {
        console.log('Game Over')
    }
}
