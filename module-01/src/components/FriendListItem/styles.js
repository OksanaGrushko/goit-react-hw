import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  width: 70%;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 3px 5px grey;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
  margin: 15px;
`;

const Img = styled.img`
  border-radius: 10%;
  margin-right: 15px;
`;

const Name = styled.p`
  font-size: 25px;
`;

export { Item, Status, Img, Name };
