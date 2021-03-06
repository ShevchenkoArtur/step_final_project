import React from 'react';
import axios from 'axios';
import Inbox from './Inbox';

class InboxApi extends React.Component {

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
            <Inbox
                   darkTheme={this.props.darkTheme}
            />
        )
    }

}

export default InboxApi