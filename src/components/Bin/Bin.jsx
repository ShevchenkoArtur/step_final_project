import React from 'react';

const Bin = props => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-bin"></span>
                Корзина
            </h1>
            {
                props.binTasks.length > 0
                    ?
                    <div>Есть</div>
                    :
                    <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
            }
        </div>
    );
};

export default Bin;

