import React, { Component } from 'react';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            details: "",
            yearStart: "",
            yearEnd: "",
            company: "",
            position: "",
            show: true
        }
    }

    handleExperienceDetails = (e) => {
        this.setState({
            details: e.target.value
        })
    }

    handleExperienceYearStart = (e) => {
        this.setState({
            yearStart: e.target.value
        })
    }

    handleExperienceYearEnd = (e) => {
        this.setState({
            yearEnd: e.target.value
        })
    }

    handleExperienceCompany = (e) => {
        this.setState({
            company: e.target.value
        })
    }

    handleExperiencePosition = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    toggleExperienceShowTrue = (e) => {
        this.setState({
            show: true
        })
    }

    toggleExperienceShowFalse = (e) => {
        this.setState({
            show: false
        })
    }

    render() {
        return(
            <div className='experience-cont'>
                {!this.state.show ?
                    <div className='experience-form-container'>
                        <input onChange={this.handleExperiencePosition} type='text' className='position' placeholder='Job position'/>
                        <input onChange={this.handleExperienceYearStart} type='number' className='start-date' placeholder='start year'/>
                        <input onChange={this.handleExperienceYearEnd}  type='number' className='end-date' placeholder='end year'/>
                        <input onChange={this.handleExperienceCompany}  type='text' className='company' placeholder='Company name'/>
                        <textarea onChange={this.handleExperienceDetails}  type='text' className='experience-details' placeholder='Company name'/>
                        <button type='button' onClick={this.toggleExperienceShowTrue}>toggle</button>
                    </div> : true
                }
            
                <div className='experience-title'>
                    <div className='experience-position-container'>
                        <div className='experience-position-year'>
                            <div className='experience-position'></div>
                            <div className='experience-year'></div>
                        </div>
                        <div className='experience-company-details'>
                            <div className='experience-company'></div>
                            <div className='experience-details'></div>
                            <ul className='company-task'></ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;