import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [authData, setAuthData] = useState({
    userToken: null,
    userId: null,
    isAdmin: null,
    userEmail: null,
    userName: null,
  })

  const signIn = (authData) => {
    const { userToken, userId, isAdmin, userEmail, userName } = authData
    setAuthData({
      userToken,
      userId,
      isAdmin,
      userEmail,
      userName,
    })
  }

  const signUp = (authData) => {
    const { userToken, userId, isAdmin, userEmail, userName } = authData
    setAuthData({
      userToken,
      userId,
      isAdmin,
      userEmail,
      userName,
    })
  }

  const signOut = () => {
    setAuthData({
      userToken: null,
      userId: null,
      isAdmin: null,
      userEmail: null,
      userName: null,
    })
  }

  return (
    <AuthContext.Provider value={{
      authData,
      signIn,
      signUp,
      signOut,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
