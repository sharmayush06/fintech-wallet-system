import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Transaction from '../pages/Transaction'
import Transfer from '../pages/Transfer'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/transfer' element={<Transfer/>}></Route>
                <Route path='/transaction' element={<Transaction/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/admin' element={<Admin/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
