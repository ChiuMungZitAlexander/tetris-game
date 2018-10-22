import * as React from 'react'

/* 
  Tetris: 20 rows, 10 cols
*/
const ROW: number[] = [...Array(20).keys()]
const COL: number[] = [...Array(10).keys()]

// const COL = [...Array(10)].map((_, i) => i)

const Tetris: React.SFC = () => (
  <div className="tetris-container">
    {
      ROW.map(r => (
        <ul key={r} className="row">
          {
            COL.map(c => (
              <li key={c} className="grid" />
            ))
          }
        </ul>
      ))
    }
  </div>
)

export default Tetris
