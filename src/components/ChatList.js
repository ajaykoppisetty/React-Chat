import React from 'react'
import PropTypes from 'prop-types'
import ChatListItem from './ChatListItem'

const ChatList = (props) => (
    <div className={props.chatListClass}>
      {
        props.userData.map(item => (
          <props.chatListItem
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            name={item.name}
            onlineStatus={item.onlineStatus}
            lastSeen={item.lastSeen}
            {...item}
          />
        ))
      }
    </div>
  )

ChatList.propTypes = {
  userData: PropTypes.array.isRequired,
  chatListItem: PropTypes.func,
  chatListClass: PropTypes.string,
}

ChatList.defaultProps = {
  userData: [],
  chatListItem: ChatListItem,
  chatListClass: "user-list",
}

export default ChatList
