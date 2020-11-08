import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  margin: 50px 0;
  display: inline-block;
  border: 1px solid darkgray;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
`;
const Item = styled.li`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid darkgray;
`;

export { Section, List, Item };
