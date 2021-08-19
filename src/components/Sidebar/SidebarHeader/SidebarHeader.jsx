import React from 'react';
import style from './SidebarHeader.module.scss'
import logo from './../../../images/logo.png'

const SidebarHeader = props => {
    return (
        <div className={`${props.darkTheme ? 'linkColorLight' : 'linkColorDark'} ${style.header}`}>
            <img style={{paddingRight: '8px'}} width='40' src={logo}/>Planner App
        </div>
    );
};

export default SidebarHeader;