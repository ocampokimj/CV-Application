import React, { Component } from "react";

class Education extends Component {
    constructor(){
        super();
        
        this.state = {
            degree: "",
            year: "",
            info: "",
            show: true
        }

    }

    handleEducationDegree = (e) => {
        this.setState({
            degree: e.target.value
        })
    }
    
    handleEducationYear = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    handleEducationInfo = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    toggleFalseEducation = (e) => {
        this.setState({
            show: false
        })
    }

    toggleTrueEducation = (e) => {
        this.setState({
            show: true
        })
    }



    render() {
        return(
            <div className='education-cont'>
                {!this.state.show ?
                    <div className='education-form-container'>
                        <input onChange={this.handleEducationDegree} placeholder='School' id='educationDegreeInput'/>
                        <input onChange={this.handleEducationYear} placeholder='Graduation Date' type='number' id='educationYearInput'/>
                        <input onChange={this.handleEducationInfo} placeholder='Degreee' id='educatioInfoInput'/>
                        {/* <textarea onChange={this.handleEducation} placeholder='about' id='educationInput'/> */}
                        <button type='button' onClick={this.toggleTrueEducation} className='toggle-education'>X</button>
                    </div>: true
                }
                <div className='education'>
                    <div className="education-container">
                        <button type='button' onClick={this.toggleFalseEducation} className='toggleEducation'>+</button>
                        <div className='education-title'>Education</div>
                    </div>
                    <div className="education-value-container">
                        <div className="school">
                            <div className="info-title">School:</div>
                            <div className='info-value'>{this.state.degree}</div>
                        </div>
                        <div className="year">
                            <div className="year-title">Year:</div>
                            <div className='year-value'>{this.state.year}</div>
                        </div>
                        <div className="degree">
                            <div className="degree-title">Degreee:</div>
                            <div className='degree-value'>{this.state.info}</div>
                        </div>  
                    </div>                 
                </div>
            </div>
        )
    }
}

export default Education;