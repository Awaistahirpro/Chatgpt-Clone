import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login Page/loginPage';
import SignupPage from './Components/Signup Page/Signup_Page';


function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
