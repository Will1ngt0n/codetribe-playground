import '../styles/DisplayTransaction.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../reducers/index';
let arr = []
function DisplayTransactions(props) {
    const { transactions } = props;
    const dispatch = useDispatch()
    console.log(transactions);
    return (
        <div className='table'>
            <div className='column'>
                <div className='span header'>Pos</div>
                <div className='span header'>Item</div>
                <div className='span header'>Amount</div>
                <div className='span header'>Type</div>
                <div className='span header'>Edit</div>
            </div>
            {transactions.map((exp, i) => {
                return (
                    <div className='column'>
                        <div className='span'>{ i + 1}</div>
                        <div className='span'>{ exp.item }</div>
                        <div className='span'>{ exp.amount }</div>
                        <div className='span'>{ exp.transactionType }</div>
                        <input type="button" className='span button' onClick={ () => dispatch(removeItem(i))} value="Delete"/>
                    </div>
                )
            })}

        </div>
    )
}

export default DisplayTransactions;