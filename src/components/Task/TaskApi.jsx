import React from 'react';
import Task from './Task';
import axios from 'axios';

class TaskApi extends React.Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
    }

    deleteTask(id) {
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        //this.props.deleteTask(id)
    }

    render() {
        return (
            <Task deleteTask={this.deleteTask}
                  task={this.props.task}
                  gg={this.props.deleteTask}
            />
        )
    }
}

export default TaskApi
