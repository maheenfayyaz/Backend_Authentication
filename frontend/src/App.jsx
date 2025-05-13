import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ResetPassword from "./pages/ResetPassword"
import Dashboard from "./pages/Dashboard"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
  };

 


export default App
