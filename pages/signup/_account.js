import React from 'react'
import Steps from './_steps'
import {Container, Grid, Breakpoint, Span} from 'react-responsive-grid'

export default class CreateAccount extends React.Component {
  static propTypes = {
    save : React.PropTypes.func.isRequired,
    nextStep : React.PropTypes.func.isRequired
  }

  next(e) {
    e.preventDefault()

    const data = {
      name     : this.refs.name.getDOMNode().value,
      email    : this.refs.email.getDOMNode().value,
      password : this.refs.password.getDOMNode().value
    }

    this.props.save(data)
    this.props.nextStep()
  }

  render() {
    return <Container maxWidth={980}>
      <h1>Create Account</h1>
      <p>
        <label>Name</label>
        <input type='text' ref='name' />
      </p>
      <p>
        <label>Email</label>
        <input type='email' ref='email' />
      </p>
      <p>
        <label>Password</label>
        <input type='password' ref='password' />
      </p>
      <p>
        <button onClick={this.next.bind(this)}>Next</button>
      </p>
      <Steps step={1} max={2} />
    </Container>
  }
}
