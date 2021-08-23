import React from 'react'

const Today = props => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-star"></span>
                Сегодня
            </h1>
            {
                props.todayTasks.length > 0
                    ?
                    props.todayTasks.map((el, idx) => <div key={idx}>{el.body}</div>)
                    :
                    <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
            }
        </div>
    )
}

export default Today