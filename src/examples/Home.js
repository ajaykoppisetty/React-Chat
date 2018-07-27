import React, { Component } from 'react'
import { userData } from '../data'
import {
  ChatListProvider,
  ChatListHeader,
  ChatList,
  ChatListSearch,
} from '../components/index'
import ChatListHeader1 from './exampleChat1/ChatListHeader1'
import ChatList1 from './exampleChat1/ChatList1'
import ChatListItem1 from './exampleChat1/ChatListItem1'
import ChatListSearch1 from './exampleChat1/ChatListSearch1'
import ChatWindowHeader from './chat-window/ChatWindowHeader'
import WindowIndex from './chat-window/index'
import DemoPage from './demoPage';

import ExampleChat2 from './exampleChat2/'
import ExampleChat3 from './exampleChat3';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchedFor: '',
    }
  }

  handleSearchChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchedFor: e.target.value,
    })
  }
  render() {
    return (
      // <DemoPage/>
      <div>
        <ExampleChat2 userData={userData} />
        <ExampleChat3 userData={userData} />
      </div>
    )
  }
}

export default Home
