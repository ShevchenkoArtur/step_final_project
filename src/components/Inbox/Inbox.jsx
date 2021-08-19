import React from 'react'

const Inbox = (props) => {
    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-inbox"></span>
                Входящие
            </h1>
            {
                props.inboxTasks.length > 0
                    ?
                    <div>Есть</div>
                    :
                    <div style={{color: '#76899b'}}>Тут пока ничего нет</div>
            }
        </div>
    )
}

export default Inbox