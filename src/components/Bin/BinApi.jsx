import React from 'react';
import Bin from './Bin';
import axios from 'axios';

class BinApi extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteAllTasks = this.onDeleteAllTasks.bind(this)
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

    render() {
        return (
            <Bin onDeleteAllTasks={this.onDeleteAllTasks}
                 tasks={this.props.tasks}
                 binTasks={this.props.binTasks}
                 darkTheme={this.props.darkTheme}
                 toggleNotificationFlags={this.props.toggleNotificationFlags}
            />
        )
    }
}

export default BinApi