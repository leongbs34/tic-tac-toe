const gameboard = (() => {
    let arr = ['','','','','','','','',''];
    let currentPlayer = 0;
    let winningText = '';

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
        const gameover = document.querySelector('.gameover')
    
        if(playerNumber === 1){ // o
            if(checkRows('o') || checkCols('o') || checkDiagonals('o')){
                winningText = `${player.name} wins!`;
                gameover.textContent = winningText;
                return true;
            }
        }
    
        else if(playerNumber === 2){ // x
            if(checkRows('x') || checkCols('x') || checkDiagonals('x')){
                winningText = `${player.name} wins!`;
                gameover.textContent = winningText;
                return true;
            }
        }

        if(joinedArr.length == 9){
            winningText = 'Draw';
            gameover.textContent = winningText;
            return true;
        }

        return false;
    }

    const grids = document.querySelectorAll('.grids');
    grids.forEach(grid => grid.addEventListener('click', setBoard));

    function setBoard(e){
        let gameFinished = false;
        let gridIndex = this.querySelector('.grid-items').getAttribute('grid') - 1;
        if(arr[gridIndex] === ''){
            if(currentPlayer%2 + 1 === 1){
                arr[gridIndex] = 'o';
                displayBoard();
                gameFinished = checkWin(player1);
                currentPlayer++;
            }
            else if(currentPlayer%2 + 1 === 2){
                arr[gridIndex] = 'x';
                displayBoard();
                gameFinished = checkWin(player2);
                currentPlayer++;
            }
            if(gameFinished){
                document.querySelector('#blur-bg').classList.remove('hide');
                document.querySelector('#main').classList.add('blur');
            }
        
        }
    }
    
    function resetBoard(){
        arr = ['','','','','','','','',''];
        currentPlayer = 0;
        displayBoard();
        gameover = '';
    }

    function removeBlur(){
        document.querySelector('#blur-bg').classList.add('hide');
        document.querySelector('#main').classList.remove('blur');
        resetBoard();
    }

    const blurBg = document.querySelector('#blur-bg');
    blurBg.addEventListener('click', removeBlur)


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

const player1 = player('O');
const player2 = player('X');