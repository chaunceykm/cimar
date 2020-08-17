import React from 'react'
import { CimarContext } from './context/CimarContext'
import App from './App'

export const AppWithContext = () => {
const token = window.localStorage.getItem('token')

  return (
    <CimarContext.Provider value={token}>
      <App />
    </CimarContext.Provider>
  )
}
