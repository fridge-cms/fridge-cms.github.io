import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Plan extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    details: PropTypes.array,
    annual: PropTypes.bool
  }

  // 25% off
  annualPrice () {
    const {price} = this.props
    if (typeof price === 'string') return price

    return Math.ceil(price * 0.75)
  }

  render () {
    const {name, description, details, annual} = this.props
    const price = annual ? this.annualPrice() : this.props.price

    return <div className='plan'>
      <div className='plan-banner'>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='price'>
          {!(typeof price === 'string') && '$'}{price}
          <span className='cycle'>
            {!(typeof price === 'string') ? 'per month' : '1 month'}
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
      <style jsx>{`
        .plan {
          margin-bottom: 1em;
        }

        .plan-banner {
          background: #f7f6f1;
          border: 1px solid color(#f7f6f1 shade(15%));
          border-radius: 4px;
          text-align: center;
          padding: 2em 1em;
          margin-bottom: 1em;

          .price {
            font-size: 1.25em;
            font-weight: 700;
            color: color(#f7f6f1 shade(40%) saturation(- 22%));

            .cycle {
              font-weight: 400;
              font-size: 0.75em;
              display: block;
            }
          }

          h2 {
            color: color(#f7f6f1 shade(40%) saturation(- 22%));
            margin-bottom: 0;
          }

          p {
            color: color(#f7f6f1 shade(40%) saturation(- 22%));
            font-size: 0.9em;
            line-height: 1.4;
          }
        }

        .plan-details {
          ul {
            list-style: none;
            margin: 0 0 0 2px;
          }

          i {
            margin-right: 0.25em;
          }
        }
      `}</style>
    </div>
  }
}
