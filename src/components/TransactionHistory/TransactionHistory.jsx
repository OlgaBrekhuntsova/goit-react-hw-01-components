import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => (
                 <tr key={id} className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        ))}
        </tbody>
</table>);
};
TransactionHistory.defaultProps = {
  amount: "0", //не находит
  type: "unknown", //не находит
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
      type: PropTypes.string,
amount: PropTypes.string,
currency: PropTypes.string.isRequired,
    })).isRequired
  };
export default TransactionHistory;