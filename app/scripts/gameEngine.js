export function playGame(userMove) {
  let computerMove = getCompMove()

  if (userMove == computerMove) {
    return ["draw", computerMove]
  }

  if (userMove == 1) {
    switch (computerMove) {
      case 2:
        return [false, computerMove]
      case 3:
        return [true, computerMove]
    }
  }

  if (userMove == 2) {
    switch (computerMove) {
      case 1:
        return [true, computerMove]
      case 3:
        return [false, computerMove]
    }
  }

  if (userMove == 3) {
    switch (computerMove) {
      case 1:
        return [false, computerMove]
      case 2:
        return [true, computerMove]
    }
  }
}

function getCompMove() {
  let min = Math.ceil(1)
  let max = Math.floor(3)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
