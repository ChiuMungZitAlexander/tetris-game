import * as React from 'react'

interface IControlPanelProps {
  test: string,
}

const ControlPanel: React.SFC<IControlPanelProps> = (props) => (
  <div className="control-panel">
    <ul className="button-group">
      <li className="button button-left">L</li>
      <li className="button button-right">R</li>
      <li className="button button-trans">T</li>
      <li className="button button-down">D</li>
    </ul>
  </div>
)

ControlPanel.defaultProps = {
  test: 'test',
}

export default ControlPanel
