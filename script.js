const gameboard = (() => {
    let arr = ['','','','','','','','',''];
    let currentPlayer = 0;

    function displayBoard(){
        const items = document.querySelectorAll('.grid-items');
        for(let i = 0; i < arr.length; i++){
            items[i].innerHTML = arr[i].toUpperCase();
        }
    }

    function checkRows(answer){
        let winCondition = answer + answer + answer;
        let row = '';
        for(let i = 1; i <= 9; i+=3){
            row = ''
            row += document.querySelector(`.grid-items[grid="${i}"]`).innerHTML.toLowerCase();
            row += document.querySelector(`.grid-items[grid="${i+1}"]`).innerHTML.toLowerCase();
            row += document.querySelector(`.grid-items[grid="${i+2}"]`).innerHTML.toLowerCase();
    
            if(row === winCondition){
                return true;
            }
        }
    }
    
    function checkCols(answer){
        let winCondition = answer + answer + answer;
        let col = '';
        for(let i = 1; i <= 3; i++){
            col = ''
            col += document.querySelector(`.grid-items[grid="${i}"]`).innerHTML.toLowerCase();
            col += document.querySelector(`.grid-items[grid="${i+3}"]`).innerHTML.toLowerCase();
            col += document.querySelector(`.grid-items[grid="${i+6}"]`).innerHTML.toLowerCase();
    
            if(col === winCondition){
                return true;
            }
        }
    }
    
    function checkDiagonals(answer){
        let winCondition = answer + answer + answer;
        let diag = '';
        for(let i = 1; i <= 9; i+=4){
    
            diag += document.querySelector(`.grid-items[grid="${i}"]`).innerHTML.toLowerCase();
    
        }
    
        if(diag === winCondition){
            return true;
        }
    
        diag = '';
        for(let i = 3; i <= 7; i+=2){
    
            diag += document.querySelector(`.grid-items[grid="${i}"]`).innerHTML.toLowerCase();
    
    
        }
    
        if(diag === winCondition){
            return true;
        }
    }

    function checkWin(player){
        const playerNumber = player.getPlayerNumber();
        const joinedArr = arr.join('');
    
        if(playerNumber === 1){ // o
            if(checkRows('o') || checkCols('o') || checkDiagonals('o')){
                console.log(`${player.name} wins!`)
                return true;
            }
        }
    
        else if(playerNumber === 2){ // x
            if(checkRows('x') || checkCols('x') || checkDiagonals('x')){
                console.log(`${player.name} wins!`)
                return true;
            }
        }

        if(joinedArr.length == 9){
            console.log('Draw');
            return true;
        }
    }

    const grids = document.querySelectorAll('.grids');
    grids.forEach(grid => grid.addEventListener('click', setBoard));

    function setBoard(e){
        let gridIndex = this.querySelector('.grid-items').getAttribute('grid') - 1;
        if(arr[gridIndex] === ''){
            if(currentPlayer%2 + 1 === 1){
                arr[gridIndex] = 'o';
                displayBoard();
                checkWin(player1);
                currentPlayer++;
            }
            else if(currentPlayer%2 + 1 === 2){
                arr[gridIndex] = 'x';
                displayBoard();
                checkWin(player2);
                currentPlayer++;
            }
            else console.log('ERROR');
        
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

const player1 = player('player1');
const player2 = player('player2');