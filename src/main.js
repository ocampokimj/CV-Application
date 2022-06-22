import React, { Component } from "react";

class Main extends Component {
    constructor(){
        super();
        
        this.state = {
            tasks: [],
            details: "",
            yearStart: "",
            yearEnd: "",
            company: "",
            position: "",
            addMore: "",
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
        const { tasks, details, yearStart, yearEnd, company, position } = this.state
        return(
            <div className='experience-cont'>
                {!this.state.show ? 
                    <div className='experience-form-container'>
                        <input onChange={this.handleExperiencePosition} type='text' className='position' placeholder='Job position'/>
                        <input onChange={this.handleExperienceYearStart} type='number' className='start-date' placeholder='start year'/>
                        <input onChange={this.handleExperienceYearEnd}  type='number' className='end-date' placeholder='end year'/>
                        <input onChange={this.handleExperienceCompany}  type='text' className='company' placeholder='Company name'/>
                        <textarea onChange={this.handleExperienceDetails}  type='text' className='experience-details' placeholder='Work description'/>
                        <button className='toggle-main'type='button' onClick={this.toggleExperienceShowTrue}>X</button>
                    </div>: true
                }
                <div onClick={this.addEducation}className='experience-container'> 
                    <div className="experience-title">
                        <div className="experience">Experience</div>
                        <button className="toggleExperience" type='button' onClick={this.toggleExperienceShowFalse}>+</button>
                    </div>
                    <div className='experience-position-container'>
                        <div className='experience-position-year'>
                            <div className='experience-position'>{this.state.position}</div>
                            <div className="year-start-end">{this.state.yearStart}-{this.state.yearEnd}</div>
                        </div>
                        <div className='experience-company-details'>
                            <div className='experience-company'>{this.state.company}</div>
                            <div className='experience-details'>{this.state.details}</div>
                            <div className="company-task"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;

// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur quidem nemo repudiandae aut dolorem, eius quaerat impedit, sit sint iste deserunt. Omnis nostrum debitis maiores reiciendis quasi dolor dolorum.