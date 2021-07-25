const gameboard = (() => {
    let arr = ['','','','','','','','',''];
    let currentPlayer = 1;

    function displayBoard(){
        const items = document.querySelectorAll('.grid-items');
        for(let i = 0; i < arr.length; i++){
            items[i].innerHTML = arr[i].toUpperCase();
        }
    }
    const grids = document.querySelectorAll('.grids');
    grids.forEach(grid => grid.addEventListener('click', setBoard));

    function setBoard(e){
        let gridIndex = this.querySelector('.grid-items').getAttribute('grid') - 1;
        if(arr[gridIndex] === ''){
            if(currentPlayer%2 + 1 === 1){
                arr[gridIndex] = 'o';
                currentPlayer++;
            }
            else if(currentPlayer%2 + 1 === 2){
                arr[gridIndex] = 'x';
                currentPlayer++;
            }
            else console.log('ERROR');
            
            displayBoard();
        }
    }

    return {displayBoard};
})();

function player(name){
    if( typeof player.counter == 'undefined' ) {
        player.counter = 0;
    }

    const playerNumber = ++player.counter;

    function getPlayerNumber(){
        return playerNumber;
    }

    return {name, getPlayerNumber};
}

gameboard.displayBoard();

const jeff = player('jeff');
const arun = player('arun');