const n = 20;
const array = [];
const myCanvas = document.querySelector('#myCanvas');
myCanvas.width = 400;
myCanvas.height = 300;
const margin = 30;
let moves = [];
const cols = [];
const spacing = (myCanvas.width -margin*2) / n;
const ctx = myCanvas.getContext('2d');  //used for getting context for drawing in the canavas(drawing capabilities of the HTML5 canvas), It provides methods to set colors, draw shapes, render text, and much more.

const maxColumnHeight = 200;
init();

function init() {
    
    for (let index = 0; index < n; index++) {
        array[index]=Math.random() ;
    }
    moves = [];

    for (let i = 0; i < array.length; i++) {
        const x = i * spacing + spacing / 2+margin;
        const y = myCanvas.height-margin-i*3;
        const width = spacing-3;
        const height = maxColumnHeight * array[i];
        cols[i] = new Column(x, y, width, height);
        cols[i].draw(ctx);   
    }
}
// console.log(array);

function play_bubble() {
    moves = bubbleSort(array);
}

function play_insertion() {
    moves = insertionSort(array);
}

function play_merge() {
    moves = mergeSort(array.slice());
}

animate();

function bubbleSort(array) {
    let moves = [];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                moves.push({ indices: [j, j + 1], swap: true });
            } else {
                moves.push({ indices: [j, j + 1], swap: false });
            }
        }
        
    }
    return moves;
}

function insertionSort(array) {
    let moves = [];
    let n = array.length;

    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            moves.push({ indices: [j, j + 1], swap: true });
            j = j - 1;
        }
        array[j + 1] = key;
        moves.push({ indices: [j + 1, i], swap: false });
    }

    return moves;
}

function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    let changed = false;
    for (let i = 0; i < cols.length; i++){
        changed=cols[i].draw(ctx)||changed;
    }
    if (!changed && moves.length>0) {
        const move = moves.shift();
        const [i, j] = move.indices;
        if (move.swap) {
            cols[i].moveTo(cols[j]);
            cols[j].moveTo(cols[i],-1);
            [cols[i], cols[j]] = [cols[j], cols[i]];
        } else {
            cols[i].jump();
            cols[j].jump();
        }
    }
    requestAnimationFrame(animate);
}
