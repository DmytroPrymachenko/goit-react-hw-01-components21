export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

          <tbody>
              {items.map(({ id, type, amount, currency }, idx) =>
              (<tr key={id} $color={idx % 2 === 0 ? 'grey' : 'teal'}>
      <td className="type">{type}</td>
      <td className="amount">{amount}</td>
      <td className="currency">{currency}</td>
    </tr>))}
  </tbody>
</table>
  );
};


