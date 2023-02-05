import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import LiveProgram from '../pages/LiveProgram'

function Router() {
  return (
    <Routes>
        <Route path='*' element={<Navigate to="/برنامه-زنده"/>} />
        <Route path='/برنامه-زنده' element={<LiveProgram/>}/>
    </Routes>
  )
}

export default Router