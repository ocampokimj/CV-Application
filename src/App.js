import React, { Component } from 'react';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Header from './Components/Header';
import Experience from './Components/Education';
import Preview from './Components/Preview';
import './App.css';
import uniqid from 'uniqid';
import About from './Components/About';
import Main from './main';
import Skills from './Skills';
import Main2 from './Main2';


class App extends Component {
  constructor() {
    super();
    
    this.state = {

    }
  }

  render() {
    return (
      <div className='container'>
        <div className='sidebar'>
          <div className='img'>
            <img src='https://porhomme.com/wp-content/uploads/2016/03/aime-leon-dore-ss16-two-years-later-collection-1-1.jpg'></img>
          </div>
          <About />
          <Contact />
          <Education />
          <Skills />
        </div>
        <div className='main'>
          <Header />
          <Main />
          <Main2 />
        </div>
      </div>
    )
  }
}

export default App;
