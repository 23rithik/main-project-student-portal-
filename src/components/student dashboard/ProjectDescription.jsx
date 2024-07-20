import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs';
const ProjectDescription = () => {
  return (
    <>
     <Breadcrumbs/>
    <div className="mt-bc"></div> 

    <div style={{marginBottom:'200px',marginTop:'50px'}}>
    <h1 style={{textAlign:'center'}}>Food Delivery App</h1>
    <div style={{marginTop:'30px'}}>
        <p style={{textAlign:'justify',fontSize:'25px',fontFamily:'sans-serif',margin:'70px'}} >The Home Page is the entry point for users visiting the Food Delivery App. It provides an overview of the available food items, allows users to browse through the menu, and gives quick access to other key features of the app such as user authentication and the shopping cart.Key Features are:-Food Item Display: Showcases all available food items in a visually appealing manner
using card components,Search Functionality: Allows users to search for specific food items using keywords,Filter Options: Enables users to filter food items based on categories, such as cuisines,
dietary preferences, or price ranges,Add to Cart: Users can add food items to their cart directly from the Home Page,Navigation Bar: Provides easy navigation to other parts of the app such as Login,
Register, Cart, and Admin Dashboard (if the user is an admin),Responsive Design: Ensures a seamless user experience across different devices and
screen sizes.</p>
    </div>
    <div className='d-flex justify-content-center gap-3' >
    <Button style={{backgroundColor:'#00a6bb'}} variant='contained'>Select</Button>

    <Link to='/student'><Button style={{backgroundColor:'#00a6bb'}} variant='contained'>Back</Button></Link>
    </div>
   </div>
   </>
  )
}

export default ProjectDescription