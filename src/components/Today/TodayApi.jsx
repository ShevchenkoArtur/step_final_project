import React from 'react'
import Today from './Today';
import axios from 'axios';

class TodayApi extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => {
                this.props.getTasks(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Today darkTheme={this.props.darkTheme}
                   todayTasks={this.props.todayTasks}
                   deleteTask={this.props.deleteTask}
            />
        )
    }
}

export default TodayApi