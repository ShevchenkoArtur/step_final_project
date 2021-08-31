import React from 'react';
import style from './Task.module.scss'

const Task = (props) => {

    const updateValue = (e) => props.onEditTask(props.task.id, e.target.value)

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
                <input type="checkbox" className={style.priorityCheckbox} onClick={props.moveTaskIntoArchive}/>
            </label>

            <input className={`input ${props.darkTheme ? 'inputColorLight' : 'inputColorDark'}`}
                   type="text" value={props.task.body}
                   onChange={updateValue}
            />

            {`${formatDate(new Date(props.task.upcomingDate))}`}

            <button className='button' onClick={props.moveTaskIntoBin}>
                <span className="icon-bin"></span>
            </button>
        </div>
    );
};

export default Task;