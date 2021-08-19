import React from 'react';

const Archive = props => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-archive"></span>
                Архив
            </h1>
            {
                props.archiveTasks.length > 0
                    ?
                    <div>Есть</div>
                    :
                    <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
            }
        </div>
    );
};

export default Archive;