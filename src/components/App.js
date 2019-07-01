import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import properties from '../constants/properties.json'

export default class App extends Component {
  state = {type: 'underbar', target: null, code: '코드로 변환하실 내용을 입력해주세요.'}

  _generate = () => {
    axios.get(`http:/${properties.API_IP}:${properties.API_PORT}/translate?target=${this.state.target}`)
      .then(response => {
        const rawData = response.data.message.result.translatedText.toLowerCase()
        const filteredData = rawData.replace(/[^a-zA-Z0-9 ]/gi, '')
        const strings = filteredData.split(' ')
        
        let code = ''
        const {type} = this.state
        
        if (type === 'underbar') {
          code = strings.join('_').toUpperCase();
        } else if (type === 'hyphen') {
          code = strings.join('-').toLowerCase();
        } else if (type === 'camelCase') {
          code += strings[0]
          for (let i = 1; i < strings.length; i++) {
            code += (strings[i].charAt(0).toUpperCase() + strings[i].slice(1))
          }
        }
        this.setState({code})
      })
      .catch(error => {
        console.log(error);
      })
  }

  _setType = (e) => {
    this.setState({type: e.target.value})
  }
  
  _setTarget = (e) => {
    this.setState({target: e.target.value})
  }

  render () {
    let {code} = this.state

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
            value='camelCase'
            onClick={this._setType}
          />camelCase&nbsp;&nbsp;
          <input 
            className='radio-type' 
            type='radio' 
            name='type' 
            value='hyphen' 
            onClick={this._setType}
          />hyphen
        </div>
        <div>
          <button className='button-generate' onClick={this._generate}>generate</button>
        </div>
        <div>
          <p className='p-code'>{code}</p>
        </div>
      </div>
    )
  }
}