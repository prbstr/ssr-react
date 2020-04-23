import React from 'react'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

export default [
    {
        path: '/',
        ...HomePage,
        exact: true
    },
    {
        ...UsersPage, 
        path: '/users'
    }
]