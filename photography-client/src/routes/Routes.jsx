import React from 'react'
import SignUp from '../pages/login/SignUp'

import Main from '../layout/Main'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Instructors from '../pages/instructors/Instructors'
import Classes from '../pages/classes/Classes'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        // {
        //     path: '/colleges',
        //     element: <Colleges></Colleges>
        // },
        // {
        //     path: '/colleges/:id',
        //     element: <CollegeDetail></CollegeDetail>,
        //     loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        // },
        // {
        //     path: '/mycollege',
        //     element: <MyCollege></MyCollege>
        // },
        // {
        //     path: '/mycollege/:id',
        //     element: <MyCollege></MyCollege>
        // },
        // {
        //     path: '/profile/:id',
        //     element: <userProfile></userProfile>
        // },
        // {
        //     path: '/admission',
        //     element: <AdmissionForm></AdmissionForm>
        // }
    ]
    }
]);