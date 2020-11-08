import React from 'react';
import PropTypes from 'prop-types';
import List from './styles';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        ))}
      </List>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired,
  ),
};

export default FriendList;
