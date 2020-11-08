import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name"> {name} </p> <p className="tag"> @ {tag} </p>
        <p className="location"> {location} </p>
      </div>
      <ul className="stats">
        <li className="statslist">
          <span className="label"> Followers </span>
          <span className="quantity"> {stats.followers} </span>
        </li>
        <li className="statslist">
          <span className="label"> Views </span>
          <span className="quantity"> {stats.views} </span>
        </li>
        <li className="statslist">
          <span className="label"> Likes </span>
          <span className="quantity"> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Profile.propTypes = {
  // user: PropTypes.exact({
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
  // }).isRequired,
};

export default Profile;
