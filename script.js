// image array
fruitImg = [1, 2, 3, 4, 5, 6];

// initial value of variables
let numOfFruits = 0;
let level = "";

//DOM -Score
let score = document.querySelector('#score');
let numOfScore = Number(score.innerText);
let highScore = document.querySelector('#highScore');
let numOfHighScore = Number(highScore.innerText);
//DOM - div
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');
const notifDiv = document.querySelector('#notifDiv');
const newNotif = document.createElement('div');
const catDiv = document.querySelector("#cat")

// addEventListener
document.querySelector('#startBtn').addEventListener('click', openPopUpLevel);
document.querySelector('#resetBtn').addEventListener('click', resetGame);

// Open Pop Up Level Function
function openPopUpLevel(event) {
    document.querySelector('#popUpLevel').classList.add('openPopupLevel');
    event.stopPropagation();
};
// close pop up Level Function
function closePopUpLevel() {
    document.querySelector('#popUpLevel').classList.remove('openPopupLevel');
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
    };
    document.querySelector('#showLevel').innerText = `Level: ${level}`;
};

// create random fruits on the left side
function generateFruit(level) {
    for (let i = 0; i < numOfFruits; i++) {
        const fruit = document.createElement('img');
        const randomImg = Math.floor(Math.random() * fruitImg.length) + 1
        // fruit.src = `img/${randomImg}.png`;
        fruit.src = `${randomImg}.png`;

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

    console.log(`level: ${level} status: ${numOfFruits}`);
    if (level == 'Easy') {
        theLeftSide.lastChild.addEventListener('click', (event) => nextScore(event, 'Easy'));
        console.log("press easy last child button")
        theLeftSide.addEventListener('click', (event) => gameOver(event,'Easy'));
        console.log("press easy button")
    } else if (level == 'Medium') {
        theLeftSide.lastChild.addEventListener('click', (event) => nextScore(event, 'Medium'));
        theLeftSide.addEventListener('click', (event) => gameOver(event,'Medium'));
        console.log("press medium button")
    } else if (level == 'Hard'){
        theLeftSide.lastChild.addEventListener('click', (event) => nextScore(event, 'Hard'));
        theLeftSide.addEventListener('click', (event) => gameOver(event,'Hard'));
        console.log("press hard button")
    }

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
let currentHighScore = 0;
function theHighScore() {
    let currentScore = numOfScore;
    console.log(`currentScore: ${currentScore} currentHS: ${currentHighScore}`)
    if (currentScore > currentHighScore) {
        newNotif.innerText = `NEW HIGH SCORE! ${currentScore}`;
        currentHighScore = currentScore;
        highScore.innerText = currentHighScore;
        newNotif.style.marginBottom = '30px';
        notifDiv.appendChild(newNotif);
        catDiv.src = "happy.png";
        // catDiv.src = "img/happy.png";
    } else {
        catDiv.src = "sad.png";
        // catDiv.src = "img/sad.png";
        
    };
};

//reset Button 
function resetGame(event) {
    event.stopPropagation();
    numOfHighScore = 0;
    highScore.innerText = 0;
    currentHighScore = 0;
    removeListener();
    document.querySelector('#showLevel').innerText = "";
};

// game over Function
function gameOver(event,level) {
    console.log('showGameOver');
    event.stopPropagation();
    theHighScore();
    openPopUpGameOver();
    removeListener();

    console.log('end showGameOver');
    //removeEventListener
    easyLevel.removeEventListener('click', (event) => playGame(event, 'Easy'));
    mediumLevel.removeEventListener('click', (event) => playGame(event, 'Medium'));
    hardLevel.removeEventListener('click', (event) => playGame(event, 'Hard'));

    // Quit Function
    document.querySelector('#quit').addEventListener('click', quitGame);
    document.querySelector('#playAgain').addEventListener('click', closePopUp);

    // event.stopPropagation();
    if (level == 'Easy') {
        document.querySelector('#playAgain').addEventListener('click', playGame('Easy'));
    } else if (level == 'Medium') {
        document.querySelector('#playAgain').addEventListener('click', playGame('Medium'));
    } else {
        document.querySelector('#playAgain').addEventListener('click', playGame('Hard'));
    };
}


// Open Pop Up  and Close Pop Up Game Over
function openPopUpGameOver() {
    document.querySelector('#popUpGameOver').classList.add('open-popup');
    console.log("open works")
};
function closePopUp() {
    document.querySelector('#popUpGameOver').classList.remove('open-popup');
    while (notifDiv.firstChild) {
        notifDiv.removeChild(notifDiv.firstChild);
    };
};

//Quit Game Function
function quitGame(event) {
    document.querySelector('#popUpGameOver').classList.remove('open-popup');
    while (notifDiv.firstChild) {
        notifDiv.removeChild(notifDiv.firstChild);
    };
    resetGame(event);
};

//removeEventListener
function removeListener() {
    // // theLeftSide.removeEventListener('click', gameOver);
    theLeftSide.removeEventListener('click', () => gameOver('Easy'));
    theLeftSide.removeEventListener('click', () => gameOver('Medium'));
    theLeftSide.removeEventListener('click', () => gameOver('Hard'));

    // theLeftSide.lastChild.removeEventListener('click', (event) => nextScore(event, 'Easy'));
    // theLeftSide.lastChild.removeEventListener('click', (event) => nextScore(event, 'Medium'));
    // theLeftSide.lastChild.removeEventListener('click', (event) => nextScore(event, 'Hard'));
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
        console.log("remove left works")
    };
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
        console.log("remove right works")
    };
    score.innerText = 0;
    numOfScore = 0;
    numOfFruits = 0;
    console.log("end of removelistener");
};