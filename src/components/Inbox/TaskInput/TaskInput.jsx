import React from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import style from './TaskInput.module.scss'

const TaskInput = props => {

    const updateTextarea = e => props.updateTextarea(e.target.value)
    const updateCategorySelect = e => props.updateCategorySelect(e.target.value)
    const updatePrioritySelect = e => props.updatePrioritySelect(e.target.value)
    const addTask = () => props.addTask()

    const updateDate = (e) => {
        props.updateCalendarValue(e.value)
    }

    return (
        <div className={`${style.addTaskBlock} ${props.darkTheme ? style.addTaskBlockLight : style.addTaskBlockDark}`}>
            <textarea className={`textarea ${props.darkTheme ? 'textareaColorLight' : 'textareaColorDark'}`}
                      placeholder='Новая задача' value={props.textarea.value}
                      onChange={updateTextarea}
            />

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
                    {`${props.calendar.value ? props.calendar.value : props.calendar.todayDate}`}
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

            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;