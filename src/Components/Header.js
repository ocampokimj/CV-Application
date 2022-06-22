import React, { Component } from 'react';


class Header extends Component {
    constructor() {
        super();


        this.state = {
            firstName: "",
            lastName: "",
            img: ""
        }
    
    }

    handleImg = (e) => {
        this.setState({
            img: e.target.value,
        })
    }

    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value,
        })
    }

    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value,
        })
    }

    render() {
        return(
            <div className='header'>
                <div className='first-name'>Kim Jayson</div>
                <div className='last-name'>Ocampo</div>
                <div className='profession'>Full-stack-engineer</div>
            </div>
        )
    }
}

export default Header;