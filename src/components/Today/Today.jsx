import React from 'react'
import TaskApi from '../Task/TaskApi';

const Today = props => {

    const displayTasks = () => {
        if(props.todayTasks.length === 0) {
            return 'Тут пока ничего нет'
        }

        const arr = props.todayTasks.map((el, idx) =>
            <TaskApi deleteTask={props.deleteTask} task={el}/>
        )

        return arr
    }

    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-star"></span>
                Сегодня
            </h1>
            {
                // props.todayTasks.length > 0
                //     ?
                //     props.todayTasks.map((el, idx) =>
                //         <TaskApi deleteTask={props.deleteTask} task={el}/>
                //     )
                //     :
                //     <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
                displayTasks()
            }
        </div>
    )
}

export default Today