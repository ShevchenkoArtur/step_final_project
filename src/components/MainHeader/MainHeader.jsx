import React from 'react';
import style from './MainHeader.module.scss'

const MainHeader = props => {

    const switchDarkTheme = () => {
        props.switchDarkTheme()
    }

    return (
        <header className={style.header}>
            <ul className={style.list}>
                <li className={style.item}>
                    <button onClick={switchDarkTheme} className='button'>
                        <span className="icon-theme"></span>
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default MainHeader;