import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Pages/Root/Root';
import Home from './Components/Pages/Home/Home';
import UniversityDetails from './Components/Pages/UniversityDetails/UniversityDetails';
import University from './Components/Pages/Uk/University/University';
import CanadaUniversity from './Components/Pages/CanadaUniversity/CandaUniversity';
import IrelandUniversity from './Components/Pages/IrelandUniversity/IrelandUniversity';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>, 
        
      },
      {
         path:"university/:id" ,
         element: <UniversityDetails></UniversityDetails>

      },
      {
         path:"uk-university" ,
         element: <University></University>
      },
      {
         path:"canada-university" ,
         element: <CanadaUniversity></CanadaUniversity>
      },
      {
         path:"ireland-university" ,
         element: <IrelandUniversity></IrelandUniversity>
      },
      
    
    ]
  
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
 <RouterProvider router={router}></RouterProvider>
 
    
  </React.StrictMode>,
)
