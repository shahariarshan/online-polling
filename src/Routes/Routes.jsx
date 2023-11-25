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
import PrivateRoute from '../Routes/PrivateRoute'

import Survey from "../Components/Survey/Survey";
import SurveyDetails from "../pages/SurbeyDetails";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/survey',
            element:<Survey></Survey>
        },
        {
            path:'/surveyDetails/:id',
            element:<SurveyDetails></SurveyDetails>
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
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
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