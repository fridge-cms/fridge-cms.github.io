import React from 'react'
import cn from 'classnames'

export default class Steps extends React.Component {
  static propTypes = {
    step : React.PropTypes.number.isRequired,
    max  : React.PropTypes.number.isRequired
  }

  render() {
    const {step, max} = this.props
    const steps = new Array(max).fill(null)

    return <div>
      {steps.map((v, index) => {
        return <span key={index} className={cn('step', {current: step == index + 1})} />
      })}
    </div>
  }
}
