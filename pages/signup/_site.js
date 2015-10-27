import React from 'react'
import Steps from './_steps'
import {Container, Grid, Breakpoint, Span} from 'react-responsive-grid'

export default class CreateSite extends React.Component {
  static propTypes = {
    save : React.PropTypes.func.isRequired,
    nextStep : React.PropTypes.func.isRequired
  }

  next(e) {
    e.preventDefault()

    const data = {site_name : this.refs.site_name.getDOMNode().value}

    this.props.save(data)
    this.props.nextStep()
  }

  render() {
    return <Container maxWidth={980}>
      <h1>Create Site</h1>
      <p>
        <label>Site Name</label>
        <input type='text' ref='site_name' />
        <span className='help'>You can change your site's name at any time</span>
      </p>
      <p>
        <button onClick={this.next.bind(this)}>Complete</button>
      </p>
      <Steps step={2} max={2} />
    </Container>
  }
}
