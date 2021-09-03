import React from 'react';
import style from './Task.module.scss'

const Task = (props) => {

    const updateValue = (e) => props.onEditTask(props.task.id, e.target.value)

    const onMoveTaskIntoBin = () => {
        props.moveTaskIntoBin()
        props.toggleNotificationFlags('inBin')
        setTimeout(() => props.toggleNotificationFlags('inBin'), 2000)
    }

    const onMoveTaskIntoArchive = () => {
        props.moveTaskIntoArchive()
        props.toggleNotificationFlags('isDone')
        setTimeout(() => props.toggleNotificationFlags('isDone'), 2000)
    }

    const formatDate = (date) => {
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

    return (
        <div className={`taskBlock ${props.darkTheme ? 'taskBlockLight' : 'taskBlockDark'}`}>
            <label style={{marginRight: '10px'}}>
               <span style={{fontSize: '25px'}} className={
                   `icon-square
                   ${props.darkTheme ? 'iconLight' : 'iconDark'}
                    ${props.task.priority === '3'
                       ?
                       style.highPriority
                       :
                       props.task.priority === '2'
                           ?
                           style.mediumPriority
                           :
                           props.task.priority === '1' ? style.lowPriority : ''}
                    `}
               >
               </span>
                <input type="checkbox" className={style.priorityCheckbox} onClick={onMoveTaskIntoArchive}/>
            </label>

            <input className={`input ${props.darkTheme ? 'inputColorLight' : 'inputColorDark'}`}
                   type="text" value={props.task.body}
                   onChange={updateValue}
            />

            <div className={style.taskDate}>
                <span style={{marginRight: '10px'}}
                      className={`icon-calendar ${props.darkTheme ? 'iconLight' : 'iconDark'}`}></span>
                <span className={`${props.darkTheme ? 'dateFormatLight' : 'dateFormatDark'}`}>
                    {`${formatDate(new Date(props.task.upcomingDate))}`}
                </span>
            </div>

            <button className='button' onClick={onMoveTaskIntoBin}>
                <span className={`icon-bin ${props.darkTheme ? 'iconLight' : 'iconDark'}`}></span>
            </button>
        </div>
    );
};

export default Task;