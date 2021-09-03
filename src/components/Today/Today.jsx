import React from 'react'
import TaskApi from '../Task/TaskApi';
import SortContainer from '../Sort/SortContainer';

const Today = props => {
    const getTodayDate = () => {
        const date = new Date()

        const daysOfWeek = {
            0: 'Вс',
            1: 'Пн',
            2: 'Вт',
            3: 'Ср',
            4: 'Чт',
            5: 'Пт',
            6: 'Сб'
        }
        const months = {
            0: 'янв',
            1: 'фев',
            2: 'мар',
            3: 'апр',
            4: 'мая',
            5: 'июн',
            6: 'июл',
            7: 'авг',
            8: 'сен',
            9: 'окт',
            10: 'ноя',
            11: 'дек'
        }

        return `${daysOfWeek[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
    }

    const displayTasks = () => {

        if (props.todayTasks.length === 0) return <div className='emptyMessage' style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return props.todayTasks.map((el) =>
            <TaskApi key={el.id}
                     task={el}
                     getTasks={props.getTasks}
                     darkTheme={props.darkTheme}
                     editTaskText={props.editTaskText}
                     prioritySelect={props.prioritySelect}
                     sortArrBy={props.sortArrBy}
                     toggleNotificationFlags={props.toggleNotificationFlags}
            />)
    }

    return (
        <div>
            <div>
                <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                    <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-star"></span>
                    Сегодня <span style={{fontSize: '15px'}}>{getTodayDate()}</span>
                </h1>
                <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '40px'}}>
                    <SortContainer />
                </div>
            </div>

            {displayTasks()}
        </div>
    )
}

export default Today