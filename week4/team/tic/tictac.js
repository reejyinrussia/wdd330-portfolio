let div1 = document.querySelector('#b1')
let div2 = document.querySelector('#b2')
let div3 = document.querySelector('#b3')
let div4 = document.querySelector('#b4')
let div5 = document.querySelector('#b5')
let div6 = document.querySelector('#b6')
let div7 = document.querySelector('#b7')
let div8 = document.querySelector('#b8')
let div9 = document.querySelector('#b9')
let resetBtn = document.querySelector('#resetBtn')

div1.addEventListener("click", click);
div2.addEventListener("click", click);
div3.addEventListener("click", click);
div4.addEventListener("click", click);
div5.addEventListener("click", click);
div6.addEventListener("click", click);
div7.addEventListener("click", click);
div8.addEventListener("click", click);
div9.addEventListener("click", click);
resetBtn.addEventListener('click', resetBoard);


function click() {
  let turn = document.querySelector('#turn')

  if (this.textContent == '') {
    if (turn.innerHTML == "X turn") {
      this.textContent = 'x';
      turn.innerHTML = "O turn"
    }
    else {
      this.textContent = 'O';
      turn.innerHTML = "X turn"
    }
  }



  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  // Checking if Player X won or not and after
  // that disabled all the other fields
  if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
    b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
    b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

    window.alert('Player X won');
  }
  else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
    b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player X won');
  }
  else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
    b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player X won');
  }
  else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player X won');
  }
  else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
    document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }

  // Checking of Player X finish
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
    b2 == '0') && (b3 == '0' || b3 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
    b4 == '0') && (b7 == '0' || b7 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
    b8 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
    b6 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
    b5 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
    b5 == '0') && (b7 == '0' || b7 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
    b5 == '0') && (b8 == '0' || b8 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player 0 won');
  }
  else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
    b5 == '0') && (b6 == '0' || b6 == '0')) {
    document.getElementById('print')
      .innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player 0 won');
  }

  // Checking of Player 0 finish
  // Here, Checking about Tie
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
    || b2 == '0') && (b3 == 'X' || b3 == '0') &&
    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
      b5 == '0') && (b6 == 'X' || b6 == '0') &&
    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
      b8 == '0') && (b9 == 'X' || b9 == '0')) {
    document.getElementById('print')
      .innerHTML = "Match Tie";
    window.alert('Match Tie');
  }
}


function resetBoard() {

}

let boxes = [];
boxes.push(div1);
boxes.push(div2);
boxes.push(div3);
boxes.push(div4);
boxes.push(div5);
boxes.push(div6);
boxes.push(div7);
boxes.push(div8);
boxes.push(div9);

function resetBoard() {
  boxes.forEach(div => {
    div.textContent = ''
  });
}