import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItems = ({ id, type, amount, currency }) => {
    return (
        <tbody className={css.transaction_body}>
            <tr key={id}>
                <td className={css.transaction_type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    );
}

TransactionHistoryItems.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItems;