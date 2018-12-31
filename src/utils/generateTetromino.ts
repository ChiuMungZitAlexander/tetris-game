import shapes from 'lib/shapes'
import Tetromino from 'lib/Tetromino'

export default (): Tetromino => {
  const random = Math.floor(Math.random() * 7)

  switch (random) {
    case 0:
      return new Tetromino(shapes.i)
    case 1: 
      return new Tetromino(shapes.j)
    case 2:
      return new Tetromino(shapes.l)
    case 3:
      return new Tetromino(shapes.o)
    case 4:
      return new Tetromino(shapes.s)
    case 5:
      return new Tetromino(shapes.t)
    case 6:
      return new Tetromino(shapes.z)
    default:
      return new Tetromino(shapes.o)
  }
}
