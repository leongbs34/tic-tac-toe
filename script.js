const gameboard = (() => {
    let arr = ['o','o','o','x','x','x','x','x','x'];

    return arr;
})();

function player(name){

    return {name};
}

function setBoard(){
    const items = document.querySelectorAll('.grid-items');
    for(let i = 0; i < gameboard.length; i++){
        items[i].innerHTML = gameboard[i].toUpperCase();
    }
}

setBoard();