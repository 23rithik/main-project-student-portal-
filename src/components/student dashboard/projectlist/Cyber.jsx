import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs'
import axios from 'axios'
const Cyber = ({ batch, studentId }) => {

  const [projectTopics, setProjectTopics] = useState([]);
  useEffect(() => {
    axios.get(`/projectTopics/${batch}`)
      .then(res => {
        setProjectTopics(res.data);
      })
      .catch(err => console.error(err)); 
  }, [batch]);

  const selectProject = async (projectId) => {
    try {
      await axios.put(`/projectTopics/${projectId}/select`, { studentId });
      // Optionally, you can redirect the user to the project dashboard after selection.
    } catch (err) {
      console.error(err);
    }
  };

 return (
    < >
    <Breadcrumbs/>
    <div className="mt-bc"></div>
   
        <Typography  align="center"  marginBottom={5} gutterBottom variant="h4" component="div">Project Topics - {batch.toUpperCase()}</Typography>

        {projectTopics.map(project => (
       <div  key={project._id}   style={{marginTop:"5%",textAlign:'center'}} >
       <Card  style={{backgroundColor:"#d3d3d3",height:150}}>
       <CardContent>
        <Typography align='center' style={{fontSize:'20px'}}>{project.title}</Typography>

       </CardContent>
       <Link to="/facial"><Button  style={{backgroundColor:'#00a6bb',margin:'0 auto'}} variant='contained'>Learn More</Button></Link>
       </Card>
       </div>
        ))}
         {projectTopics.map(project => (
       <div key={project._id}  style={{marginTop:"5%",textAlign:'center' }}>
       <Card style={{backgroundColor:"#d3d3d3",height:150}}>
       <CardContent>
        <Typography align='center' style={{fontSize:'20px'}}>{project.title}</Typography>

       </CardContent>
       <Link to="/security"><Button  style={{backgroundColor:'#00a6bb',margin:'0 auto'}} variant='contained' >Learn More</Button></Link>
       </Card>
       </div>
        ))}
         {projectTopics.map(project => (
       <div key={project._id}  style={{marginTop:"5%",textAlign:'center'}} >
       <Card  style={{backgroundColor:"#d3d3d3",height:150}}>
       <CardContent>
        <Typography align='center' style={{fontSize:'20px'}}>{project.title}</Typography>

       </CardContent>
       <Link to="/userauth"> <Button  style={{backgroundColor:'#00a6bb',margin:'0 auto'}} variant='contained'>Learn More</Button></Link>
       </Card>
       </div>
        ))}

    </>
  )
}

export default Cyber