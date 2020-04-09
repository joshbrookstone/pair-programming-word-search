let generateBoard = function(white, black) {
  let board = [];
  for (let y = 0; y < 8; y++) {
    board[y] = [];
    for (let x = 0; x < 8; x++) {
      if (x === white[1] && y === white[0]) { // places queen for white coordinates
        board[y][x] = 1;
      } else if (x === black[1] && y === black[0]) { //places queen or black coordinates
        board[y][x] = 1;
      } else {
        board[y][x] = 0;
      }
    }
  }
  return board;
};

let queenThreat = function(white, black) {
  if (white[0] === black[0] || white[1] === black[1]) { //compares queen's vertical and horizontal placement
    return true;
  } else if (Math.abs(white[0] - white[1]) === Math.abs(black[0] - black[1])) { // compares queen's diagonal placement
    return true;
  } else if (white[0] + white[1] === black[0] + black[1]) {
    return true;
  } else {
    return false;
  }
};


let whiteQueen = [0, 2];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(whiteQueen, blackQueen));

['0,0', '0,1', '0,2', '0,3', '0,4', '0,5', '0,6', '0,7'],
['1,0', '1,1', '1,2', '1,3', '1,4', '1,5', '1,6', '1,7'],
['2,0', '2,1', '2,2', '2,3', '2,4', '2,5', '2,6', '2,7'],
['3,0', '3,1, '3,2', '3,3', '3,4', '3,5', '3,6', '3,7'],
['4,0', '4,1', '4,2', '4,3', '4,4', '4,5', '4,6', '4,7'],
['5,0', '5,1', '5,2', '5,3', '5,4', '5,5', '5,6', '5,7'],
['6,0', '6,1', '6,2', '6,3', '6,4', '6,5', '6,6', '6,7'],
['7,0', '7,1', '7,2', '7,3', '7,4', '7,5', '7,6', '7,7'],
['8,0', '7,1', '7,2', '7,3', '7,4', '7,5', '7,6', '7,7'],
], 'SIBLING');

[0,0]
[1,0],[0,1]
[2,0],[1,1],[0,2]
[3,0],[2,1],[1,2],[0,3]
[4,0],[3,1],[2,2],[1,3],[0,4]

x = 
0 
1 0 
2 1 0 
3 2 1 0 
4 3 2 1 0
y = 
0 
0 1 
0 1 2 
0 1 2 3 
0 1 2 3 4

// 



