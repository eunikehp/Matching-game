// image array
fruitImg = [1, 2, 3, 4, 5, 6]

// initial value of variables
let numOfFruits = 0;
let level = "";
let currentLevel = "";

//DOM -Score
let score = document.querySelector('#score');
let numOfScore = Number(score.innerText);
let highScore = document.querySelector('#highScore');
let numOfHighScore = Number(highScore.innerText);
//DOM - Box
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

// addEventListener
document.querySelector('#startBtn').addEventListener('click', openPopUpLevel);

// Open Pop Up Level Function
const PopUpLevel = document.querySelector('#popUpLevel')
function openPopUpLevel(event) {
    PopUpLevel.classList.add('openPopupLevel');
    event.stopPropagation();
};
// close pop up Level Function
function closePopUpLevel() {
    PopUpLevel.classList.remove('openPopupLevel');
};

// addEvent Listener - Select Level
const easyLevel = document.querySelector('#easy');
easyLevel.addEventListener('click', () => playGame('Easy'));
easyLevel.addEventListener('click', closePopUpLevel);

const mediumLevel = document.querySelector('#medium');
mediumLevel.addEventListener('click', () => playGame('Medium'));
mediumLevel.addEventListener('click', closePopUpLevel);

const hardLevel = document.querySelector('#hard');
hardLevel.addEventListener('click', () => playGame('Hard'));
hardLevel.addEventListener('click', closePopUpLevel);

// playGame Function
function playGame(level) {
    console.log(`level: ${level} start: ${numOfFruits}`)
    if (level == 'Easy') {
        numOfFruits = 3;
        generateFruit('Easy');
    } else if (level == 'Medium') {
        numOfFruits = 5;
        generateFruit('Medium');
    } else {
        numOfFruits = 5;
        generateFruit('Hard')
    }
    document.querySelector('#showLevel').innerText = `Level: ${level}`;
}

// create random fruits on the left side
function generateFruit(level) {
    for (let i = 0; i < numOfFruits; i++) {
        const fruit = document.createElement('img');
        const randomImg = Math.floor(Math.random() * fruitImg.length) + 1
        fruit.src = `img/${randomImg}.png`;

        const randomTop = Math.floor(Math.random() * 400) + 1;
        const randomLeft = Math.floor(Math.random() * 500) + 1;

        fruit.style.top = randomTop + 'px';
        fruit.style.left = randomLeft + 'px';
        fruit.id = 'fruit';
        fruit.classList.add('fruit');

        theLeftSide.appendChild(fruit);
    };
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    console.log(`level: ${level} status: ${numOfFruits}`)
    if (level == 'Easy') {
        theLeftSide.lastChild.addEventListener('click', (event) => nextScore(event, 'Easy'));
    } else if (level == 'Medium') {
        theLeftSide.lastChild.addEventListener('click', (event) => nextScore(event, 'Medium'));
    } else {
        theLeftSide.lastChild.addEventListener('click', (event) => nextScore(event, 'Hard'));
    }
    theLeftSide.addEventListener('click', gameOver);
};

// adding score if the guess is right
function nextScore(event, level) {
    event.stopPropagation(); //prevents further propagation of the current event in the capturing and bubbling phases.
    numOfScore += 100;
    score.innerText = numOfScore;

    if (level == 'Easy') {
        numOfFruits += 1;
    } else if (level == 'Medium') {
        numOfFruits += 3;
    } else {
        numOfFruits += 5;
    };

    while (theLeftSide.firstChild) { //all fruits must be removed before a new set of faces is generated and added to the page. 
        theLeftSide.removeChild(theLeftSide.firstChild);
    };
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    };
    generateFruit(level);

}

// add update HighScore
const notifDiv = document.querySelector('#notifDiv');
const newNotif = document.createElement('div');
const catDiv = document.querySelector("#cat")

function theHighScore() {
    const currentScore = numOfScore;
    if (currentScore > numOfHighScore) {
        newNotif.innerText = `NEW HIGH SCORE! ${currentScore}`;
        newNotif.style.marginBottom = '30px';
        let currentHighScore = currentScore;
        highScore.innerText = currentHighScore;
        notifDiv.appendChild(newNotif);
        catDiv.src = "img/happy.png";
    } else {
        catDiv.src = "img/sad.png";
    };
};

//reset Button 
document.querySelector('#resetBtn').addEventListener('click', resetGame);
function resetGame(event) {
    event.stopPropagation();
    removeListener();
};


// game over Function
function gameOver(event) {
    event.stopPropagation();
    theHighScore();
    openPopUpGameOver();
    removeListener();

    //Quit Function
    document.querySelector('#quit').addEventListener('click', closePopUp);
    document.querySelector('#playAgain').addEventListener('click', closePopUp);
    document.querySelector('#playAgain').addEventListener('click', openPopUpLevel);

    easyLevel.removeEventListener('click', (event) => playGame(event, 'Easy'));
    mediumLevel.removeEventListener('click', (event) => playGame(event, 'Medium'));
    hardLevel.removeEventListener('click', (event) => playGame(event, 'Hard'));
}

// Open Pop Up  and Close Pop Up Game Over
function openPopUpGameOver() {
    document.querySelector('#popUpGameOver').classList.add('open-popup');
};
function closePopUp() {
    document.querySelector('#popUpGameOver').classList.remove('open-popup');
    while (notifDiv.firstChild) {
        notifDiv.removeChild(notifDiv.firstChild);
    };
};

//removeEventListener
function removeListener() {
    theLeftSide.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', (event) => nextScore(event, 'Easy'));
    theLeftSide.lastChild.removeEventListener('click', (event) => nextScore(event, 'Medium'));
    theLeftSide.lastChild.removeEventListener('click', (event) => nextScore(event, 'Hard'));
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    score.innerText = 0;
    numOfScore = 0;
    numOfFruits = 0;
}