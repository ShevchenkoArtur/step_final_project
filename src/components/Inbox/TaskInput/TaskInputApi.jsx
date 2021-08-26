import React from 'react';
import TaskInput from './TaskInput';
import axios from 'axios';

class TaskInputApi extends React.Component {

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this)
    }

    addTask() {
        const data = {
            body: this.props.textarea.value,
            category: this.props.select.value
        }

        axios.post('http://localhost:8080/api/tasks', data)
            .then(response => {
                this.props.addTask(response.data.id)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <TaskInput addTask={this.addTask}
                       textarea={this.props.textarea}
                       select={this.props.select}
                       updateTextarea={this.props.updateTextarea}
                       updateSelect={this.props.updateSelect}
            />
        )
    }

}

export default TaskInputApi