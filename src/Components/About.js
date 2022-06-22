import React, { Component } from 'react';


class About extends Component {
    constructor() {
        super();


        this.state = {
            about: "",
            show: false


        }
    
    }

    handleAbout = (e) => {
        this.setState({
            about: e.target.value,
        })
    }

    toggleFalseAbout = (e) => {
        this.setState({
            show: false
        })
    }

    toggleTrueAbout = (e) => {
        this.setState({
            show: true
        })
    }

    render() {
        return(
            <div className='about-cont'>
                {this.state.show ?
                    <div className='about-form-container'>
                        <textarea onChange={this.handleAbout}type='text' placeholder='about' id='aboutInput'/>
                        <button type='button' onClick={this.toggleFalseAbout} className='toggle-about'>X</button>
                    </div>: false
                }
                <div className='about-container'>
                    <button type='button' onClick={this.toggleTrueAbout} className='toggleAbout'>+</button>
                    <div className='about-title'>About</div>
                 </div>
                <div className='about-value'>{this.state.about}</div>
            </div>
        )
    }
}

export default About;