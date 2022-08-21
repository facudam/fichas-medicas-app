import React from 'react'
import { Sidebar } from './Sidebar'
import { MainBar } from './MainBar'

export const BodyApp = () => {
  return (
    <div className='body-app'>
        <Sidebar />
        <MainBar />
    </div>
  )
}

