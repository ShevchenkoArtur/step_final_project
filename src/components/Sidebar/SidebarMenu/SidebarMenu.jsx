import React from 'react';
import style from '../Sidebar.module.scss';
import {NavLink} from 'react-router-dom';

const SidebarMenu = props => {
    return (
        <ul className={`${style.list}`}>
            <li className={`${style.item}`}>
                <NavLink
                    className={`${style.link} 
                                    ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                    to='/inbox'
                >
                         <span
                             className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} 
                             icon-inbox`}
                             style={{paddingRight: '10px'}}
                         >
                        </span>
                    Входящие

                    {props.inboxTasks.length}
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={`${style.link} 
                                    ${props.darkTheme ? 'linkColorLight' : 'linkColorDark'}`}
                    to="/"
                >
                        <span
                            className={`${props.darkTheme ? 'iconSidebarLight' : 'iconSidebarDark'} 
                            icon-star`}
                            style={{paddingRight: '10px'}}
                        >
                        </span>
                    Сегодня

                    {props.todayTasks.length}
                </NavLink>
            </li>
        </ul>
    );
};

export default SidebarMenu;