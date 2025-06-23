import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import HowItWorksPage from './Pages/HowItWorksPage.jsx';
import FAQPage from './Pages/FAQPage.jsx';
import PricingPage from './Pages/PricingPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/work",
    element: <HowItWorksPage />
  },
  {
    path: "/faq",
    element: <FAQPage />
  },
  {
    path: "/pricing",
    element: <PricingPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
