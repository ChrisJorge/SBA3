let word_list = ['Example', 'test', 'dictionary', 'Per Scholas', 'Coding', 'Software'];

let random_choice = Math.floor(Math.random() * 6);

let word = word_list[random_choice];

let container = document.getElementById('wordContainer');

for(let i = 0; i < word.length; i++)
{
    let letter = document.createElement('div');
    letter.setAttribute('class', 'letter');
    container.appendChild(letter);
}