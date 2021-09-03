import React from 'react';

const Sort = (props) => {
    const sortBy = (e) => {
        props.updateSortSelect(e.target.value)
        props.sortArrBy(e.target.value)
    }

    return (
        <select className='select' value={props.sortSelect.value} onChange={sortBy}>
            <option value="sort" selected hidden>Сортировать</option>
            <option value='byPriority'>По приоритету</option>
            <option value='backToPriority'>Обратно приоритету</option>
        </select>
    );
};

export default Sort;