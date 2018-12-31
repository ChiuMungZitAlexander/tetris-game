interface ITetromino {
  getShape: () => number[][]
  switchShape: () => void
}

export default class Tetromino implements ITetromino {
  private shapes: number[][][]
  private currentShapeIndex: number = 0

  constructor(shapes: number[][][]) {
    this.shapes = shapes
  }

  public getShape = () => this.shapes[this.currentShapeIndex]
  public switchShape = () => {
    if (this.currentShapeIndex >= this.shapes.length - 1) {
      this.currentShapeIndex = 0
    } else {
      this.currentShapeIndex++
    }
  }
}
