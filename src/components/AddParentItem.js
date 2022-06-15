import { useState, useEffect } from 'react';
import '../styles/AddItem.css';
export default function AddParentItem(props) {
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('Expense')
    const check = () => {
        console.log(props);
        props.onSubmit({ item, amount, transactionType })
    }
    console.log(props);
    return (
        <div className="form">
            <input placeholder='Enter Item' onBlur={(e) => setItem(e.target.value)}></input>
            <input placeholder="Enter Amount" onBlur={(e) => setAmount(e.target.value)}></input>
            <select onChange={(e) => setTransactionType(e.target.value)}>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>
            <input type="button" value="Add" onClick={() => check()}></input>
        </div>
    )
}