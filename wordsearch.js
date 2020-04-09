const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  } else {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const horizontalJoinReversed = letters.map(ls => ls.reverse().join(''));
    console.log("This is horizontal reversed", horizontalJoinReversed);
    console.log("This is horizontal", horizontalJoin);
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const verticalJoinReversed = transpose(letters).map(ls => ls.reverse().join(''));
    console.log("This is the vertical words", verticalJoin);
    console.log("this is the vertical words reversed", verticalJoinReversed);
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    for (const l of verticalJoinReversed) {
      if (l.includes(word)) return true;
    }
    for (const l of horizontalJoinReversed) {
      if (l.includes(word)) return true;
    }
    return false;
  }
};

module.exports = wordSearch;

const transpose = function(matrix) {
  let result = [];
  for (let y = 0; y <= matrix[0].length - 1; y++) {
    for (let x = 0; x <= matrix.length - 1; x++) {
      if (result[y]) {
        result[y].push(matrix[x][y]);
      } else {
        result.push([matrix[x][y]]);
      }
    }
  }
  return result;
};
  
