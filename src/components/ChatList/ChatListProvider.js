import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import ChatList from './ChatList';
import ChatButton from './ChatListButton';
import defaultTheme from '../../themes/_default_theme.scss';

class ChatProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

    handleChatProvider = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }));
    }

    render() {
      const {
        userData, updateChatWindow, noButton, theme,
      } = this.props;
      const { open } = this.state;
      const ChatListWOButton = () => (
        <ChatList
          userData={userData}
          handleChatItemClick={id => updateChatWindow(id)}
          theme={theme}
        />
      );
      const ChatListWButton = () => (
        <div>
          {
                    open
                    && (
                    <ChatList
                      userData={userData}
                      handleChatItemClick={id => updateChatWindow(id)}
                    />
                    )
                }
          <ChatButton iconClass={open ? 'fas fa-times' : 'far fa-comment'} handleChatListProvider={this.handleChatProvider} />
        </div>
      );
      const ChatListDisplay = noButton ? ChatListWOButton : ChatListWButton;
      return <ChatListDisplay />;
    }
}

ChatProvider.propTypes = {
  noButton: PropTypes.bool,
  userData: PropTypes.arrayOf(PropTypes.object),
  updateChatWindow: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

ChatProvider.defaultProps = {
  noButton: false,
  userData: [],
};

export default themr('ThemedChatProvider', defaultTheme, { composeTheme: 'softly' })(ChatProvider);
