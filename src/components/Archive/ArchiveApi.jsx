import React from 'react';
import Archive from './Archive';
import axios from 'axios';

class ArchiveApi extends React.Component {

    constructor(props) {
        super(props);
        this.onClearArchive = this.onClearArchive.bind(this)
    }


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

    onClearArchive() {
        axios.patch('http://localhost:8080/api/tasks')
            .then(response => {
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
            <Archive tasks={this.props.tasks}
                     darkTheme={this.props.darkTheme}
                     onClearArchive={this.onClearArchive}
            />
        )
    }
}

export default ArchiveApi