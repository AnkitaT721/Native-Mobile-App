import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './Context/authContext'
import ScreenMenu from './Components/Menus/ScreenMenu'

const RootNavigation = () => {
  return (
    <AuthProvider>
        <ScreenMenu />
    </AuthProvider>
  )
}

export default RootNavigation