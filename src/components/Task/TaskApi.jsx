import React from 'react';
import Task from './Task';
import axios from 'axios';

class TaskApi extends React.Component {

    constructor(props) {
        super(props);
        this.moveTaskIntoBin = this.moveTaskIntoBin.bind(this)
        this.onEditTask = this.onEditTask.bind(this)
        this.moveTaskIntoArchive = this.moveTaskIntoArchive.bind(this)
    }

    moveTaskIntoBin() {
        const data = {
            inBin: true
        }

        axios.put(`http://localhost:8080/api/tasks/${this.props.task.id}`, data)
            .then(response => {
                console.log(response)
                axios.get(`http://localhost:8080/api/tasks`)
                    .then(response => {
                        this.props.getTasks(response.data)
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    moveTaskIntoArchive(id) {
        const data = {
            isDone: true
        }

        axios.put(`http://localhost:8080/api/tasks/${this.props.task.id}`, data)
            .then(response => {
                console.log(response)
                axios.get(`http://localhost:8080/api/tasks`)
                    .then(response => {
                        this.props.getTasks(response.data)
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
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
                moveTaskIntoArchive={this.moveTaskIntoArchive}
                onEditTask={this.onEditTask}
                task={this.props.task}
                editTaskText={this.props.editTaskText}
            />
        )
    }
}

export default TaskApi
