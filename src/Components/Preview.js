import React, { Component } from 'react';
import Contact from '../Components/Contact';



class Preview extends Component {
    // const { address, number, email } = props;

    render() {
        return(
            <div className='preview-container'>
                <div className='header-preview'>
                    <div className='name-preview'>
                        <div className='first-name-preview'>Aime</div>
                        <div className='last-name-preview'>LeonDore</div>
                    </div>
                    <div className='image-preview'>
                        <img className='image-prev' src="https://i.pinimg.com/474x/cb/5b/53/cb5b53c84d3c537fe20b335258431172.jpg" alt="headshot" />
                    </div>
                </div>
                <div className='bottom-preview'>
                    <div className='left-preview'>
                        <div className='contact-preview'>
                            <div className='contact'>CONTACT</div>
                            <div className='address-preview-container'>
                                <i></i>
                                <div onChange={this.handleAddress}className='address-preview'>
                                    1535 e carson st xxxx
                                </div>
                            </div>
                            <div className='number-preview-container'>
                                <i></i>
                                <div className='number-preview'> </div>
                            </div>
                            <div className='email-preview-container'>
                                <i></i>
                                <div className='email-preview'>something@gmail.com</div>
                            </div>
                        </div>
                        <div className='education-preview'>
                            <div className='education'>EDUCATION</div>
                        </div>
                        <div className='reference-preview'>
                        <div className='reference'>REFERENCE</div>
                        </div>
                    </div>
                    <div className='right-preview'>
                        <div className='summary-preview-container'>
                            <div className='summary'>SUMMARY</div>
                            <div className='summary-preview'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae distinctio, nam excepturi deleniti unde voluptates mollitia debitis, assumenda quidem sint nostrum fugiat, animi maxime nisi? Provident tempore tempora omnis iusto!</div>
                        </div>
                        <div className='experience-preview-container'>
                            <div className='experience'>EXPERIENCE</div>
                            <div className='experience-preview'>
                                <div className='job-title'>JOB TITLE</div>
                                <div className='timeline-preview'>(dec. 2012-present)</div>
                                <div className='company-name'>COMPANY NAME</div>
                                <div className='company-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam suscipit error harum dicta quidem incidunt ut hic quisquam pariatur ullam adipisci, earum itaque iure, explicabo nisi unde inventore ex.</div>
                                <div className='major-accomplisment'>
                                    <ul>
                                        <li>dasfdsadasdas</li>
                                        <li>12321423523</li>
                                        <li>xxxxxxxxxxxxx</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='experience-preview-container'>
                            <div className='experience'>EXPERIENCE</div>
                            <div className='experience-preview'>
                                <div className='job-title'>JOB TITLE</div>
                                <div className='timeline-preview'>(dec. 2012-present)</div>
                                <div className='company-name'>COMPANY NAME</div>
                                <div className='company-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam suscipit error harum dicta quidem incidunt ut hic quisquam pariatur ullam adipisci, earum itaque iure, explicabo nisi unde inventore ex.</div>
                                <div className='major-accomplisment'>
                                    <ul>
                                        <li>dasfdsadasdas</li>
                                        <li>12321423523</li>
                                        <li>xxxxxxxxxxxxx</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='skills-preview-container'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preview