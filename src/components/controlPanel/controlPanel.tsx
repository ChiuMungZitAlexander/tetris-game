import * as React from 'react'

interface IControlPanelProps {
  test: string,
}

const ControlPanel: React.SFC<IControlPanelProps> = (props) => (
  <div className="control-panel">
    <ul className="leftButton">
      LEFT
    </ul>
    <ul className="middleButton">
      <li className="transButton">UP</li>
      <li className="downButton">DOWN</li>
    </ul>
    <ul className="rightButton">RIGHT</ul>
  </div>
)

ControlPanel.defaultProps = {
  test: 'test',
}

export default ControlPanel
