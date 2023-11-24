import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from '../pages/LogIn/Login'
import SurveyCreate from "../pages/SurvayCreate/SurvayCreate";
import DashBoard from "../Dashboard/DashBoard";
import SignUp from "../pages/SignUp/SignUp";
import AllUsers from "../Dashboard/AllUsers/AllUsers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
       
      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    },
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
         path:'surveyCreate',
         element:<SurveyCreate></SurveyCreate>
        },
        {
         path:'allUsers',
         element:<AllUsers></AllUsers>
        },
      ]
    }
  ]);