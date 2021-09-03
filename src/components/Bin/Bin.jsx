import React from 'react';
import style from '../Task/Task.module.scss';

const Bin = props => {
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

    const displayTasks = () => {
        const binTasks = props.tasks.filter(el => el.inBin)

        if (binTasks.length === 0) return <div className='emptyMessage' style={{color: '#76899b'}}>Тут пока ничего
            нет</div>
        return binTasks.map((el, idx) =>
            <div className={`taskBlock ${props.darkTheme ? 'taskBlockLight' : 'taskBlockDark'}`} key={el.id}>
                <input className={`input ${props.darkTheme ? 'textareaColorLight' : 'textareaColorDark'}`}
                       value={el.body}/>
                <div className={style.taskDate}>
                    <span style={{marginRight: '10px'}}
                          className={`icon-calendar ${props.darkTheme ? 'iconLight' : 'iconDark'}`}></span>

                    <span className={`${props.darkTheme ? 'dateFormatLight' : 'dateFormatDark'}`}>
                        {`${formatDate(new Date(el.upcomingDate))}`}
                    </span>
                </div>
            </div>
        )
    }

    const onDeleteAll = () => {
        props.onDeleteAllTasks()
        props.toggleNotificationFlags('isEmptyBin')
        setTimeout(() => props.toggleNotificationFlags('isEmptyBin'), 2000)
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px'}}>
                <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                    <span style={{paddingRight: '10px'}}
                          className={`icon-bin ${props.darkTheme ? 'iconLight' : 'iconDark'}`}></span>
                    Корзина
                </h1>

                <button className='button' onClick={onDeleteAll}>Удалить все</button>
            </div>

            {
                displayTasks()
            }
        </div>
    );
};

export default Bin;

