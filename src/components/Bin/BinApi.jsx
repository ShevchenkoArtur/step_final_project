import React from 'react';
import Bin from './Bin';
import axios from 'axios';

class BinApi extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteAllTasks = this.onDeleteAllTasks.bind(this)
        this.onRestoreTask = this.onRestoreTask.bind(this)
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/tasks`)
            .then(response => {
                this.props.getTasks(response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onDeleteAllTasks() {
        axios.delete('http://localhost:8080/api/tasks')
            .then(response => {
                axios.get(`http://localhost:8080/api/tasks`)
                    .then(response => {
                        this.props.getTasks(response.data)
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onRestoreTask(id) {
        const data = {
            inBin: false
        }

        axios.put(`http://localhost:8080/api/tasks/${id}`, data)
            .then(response => {
                this.props.restoreTask(id)
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

    render() {
        return (
            <Bin onDeleteAllTasks={this.onDeleteAllTasks}
                 onRestoreTask={this.onRestoreTask}
                 tasks={this.props.tasks}
                 binTasks={this.props.binTasks}
                 darkTheme={this.props.darkTheme}
            />
        )
    }
}

export default BinApi