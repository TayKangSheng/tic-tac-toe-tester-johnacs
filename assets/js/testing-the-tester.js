// logic for tic tac toe
var grid = [null, null, null, null, null, null, null, null, null]
var player = 1

function restart () {
  // console.log('restart')
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1

  $('.container > div').text('') // clears the 'X' and 'O'
  $('h2').text('Player\'s 1 turn')
  $('h2').removeClass('win')
}

function isGameOver () {
  // console.log('who won: ' + whoWon())
  if (whoWon()) {
    return true
  }
  return false
}

function whoWon () {
  // check grid here
  // check first row
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
// check 2nd row
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  // check 3rd row
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]

    // edit here onwards
// check first col
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
// check 2nd col
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
// check 3rd col
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
// check diagonal BL to TR
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
// check diagonal TL to BR
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]

  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) return 3

  return 0
}

function playTurn (index) {
  // console.log('play turn clicked')
  if (grid[index] || isGameOver() === true) {
    // console.log('playturn false')
    // grid already occupied
    return false
  } else {
    // console.log('playturn true')
    grid[index] = player
    return true
  }
}

function whereClick () {
  var $h2 = $('h2')
  var whoIsIt = $(this)[0].id
// console.log(whoIsIt)
  if (playTurn(whoIsIt)) {
    if (player === 1) {
      $(this).text('0')
      player = 2
      $h2.text('Player\'s 2 turn')
    } else {
      $(this).text('X')
      player = 1
      $h2.text('Player\'s 1 turn')
    }
  }
  if (isGameOver()) {
    var theWinner = whoWon()
    switch (theWinner) {
      case 1 :
        $h2.addClass('win')
        $h2.text('Game Over, ' + 'Player ' + theWinner + ' wins')
        break
      case 2:
        $h2.addClass('win')
        $h2.text('Game Over, ' + 'Player ' + theWinner + ' wins')
        break
      case 3: $h2.text('Game Over, It\'s a draw')
        break
      default:

    }

    // console.log('game over')
  }
}

$(document).ready(function () {
  // console.log('hi')

  var $boxes = $('.container > div')
  restart()
  $boxes.on('click', whereClick)

  $('button').on('click', restart)
})
