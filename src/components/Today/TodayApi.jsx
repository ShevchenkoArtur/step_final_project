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
                   editTaskText={this.props.editTaskText}
                   tasks={this.props.tasks}
                   getTodayDate={this.props.getTodayDate}
                   findLaterTasks={this.props.findLaterTasks}
                   getTasks={this.props.getTasks}
            />
        )
    }
}

export default TodayApi