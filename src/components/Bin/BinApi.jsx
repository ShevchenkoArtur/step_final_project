import React from 'react';
import Bin from './Bin';
import axios from 'axios';

class BinApi extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteAllTasks = this.onDeleteAllTasks.bind(this)
    }

    onDeleteAllTasks() {
        axios.delete('http://localhost:8080/api/tasks')
            .then(response => {
                this.props.emptyTrash()
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <Bin onDeleteAllTasks={this.onDeleteAllTasks}
                 binTasks={this.props.binTasks}
                 darkTheme={this.props.darkTheme}
            />
        )
    }
}

export default BinApi