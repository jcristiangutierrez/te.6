let size = 12;

let chessboard = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      chessboard += " ";
    } else {
      chessboard += "$";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
