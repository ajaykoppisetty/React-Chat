import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import defaultTheme from '../../themes/_default_theme.scss';

const ChatWindowHeader = (props) => {
  const { theme, chatUserId, handleCloseClick } = props;
  // const avatar = { myData };
  // const userAvatar = require(avatar);
  return (
    <div className={theme.windowHeader}>
      <img
        src={chatUserId.avatar}
        alt={chatUserId.name.slice(0, 1).toUpperCase()}
        className={theme.chatWindowAvatar}
      />
      <span className={theme.chatUserName}>
        {chatUserId.name}
      </span>
      <div onClick={() => handleCloseClick(chatUserId.id)}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

ChatWindowHeader.propTypes = {
  chatUserId: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleCloseClick: PropTypes.func.isRequired,
};

export default themr('ThemedChatWindowHeader', defaultTheme, { composeTheme: 'softly' })(ChatWindowHeader);
