import React from 'react'
import CreateAccount from './_account'
import CreateSite from './_site'

export default class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      values: {}
    }
  }

  save(values) {
    this.setState({values: {...this.state.values, ...values}})
  }

  nextStep() {
    this.setState({step: this.state.step+1})
  }

  submit() {
    // send to API
    const url = 'http://localhost:9393/api/v1/account'
    // const url = 'https://api.fridgecms.com/v1/account'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state.values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return <Container maxWidth={980}>
      <h1>Your Information</h1>
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
      <h1>Your Fridge</h1>
      <p>
        <label>Fridge</label>
        <input type='text' ref='site_name' />
      </p>
      <p>
        <button onClick={this.submit.bind(this)}>Create Account</button>
      </p>
    </Container>
  }
}
