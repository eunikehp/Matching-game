let score = document.querySelector('#score');
let numOfScore = Number(score.innerText);

let highScore = document.querySelector('#highScore');
let numOfHighScore = Number(highScore.innerText);

fruitImg = [1, 2, 3, 4, 5, 6]
let numOfFruits = 5;

const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

// click start button to run the function
document.querySelector('#startBtn').addEventListener('click', generateFruit);

// create random fruits on the left side
function generateFruit() {
    for (let i = 0; i < numOfFruits; i++) {
        const fruit = document.createElement('img');
        const randomImg = Math.floor(Math.random() * fruitImg.length) + 1
        fruit.src = `img/${randomImg}.png`;

        const randomTop = Math.floor(Math.random() * 400) + 1;
        const randomLeft = Math.floor(Math.random() * 500) + 1;

        fruit.style.top = randomTop + 'px';
        fruit.style.left = randomLeft + 'px';
        fruit.id = 'fruit';

        theLeftSide.appendChild(fruit);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextScore);
    theLeftSide.lastChild.addEventListener('click', theHighScore);
    theLeftSide.addEventListener('click', gameOver);
};

// adding score if the guess is right
function nextScore(event) {
    event.stopPropagation(); //prevents further propagation of the current event in the capturing and bubbling phases.

    // add score
    numOfScore += 100;
    score.innerText = numOfScore;

    numOfFruits += 3;
    while (theLeftSide.firstChild) { //all fruits must be removed before a new set of faces is generated and added to the page. 
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFruit();
}

function theHighScore() {
    //add highscore
    if (numOfScore <= numOfHighScore) {
        return numOfHighScore;
    } else {
        numOfHighScore += 100;
        highScore.innerText = numOfHighScore;
    }
}

//reset Button 
document.querySelector('#resetBtn').addEventListener('click', resetGame);
function resetGame(event) {
    event.stopPropagation();
    score.innerText = 0;
    numOfScore = 0;
    numOfFruits = 5;

    theLeftSide.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextScore);
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
};


// game over
function gameOver(event) {
    event.stopPropagation();
    // alert('Game Over!');
    openPopUp();
    theLeftSide.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextScore);
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    score.innerText = 0;
    numOfScore = 0;
    numOfFruits = 5;
}

// Pop Up 
const PopUp = document.querySelector('#popUp')
function openPopUp() {
    PopUp.classList.add('open-popup');
}

document.querySelector('#closePopUp').addEventListener('click', closePopUp)
function closePopUp() {
    PopUp.classList.remove('open-popup');
}