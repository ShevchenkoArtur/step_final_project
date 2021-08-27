import React from 'react';

const Bin = props => {
    const displayTasks = () => {

        if (props.binTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return props.binTasks.map((el, idx) =>
            <div key={idx}>
                <p>id: {el.id}</p>
                <p>body: {el.body}</p>
                <p>category: {el.category}</p>
                <p>inBin: {el.inBin}</p>
                <button>Восстановить</button>
            </div>)
    }

    return (
        <div>
           <div style={{display: 'flex', justifyContent: 'space-between'}}>
               <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                   <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-bin"></span>
                   Корзина
               </h1>

               <button onClick={props.onDeleteAllTasks}>Удалить все</button>
           </div>

            {
                displayTasks()
            }
        </div>
    );
};

export default Bin;

