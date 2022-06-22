
import React, {Component} from "react";
import List from "./Components/List";
import uniqid from 'uniqid';

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
      show: true
    };
  }
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    if(this.state.task === "") return
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      }
    }

    )
  }

  toggleTrueSkills = (e) => {
    this.setState({
          show: true
      })
  }
  toggleFalseSkills = (e) => {
    this.setState({
        show: false
    })
}


  render() {
    const {task, tasks} = this.state;

    return (
      <div>
        <div class='skills-container'>
            <button type='button' onClick={this.toggleFalseSkills} className='toggleEducation'>+</button>
            <div className='skills-title'>Skills</div>
        </div>
        {!this.state.show ?
        <form 
        onSubmit={this.onSubmitTask} className='skills-form-container'>
          <input 
          placeholder="add skills"
          onChange={this.handleChange}
          value={task.text}
          className='input'
          type='text'
             />
          <button type="submit" id="submit">+</button>
          <button type='button' onClick={this.toggleTrueSkills}className="toggle-skills">X</button>

        </form>: true}  
        <List tasks={tasks} />
      </div>
    )
  }
}

export default Skills;