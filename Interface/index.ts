interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare1 = createSquare({color: "black"})
let mySquare2 = createSquare({color: "black", width: 100})
let mySquare3 = createSquare({})

console.log(mySquare1)
console.log(mySquare2)
console.log(mySquare3)