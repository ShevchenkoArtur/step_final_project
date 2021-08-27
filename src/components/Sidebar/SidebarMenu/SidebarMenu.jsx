import React from 'react';
import style from '../Sidebar.module.scss';
import {NavLink} from 'react-router-dom';
import Projects from './Projects/Projects';

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
                        {props.tasks.filter(el => el.category === 'inbox').length}
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
                        {props.tasks.filter(el => el.category === 'today' && !el.inBin).length}
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
                        {props.tasks.filter(el => el.category === 'archive').length}
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
                        {props.tasks.filter(el => el.inBin).length}
                    </div>
                </NavLink>
            </li>
            <li className={`${style.item}`}>
               <Projects />
            </li>
        </ul>
    );
};

export default SidebarMenu;