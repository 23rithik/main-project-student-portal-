import React from 'react'
import Header from '../components/common/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Footer from '../components/common/footer/Footer'
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import DiscussionForum from '../components/project dashboard/DiscussionForum';
import Reference from '../components/project dashboard/Reference';
import Wsubmit from '../components/project dashboard/Wsubmit';
import Wsubmitlink1 from '../components/project dashboard/Wsubmitlink1';
import Wsubmitlink2 from '../components/project dashboard/Wsubmitlink2';
import Wsubmitlink3 from '../components/project dashboard/Wsubmitlink3';
import Wsubmitlink4 from '../components/project dashboard/Wsubmitlink4';
import Wsubmitlink5 from '../components/project dashboard/Wsubmitlink5';
import Wsubmitlink6 from '../components/project dashboard/Wsubmitlink6';
import Fsubmit from '../components/project dashboard/Fsubmit';
import Wsubmitform1 from '../components/project dashboard/Wsubmitform1';
import Vivavoce from '../components/project dashboard/Vivavoce';

const AppRouter = () => {
  return (
    <Router>
    <Header/>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/discussion" element={<DiscussionForum />} />
      <Route path={'/reference'} element={<Reference /> }></Route>
      <Route path={'/wsubmit'} element={<Wsubmit /> }></Route>
      <Route path={'/wsubmitlink1'} element={<Wsubmitlink1 /> }></Route>
      <Route path={'/wsubmitlink2'} element={<Wsubmitlink2 /> }></Route>
      <Route path={'/wsubmitlink3'} element={<Wsubmitlink3 /> }></Route>
      <Route path={'/wsubmitlink4'} element={<Wsubmitlink4 /> }></Route>
      <Route path={'/wsubmitlink5'} element={<Wsubmitlink5 /> }></Route>
      <Route path={'/wsubmitlink6'} element={<Wsubmitlink6 />}></Route>
      <Route path={'/fsubmit'} element={<Fsubmit /> }></Route>
      <Route path={'/wsubmitform1'} element={<Wsubmitform1 /> }></Route>
      <Route path={'/vivavoce'} element={<Vivavoce /> }></Route>
  </Routes>
  <Footer />
</Router>
  )
}

export default AppRouter