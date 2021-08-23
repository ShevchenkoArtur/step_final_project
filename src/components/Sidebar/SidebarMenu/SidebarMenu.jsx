import React from 'react';
import style from '../Sidebar.module.scss';
import {NavLink} from 'react-router-dom';

const SidebarMenu = props => {
    return (
        <ul className={`${style.list}`}>
            <li className={`${style.item}`}>
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
                        Входящие
                    </div>
                    <div>
                        {props.inboxTasks.length}
                    </div>
                </NavLink>
            </li>
            <li className={`${style.item}`}>
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
                        {props.todayTasks.length}
                    </div>
                </NavLink>
            </li>
            <li className={`${style.item}`}>
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
                        {props.archiveTasks.length}
                    </div>
                </NavLink>
            </li>
            <li className={`${style.item}`}>
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
                        {props.binTasks.length}
                    </div>
                </NavLink>
            </li>
        </ul>
    );
};

export default SidebarMenu;