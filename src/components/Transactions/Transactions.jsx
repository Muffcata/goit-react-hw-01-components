import style from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={style.box}>
      <table className={style.tableBox}>
        <thead>
          <tr className={style.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={style.column}>{type}</td>
              <td className={style.column}>{amount}</td>
              <td className={style.column}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
