import React, {Component} from 'react'
import './App.css'

export default class App extends Component {
  state = {type: null, target: null}

  _genrate = () => {
    
  }

  _setType = (e) => {
    console.log(e.target.value)
    this.setState({type: e.target.value})
  }
  
  _setTarget = (e) => {
    console.log(e.target.value)
    this.setState({target: e.target.value})
  }

  render () {
    return (
      <div className='app'>
        <div>
          <h3 className='h-title'>Auto Code Generator</h3>
        </div>
        <div>
          <input className='input-target' type='text' onChange={this._setTarget} />
        </div>
        <div className='div-type'>
          <input 
            className='radio-type' 
            type='radio' 
            name='type' 
            value='underbar'
            onClick={this._setType}
            defaultChecked
          />underbar&nbsp;&nbsp;
          <input 
            className='radio-type' 
            type='radio' 
            name='type' 
            value='hyphen' 
            onClick={this._setType}
          />hyphen&nbsp;&nbsp;
          <input 
            className='radio-type' 
            type='radio' 
            name='type' 
            value='camelCase'
            onClick={this._setType}
          />camelCase
        </div>
        <div>
          <button className='button-generate'>generate</button>
        </div>
        <div>
          <p className='p-code'></p>
        </div>
      </div>
    )
  }
}