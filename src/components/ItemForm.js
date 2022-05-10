import React from 'react';

function ItemForm() {
    return (
    <div className='main'>
        <h1>Item Form</h1>
        <form className="ui form" id='form' onSubmit={console.log('submit')}>
        <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input type="number" name="amount" placeholder="Amount" step="0.01" />
            </div>
            <button className="ui button" type="submit">
        Add Transaction
        </button>
    </form>
    </div>
    )
}

export default ItemForm;