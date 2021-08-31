import React, {Component} from 'react';
import Plans from './Plans';
import axios from 'axios';

class PlansApi extends Component {

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
            <Plans
                planTasks={this.props.planTasks}
                getTasks={this.props.getTasks}
                darkTheme={this.props.darkTheme}
                editTaskText={this.props.editTaskText}
            />
        );
    }
}

export default PlansApi;