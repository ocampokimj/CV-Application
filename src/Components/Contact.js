import React, { Component } from 'react';
import uniqid from 'uniqid';





class Contact extends Component {
    constructor() {
        super();


        this.state = {
            id: uniqid(),
            name: "",
            address: "",
            number: "",
            email: "",
            show: true
        }
    
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    handleNumber = (e) => {
        this.setState({
            number: e.target.value,
        })

        console.log(this.state.number)

        
    }


    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    toggleFalse = (e) => {
        this.setState({
            show: false
        })
    }

    // toggleInputFalse= (e) => {
    //     this.setState({
    //         show: false
    //     })
    // }

    toggleTrue = (e) => {
        this.setState({
            show: true
        })
    }

    // const [show, setSHow] = useState(true)

    render() {
        const { address, number, email } = this.state
        return(
            <div className='personal-information'>
                {!this.state.show ?
                    <div className='header-form-container'>
                        <input onChange={this.handleAddress}type='text' placeholder='address' id='contactInput'/>
                        <input onChange={this.handleNumber}type='text' placeholder='phone number' id='phoneInput'/>
                        <input onChange={this.handleEmail}type='email' placeholder='johndoe@gmail.com' id='emailInput'/>
                        <button type='button' onClick={this.toggleTrue} className='toggle-contact'>X</button>
            </div>
                    : false
                }
            <div className="contact-cont">
                <div className='contact-container'>
                    <button type='button' onClick={this.toggleFalse} className='toggleContact'>+</button>
                    <div className='contact-title'>Contact</div>
                </div>
                <div className='address'>
                    <div className='address-title'>Address:</div>
                    <div className='address-value'>{this.state.address}</div>
                </div>
                <div className='phone'>
                    <div className='phone-title'>Phone:</div>
                    <div className='address-value'>{this.state.number}</div>
                </div>
                <div className='email'>
                    <div className='email-title'>Address:</div>
                    <div className='email-value'>{this.state.email}</div>
                </div>
            </div>

                
                

            </div>
        )
    }
}

export default Contact;