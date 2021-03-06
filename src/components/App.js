import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import properties from '../constants/properties.json'

export default class App extends Component {
  state = {type: 'SNAKE_CASE', target: null, code: '코드로 변환하실 내용을 입력해주세요'}

  _generate = () => {
    axios.get(`http:/${properties.API_IP}:${properties.API_PORT}/translate?target=${this.state.target}`)
      .then(response => {
        const rawData = response.data.message.result.translatedText.toLowerCase()
        const filteredData = rawData.replace(/[^a-zA-Z0-9 ]/gi, '')
        const strings = filteredData.split(' ')
        
        let code = ''
        const {type} = this.state
        
        if (type === 'SNAKE_CASE') {
          code = strings.join('_').toUpperCase()
        } else if (type === 'snake_case') {
          code = strings.join('_').toLowerCase()
        } else if (type === 'snake-case') {
          code = strings.join('-').toLowerCase()
        } else if (type === 'CamelCase') {
          for (let i = 0; i < strings.length; i++) {
            code += (strings[i].charAt(0).toUpperCase() + strings[i].slice(1))
          }
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
          <h2 className='h-title'>Automatic Code Generator</h2>
        </div>
        <div>
          <input className='input-target' type='text' autoFocus onChange={this._setTarget} />
        </div>
        <div className='div-types'>
          <div className='div-type'>
            <label className='label-type'>
            SNAKE_CASE<br/>
              <input 
                className='radio-type'
                type='radio' 
                name='type' 
                value='SNAKE_CASE'
                onClick={this._setType}
                defaultChecked
              />
            </label>
          </div>
          <div className='div-type'>
            <label className='label-type'>
            snake_case<br/>
              <input
                className='radio-type'
                type='radio'
                name='type'
                value='snake_case'
                onClick={this._setType}
              />
            </label>
          </div>
          <div className='div-type'>
            <label className='label-type'>
            snake-case<br/>
              <input 
                className='radio-type'
                type='radio' 
                name='type' 
                value='snake-case'
                onClick={this._setType}
              />
            </label>
          </div>
          <div className='div-type'>
            <label className='label-type'>
            CamelCase<br/>
              <input
                className='radio-type'
                type='radio' 
                name='type' 
                value='CamelCase'
                onClick={this._setType}
              />
            </label>
          </div>
          <div className='div-type'>
            <label className='label-type'>
            camelCase<br/>
              <input 
                className='radio-type'
                type='radio' 
                name='type' 
                value='camelCase'
                onClick={this._setType}
              />
            </label>
          </div>
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
