import React from 'react';
import style from '../Sidebar.module.scss';
import {NavLink} from 'react-router-dom';
import NotificationContainer from '../../Notification/NotificationContainer';

const SidebarMenu = props => {
    const makeNotification = () => {
        if (props.notification.isAdd) return <NotificationContainer/>
        if (props.notification.inBin) return <NotificationContainer/>
        if (props.notification.isDone) return <NotificationContainer/>
        if (props.notification.isEmptyBin) return <NotificationContainer/>
        if (props.notification.isEmptyArchive) return <NotificationContainer/>
    }

    return (
        <div>
            <ul className={`${style.list}`}>
                <li className={`${style.item} ${props.darkTheme ? style.itemHoverLight : style.itemHoverDark}`}>
                    <NavLink
                        className={`${style.link} ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                        to='/inbox'
                    >
                        <div>
                        <span
                            className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} icon-inbox`}
                            style={{paddingRight: '10px'}}
                        >
                        </span>
                            Добавить задачу
                        </div>
                    </NavLink>
                </li>
                <li className={`${style.item} ${props.darkTheme ? style.itemHoverLight : style.itemHoverDark}`}>
                    <NavLink
                        className={`${style.link} ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                        to="/"
                    >
                        <div>
                        <span
                            className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} icon-star`}
                            style={{paddingRight: '10px'}}
                        >
                        </span>
                            Сегодня
                        </div>
                        <div>
                            {props.tasks.filter(el => el.createdAt >= el.upcomingDate && !el.inBin && !el.isDone).length}
                        </div>
                    </NavLink>
                </li>
                <li className={`${style.item} ${props.darkTheme ? style.itemHoverLight : style.itemHoverDark}`}>
                    <NavLink
                        className={`${style.link} ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                        to="/plans"
                    >
                        <div>
                        <span
                            className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} icon-calendar`}
                            style={{paddingRight: '10px'}}
                        >
                        </span>
                            Планы
                        </div>
                        <div>
                            {props.tasks.filter(el => el.upcomingDate > el.createdAt && !el.inBin && !el.isDone).length}
                        </div>
                    </NavLink>
                </li>
                <li className={`${style.item} ${props.darkTheme ? style.itemHoverLight : style.itemHoverDark}`}>
                    <NavLink
                        className={`${style.link} ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                        to="/archive"
                    >
                        <div>
                        <span
                            className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} icon-archive`}
                            style={{paddingRight: '10px'}}
                        >
                        </span>
                            Архив
                        </div>

                        <div>
                            {props.tasks.filter(el => el.isDone).length}
                        </div>
                    </NavLink>
                </li>
                <li className={`${style.item} ${props.darkTheme ? style.itemHoverLight : style.itemHoverDark}`}>
                    <NavLink
                        className={`${style.link} ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                        to="/bin"
                    >
                        <div>
                         <span
                             className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} icon-bin`}
                             style={{paddingRight: '10px'}}
                         >
                        </span>
                            Корзина
                        </div>

                        <div>
                            {props.tasks.filter(el => el.inBin).length}
                        </div>
                    </NavLink>
                </li>
            </ul>
            {makeNotification()}
        </div>
    );
};

export default SidebarMenu;