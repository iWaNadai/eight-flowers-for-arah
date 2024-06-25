
//get time
const DAY_ONE = new Date('3/4/2023');
const TODAY = new Date();
const TIME_DIFFERENCE = Math.abs(TODAY - DAY_ONE);
const DAY_DIFFERENCE = Math.floor(TIME_DIFFERENCE / (1000 * 60 * 60 * 24));
//get index
const MESSAGE_INDEX = DAY_DIFFERENCE % 8;
//get elements
const CONTAINER = document.querySelector('#Container');
const IMAGE = document.querySelector('#Background');
//set environment
const WORD = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'][MESSAGE_INDEX];
const NUMBER = ['1','2','3','4','5','6','7','8'][MESSAGE_INDEX];

['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    .forEach(word => {
        if (word === WORD) {
            CONTAINER.classList.add(WORD);
            IMAGE.classList.add(WORD)
            return
        }
        CONTAINER.classList.remove(word);
        IMAGE.classList.remove(word)

    })
IMAGE.src = `./images/${NUMBER}.JPG`;

console.log('I Love You Arah');
