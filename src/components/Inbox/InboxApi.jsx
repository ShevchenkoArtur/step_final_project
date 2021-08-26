import React from 'react';
import axios from 'axios';
import Inbox from './Inbox';

class InboxApi extends React.Component {

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
            <Inbox inboxTasks={this.props.inboxTasks}/>
        )
    }

}

export default InboxApi