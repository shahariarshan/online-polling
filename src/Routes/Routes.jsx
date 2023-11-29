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

import ManageSurvay from "../Dashboard/ManageSurvey/ManageSurvay";
import SurveyResponse from "../pages/SurveyResponse/SurveyResponse";
import DetailsSurvey from "../pages/DetailsSurvey/DetailsSurvey";
import Payment from "../Dashboard/Payment/Payment";
import PriceHistory from "../pages/PriceHistory/PriceHistory";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
// import SurveyUpdate from "../pages/SurvayCreate/SurvayUpdate/SurveyUpdate";



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
        path: '/survey',
        element: <Survey></Survey>
      },
      {
        path: '/payment',
        element:<Payment></Payment>
      },
      
      {
        path: 'surveyDetails/:id',
        element: <DetailsSurvey></DetailsSurvey>,
        loader:({params})=>fetch(`http://localhost:5000/survey/${params.id}`)
      },
     

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path:'adminProfile',
        element:<UserProfile></UserProfile>
      },
      {
        path: 'surveyCreate',
        element: <SurveyCreate></SurveyCreate>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'manageSurvey',
        element: <ManageSurvay></ManageSurvay>
      },
     
      {
        path: 'response',
        element: <SurveyResponse></SurveyResponse>
      },
      {
        path: 'priceHistory',
        element:<PriceHistory></PriceHistory>
      },
      // {
      //   path: 'update/:id',
      //   element: <SurveyUpdate></SurveyUpdate>,
      //   loader:({params})=>fetch(`http://localhost:5000/survey/${params.id}`)
      // },
    ]
  }
]);