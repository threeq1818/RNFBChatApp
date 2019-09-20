import React from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import { configureStore } from './store'

import ChatApp from './components/ChatApp'

const store = configureStore()

const App = () =>
  // <Text style={{ fontSize: 20 }}>React.Component</Text>
  <Provider store={store}>
    <ChatApp />
  </Provider>

export default App