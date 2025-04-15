import React from 'react'
import { Routes } from 'react-router-dom'
import { authRoutes } from './authRoutes'
import { restrictedRoutes } from './restrictedRoutes'

const NavigationManager = () => {
    return (
        <Routes>
            {
                authRoutes?.map((route, index) => {
                    return (
                        <route.element key={index} path={route.path} element={route.element} />
                    )
                })
            }

            {
                restrictedRoutes?.map((route, index) => {
                    return (
                        <route.element key={index} path={route.path} element={route.element} />
                    )
                })
            }
        </Routes>
    )
}

export default NavigationManager