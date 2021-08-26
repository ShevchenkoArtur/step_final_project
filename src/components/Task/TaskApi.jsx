import React from 'react';
import Task from './Task';
import axios from 'axios';

class TaskApi extends React.Component {

    constructor(props) {
        super(props);
        this.moveTaskIntoBin = this.moveTaskIntoBin.bind(this)
        this.onEditTask = this.onEditTask.bind(this)
    }

    moveTaskIntoBin() {
        const data = {
            inBin: true
        }

        axios.put(`http://localhost:8080/api/tasks/${this.props.task.id}`, data)
            .then(response => {
                console.log(response)
                this.props.moveTaskIntoBin(this.props.task.id, true)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onEditTask(id) {
        axios.put(`http://localhost:8080/api/tasks/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Task
                moveTaskIntoBin={this.moveTaskIntoBin}
                  onEditTask={this.onEditTask}
                  task={this.props.task}
                  editTaskText={this.props.editTaskText}
            />
        )
    }
}

export default TaskApi
