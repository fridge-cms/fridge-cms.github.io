import React, { Component, PropTypes } from 'react'

export default class Plan extends Component {
  static propTypes = {
    name : PropTypes.string,
    description : PropTypes.string,
    price : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    details : PropTypes.array,
    annual : PropTypes.bool
  };

  // 25% off
  annualPrice() {
    const {price} = this.props
    if (typeof price == 'string') return price

    return Math.ceil((price * 12) * .75)
  }

  render() {
    const {name, description, details, annual} = this.props
    const price = annual ? this.annualPrice() : this.props.price
    const cycleLabel = annual ? 'year' : 'month'

    return <div className='plan'>
      <div className='plan-banner'>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='price'>
          {!(typeof price == 'string') && '$'}{price}
          <span className='cycle'>
            {!(typeof price == 'string') ? `per ${cycleLabel}` : 'forever'}
          </span>
        </div>
      </div>
      <div className='plan-details'>
        <ul>
          {details.map((detail, i) => {
            return <li key={i}>
              <i className='ion-ios-checkmark-outline' /> {detail}
            </li>
          })}
        </ul>
      </div>
    </div>
  }
}
