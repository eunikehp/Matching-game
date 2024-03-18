let level = document.querySelector('#level');
let numOfLevel = Number(level.innerText);


let numOfButterflies = 5;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

// create random butterflies on the left side
function generateButterflies() {
    for (let i = 0; i < numOfButterflies; i++) {
        const butterfly = document.createElement('img');
        butterfly.src = 'img/butterfly.png';

        const randomTop = Math.floor(Math.random() * 400) + 1;
        const randomLeft = Math.floor(Math.random() * 400) + 1;

        butterfly.style.top = randomTop + 'px';
        butterfly.style.left = randomLeft + 'px';

        theLeftSide.appendChild(butterfly);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    theLeftSide.addEventListener('click', gameOver);
}

// load the function
window.addEventListener('load', generateButterflies);

function nextLevel(event) {
    event.stopPropagation(); //prevents further propagation of the current event in the capturing and bubbling phases.
    numOfLevel += 1;
    level.innerText = numOfLevel; // add level
    numOfButterflies += 5;
    while (theLeftSide.firstChild) { //all butterflies must be removed before a new set of faces is generated and added to the page. 
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateButterflies();

}

function gameOver() {
    alert('Game Over!');
    theLeftSide.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
}

// const resetButton = document.getElementById('resetBtn');
// resetButton.addEventListener('click', function () {
//     document.getElementById('level').innerText = '1';

//     while (theLeftSide.firstChild) { //all butterflies must be removed before a new set of faces is generated and added to the page. 
//         theLeftSide.removeChild(theLeftSide.firstChild);
//     }
//     while (theRightSide.firstChild) {
//         theRightSide.removeChild(theRightSide.firstChild);
//     }
//     generateButterflies();
// });