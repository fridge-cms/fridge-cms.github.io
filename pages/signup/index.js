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
    const {step} = this.state

    switch(step) {
      case 1:
        return <CreateAccount save={this.save.bind(this)} nextStep={this.nextStep.bind(this)} />
      case 2:
        return <CreateSite save={this.save.bind(this)} nextStep={this.submit.bind(this)} />
    }
  }
}
