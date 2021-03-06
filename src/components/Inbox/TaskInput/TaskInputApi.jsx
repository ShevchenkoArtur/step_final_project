import React from 'react';
import TaskInput from './TaskInput';
import axios from 'axios';

class TaskInputApi extends React.Component {

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this)
    }

    addTask() {
        const data = {
            body: this.props.textarea.value,
            priority: this.props.prioritySelect.value ? this.props.prioritySelect.value : null,
            upcomingDate: this.props.calendar.value ? this.props.calendar.value: this.props.calendar.todayDate,
        }

        axios.post('http://localhost:8080/api/tasks', data)
            .then(response => {
                this.props.addTask(response.data.id)
                axios.get('http://localhost:8080/api/tasks')
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
            <TaskInput addTask={this.addTask}
                       textarea={this.props.textarea}
                       prioritySelect={this.props.prioritySelect}
                       updateTextarea={this.props.updateTextarea}
                       updatePrioritySelect={this.props.updatePrioritySelect}
                       darkTheme={this.props.darkTheme}
                       calendar={this.props.calendar}
                       toggleCalendar={this.props.toggleCalendar}
                       updateCalendarValue={this.props.updateCalendarValue}
                       toggleNotificationFlags={this.props.toggleNotificationFlags}
            />
        )
    }
}

export default TaskInputApi