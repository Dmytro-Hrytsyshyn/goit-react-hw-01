import styles from "../Transactions/Transaction.module.css";

const transactionsHistory = ({ items }) => {
  return (
    <table className={styles.transaction_table}>
      <thead className={styles.thead_table}>
        <tr className={styles.thead_tr_table}>
          <th className={styles.transaction_table_th}>Type</th>
          <th className={styles.transaction_table_th}>Amount</th>
          <th className={styles.transaction_table_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.transaction_table_td}>{item.type}</td>
            <td className={styles.transaction_table_td}>{item.amount}</td>
            <td className={styles.transaction_table_td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default transactionsHistory;

// className={styles.transaction_table_td}
