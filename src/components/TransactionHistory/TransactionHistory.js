import PropTypes from 'prop-types';
import TransactionHistoryItems from './TransactionHistoryItems/TransactionHistoryItems.js';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.transaction_head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => (
                <TransactionHistoryItems
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            ))}
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }))    
}

export default TransactionHistory;