import React from 'react'
import Background from './components/Backgroud'
import Login from './screens/auth/login'
import Signup from './screens/auth/signup'

function App() {
  return (
    <>
      <Background />
      {/* <Login /> */}
      <Signup />
    </>
  )
}

export default App