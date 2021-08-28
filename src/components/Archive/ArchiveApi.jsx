import React from 'react';
import Archive from './Archive';
import axios from 'axios';

class ArchiveApi extends React.Component {

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
            <Archive tasks={this.props.tasks}
                     darkTheme={this.props.darkTheme}
                     getTasks={this.props.getTasks}
            />
        )
    }
}

export default ArchiveApi