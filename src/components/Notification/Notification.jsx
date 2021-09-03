import React from 'react';
import style from './Notification.module.scss'

const Notification = (props) => {

    const getNotificationMessage = () => {
        if (props.notification.inBin) return 'Задача добавлена в корзину'
        if (props.notification.isAdd) return 'Задача добавлена'
        if (props.notification.isDone) return 'Задача заархивирована'
        if (props.notification.isEmptyBin) return 'Корзина очищена'
        if (props.notification.isEmptyArchive) return 'Архив очищен'
    }

    return (
        <div className={style.notification}>
            &#10004; {getNotificationMessage()}
        </div>
    );
};

export default Notification;