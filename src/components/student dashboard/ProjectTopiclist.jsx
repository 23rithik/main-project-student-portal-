import React from 'react'
    import { Button, Card, CardContent, Typography } from '@mui/material'
    import { Link } from 'react-router-dom'
    import Breadcrumbs from '../Breadcrumbs';
    import axios from 'axios'
const ProjectTopiclist = ({ batch, studentId}) => {
  
  // const [projectTopics, setProjectTopics] = useState([]);
  // useEffect(() => {
  //   axios.get(`/projectTopics/${batch}`)
  //     .then(res => {
  //       setProjectTopics(res.data);
  //     })
  //     .catch(err => console.error(err)); 
  // }, [batch]);

  // const selectProject = async (projectId) => {
  //   try {
  //     await axios.put(`/projectTopics/${projectId}/select`, { studentId });
  //     // Optionally, you can redirect the user to the project dashboard after selection.
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


 return (
    <>
    <Breadcrumbs/>
    <div className="mt-bc"></div>

      <div>
    <Typography  align="center" margin={5} gutterBottom variant="h4" component="div"> {/*{batch.toUpperCase()}*/} Full Stack Development(MERN)Projects</Typography>
      
      {/* {projectTopics.map(project => (*/}    {/* Need to give  key={project._id} inside div and map other topics also same way */}
        <div  style={{marginTop:"5%",textAlign:'center'}} > 
       <Card style={{backgroundColor:"#d3d3d3",height:150}} >
       <CardContent> 
        <Typography align='center' style={{fontSize:'20px'}}>{/*{project.title}*/}Food Delivery App</Typography>

       </CardContent>
       <Link to="/description"> <Button style={{backgroundColor:'#00a6bb',margin:'0 auto'}}  variant='contained'>Learn More</Button></Link>
       </Card>
       </div>
        {/* ))}*/}

        
       <div  style={{marginTop:"5%",textAlign:'center' }}>
       <Card style={{backgroundColor:"#d3d3d3",height:150}}>
       <CardContent>
        <Typography align='center' style={{fontSize:'20px'}}>Bookstore Ecommerce App</Typography>

       </CardContent>
       <Link to="/bookstore"><Button style={{backgroundColor:'#00a6bb',margin:'0 auto'}} variant='contained' >Learn More</Button></Link>
       </Card>
       </div>
        

          
       <div  style={{marginTop:"5%",textAlign:'center'}} >
       <Card  style={{backgroundColor:"#d3d3d3",height:150}}>
       <CardContent>
        <Typography align='center' style={{fontSize:'20px'}}>Event Management Web App</Typography>

       </CardContent>
       <Link to="/event"> <Button style={{backgroundColor:'#00a6bb',margin:'0 auto'}} variant='contained'>Learn More</Button></Link>
       </Card>
       </div>
      
    
    </div>
    </>
  )
}

export default ProjectTopiclist