import React, { Component } from 'react'



export default class User extends Component {
  constructor() {
    super()
    this.state = {
      present: true
    }

  }

  toggle = () => {
    this.setState({
      present: 'not'
    })
  }

  render() {
    return (
      <div>
        User : <b>{this.props.name}</b>
        <p>{this.props.name} is <b>{this.state.present}</b> present</p>
        {/* <button onClick={() => {
          this.setState({
            present: 'not'
          })
        }}>Toggle</button><br /><br /> */}
        <button onClick={this.toggle}>Toggle</button><br /><br />
      </div>
    )
  }
}