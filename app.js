let word_list = ['example', 'test', 'dictionary', 'perscholas', 'coding', 'software'];

let random_choice = Math.floor(Math.random() * 6);

let word = word_list[random_choice];
let word_arr = []
let guessed_letters = []

for(let i = 0; i < word.length; i++)
{
    word_arr.push(word[i])
}

let container = document.getElementById('wordContainer');

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
console.log(word)
const guess = (letter) => {
    this.letter = letter;
    
    if(guessed_letters.includes(letter))
    {
        console.log('Letter has already been guessed');
        return;
    }
    guessed_letters.push(letter)

    if(word_arr.includes(letter))
    {
        let index = (word_arr.indexOf(letter))
        let box = document.querySelectorAll('.letter')[index]
        box.innerHTML = letter
    } 
    else {
        console.log('letter not in word')
    }

}