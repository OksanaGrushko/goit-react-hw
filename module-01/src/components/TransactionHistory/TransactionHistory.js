import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadR,
  TableHeadH,
  TableBody,
  TableBodyR,
  TableBodyD,
} from './styles';

function TransactionHistory({ items }) {
  return (
    <>
      <Table>
        <TableHead>
          <TableHeadR>
            <TableHeadH>Type</TableHeadH>
            <TableHeadH>Amount</TableHeadH>
            <TableHeadH>Currency</TableHeadH>
          </TableHeadR>
        </TableHead>

        <TableBody>
          {items.map(item => (
            <TableBodyR key={item.id}>
              <TableBodyD>{item.type}</TableBodyD>
              <TableBodyD>{item.amount}</TableBodyD>
              <TableBodyD>{item.currency}</TableBodyD>
            </TableBodyR>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ),
};
export default TransactionHistory;
