import styled from 'styled-components';

const Table = styled.table`
  width: 700px;
  border: 1px solid;
`;

const TableHead = styled.thead`
  text-transform: uppercase;
  color: #fff;
`;

const TableHeadR = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0, 206, 209);
`;

const TableHeadH = styled.th`
  text-align: center;
  font-size: 20px;
`;

const TableBody = styled.tbody`
  display: block;
`;

const TableBodyR = styled.tr`
  display: flex;
  width: 100%;
  justify-content: space-around;
  &:nth-child(2n) {
    background-color: rgb(220, 220, 220);
  }
`;

const TableBodyD = styled.td``;
export {
  Table,
  TableHead,
  TableHeadR,
  TableHeadH,
  TableBody,
  TableBodyR,
  TableBodyD,
};
