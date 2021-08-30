import React from 'react';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import style from './TaskInput.module.scss'

const TaskInput = props => {

    const updateTextarea = e => props.updateTextarea(e.target.value)
    const updateCategorySelect = e => props.updateCategorySelect(e.target.value)
    const updatePrioritySelect = e => props.updatePrioritySelect(e.target.value)
    const addTask = () => props.addTask()

    const updateDate = (e) => {
        props.updateCalendarValue(e.value)
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
        <div className={`${style.addTaskBlock} ${props.darkTheme ? style.addTaskBlockLight : style.addTaskBlockDark}`}>
            <div className={`${style.firstRow}`}>
                <textarea className={`textarea ${props.darkTheme ? 'textareaColorLight' : 'textareaColorDark'}`}
                          placeholder='Новая задача' value={props.textarea.value}
                          onChange={updateTextarea}
                />

                <button onClick={addTask}>Добавить</button>
            </div>

            <div className={`${style.secondRow}`}>
                <select value={props.prioritySelect.value} onChange={updatePrioritySelect}>
                    <option value="priority" selected hidden>Приоритет</option>
                    <option value="3">Флаг1</option>
                    <option value="2">Флаг2</option>
                    <option value="1">Флаг3</option>
                    <option value="0">Обычный</option>
                </select>

                <select className={style.select}
                        value={props.categorySelect.value}
                        onChange={updateCategorySelect}
                >
                    <option value="category" selected hidden>Категории</option>
                    <option value="today">Сегодня</option>
                </select>

                <div>
                    <div>
                        <button onClick={props.toggleCalendar}>Дата</button>
                        {` ${props.calendar.value ? formatDate(props.calendar.value) : formatDate(props.calendar.todayDate)}`}
                    </div>


                    {
                        props.calendar.isOpen
                            ?
                            <CalendarComponent
                                change={updateDate}
                                value={props.calendar.value}
                                firstDayOfWeek={props.calendar.weekStart}
                            />
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskInput;