import React from 'react'
import Today from './Today';
import axios from 'axios';

class TodayApi extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => {
                this.props.getTasks(response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Today darkTheme={this.props.darkTheme}
                   tasks={this.props.tasks}
                   todayTasks={this.props.todayTasks}
                   getTasks={this.props.getTasks}
                   sortArrBy={this.props.sortArrBy}
                   editTaskText={this.props.editTaskText}
                   prioritySelect={this.props.prioritySelect}
                   toggleNotificationFlags={this.props.toggleNotificationFlags}
            />
        )
    }
}

export default TodayApi