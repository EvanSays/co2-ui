import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './Slider.css'

class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value1: 25,
      value2: 25,
      value3: 25,
      value4: 25,
      reverseValue: 8
    }
    this.handleValue1 = this.handleValue1.bind(this)
    this.handleValue2 = this.handleValue2.bind(this)
    this.handleValue3 = this.handleValue3.bind(this)
    this.handleValue4 = this.handleValue4.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      this.handleValue1(Math.floor(Math.random() * Math.floor(100)))
      this.handleValue2(Math.floor(Math.random() * Math.floor(100)))
      this.handleValue3(Math.floor(Math.random() * Math.floor(100)))
      this.handleValue4(Math.floor(Math.random() * Math.floor(100)))
    }, 1000);
  }

  handleValue1 = (value) => {
    this.setState({
      value1: value
    })
  }
  handleValue2 = (value) => {
    this.setState({
      value2: value
    })
  }
  handleValue3 = (value) => {
    this.setState({
      value3: value
    })
  }
  handleValue4 = (value) => {
    this.setState({
      value4: value
    })
  }

  render() {
    const { value1, value2, value3, value4, reverseValue } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value1}
              orientation='vertical'
              onChange={this.handleValue1}
            />
            <div className='value'>{value1}</div>
          </div>

          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value2}
              orientation='vertical'
              onChange={this.handleValue2}
            />
            <div className='value'>{value2}</div>
          </div>

          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value3}
              orientation='vertical'
              onChange={this.handleValue3}
            />
            <div className='value'>{value3}</div>
          </div>

          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value4}
              orientation='vertical'
              onChange={this.handleValue4}
            />
            <div className='value'>{value4}</div>
          </div>

        </div>
      </div>
    )
  }
}

export default VolumeSlider