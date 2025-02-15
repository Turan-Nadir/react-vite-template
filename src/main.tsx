import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/App';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import TwoAuth from './auth/TwoAuth';
import Dashboard from './dashboard/Dashboard';
import AboutPage from './components/AboutPage';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/twoauth" element={<TwoAuth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
