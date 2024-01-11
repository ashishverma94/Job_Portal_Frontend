import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import React from 'react'
import LogIn from './pages/LogIn'
import Layout from './pages/global/Layout'
import NotFound from './pages/NotFound'
import { theme } from './theme'
import { ToastContainer } from 'react-toastify';
import { ProSidebarProvider } from 'react-pro-sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleJob from './pages/SingleJob' ;

import UserRoute from './components/UserRoute'
import AdminRoute from './components/AdminRoute' ;

import UserDashboard from './pages/user/UserDashboard'
import UserJobsHistory from './pages/user/UserJobsHistory'
import UserInfoDashboard from './pages/user/UserInfoDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';

// HIGHER ORDER COMPONENT
const UserDashboardHOC      = Layout(UserDashboard);
const UserJobsHistoryHOC    = Layout(UserJobsHistory);
const UserInfoDashboardHOC  = Layout(UserInfoDashboard);
const AdminDashboardHOC     = Layout(AdminDashboard);
const DashUsersHOC          = Layout(DashUsers);
const DashJobsHOC           = Layout(DashJobs);



const App = () => {
  return (
    <>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/job/:id' element={<SingleJob />} />
              <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />

              <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
              <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
              <Route path='/user/info' element={<UserRoute><UserInfoDashboardHOC /></UserRoute>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}

export default App
