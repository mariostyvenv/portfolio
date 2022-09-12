import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { EPages } from './state/enums/EPages'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='container mx-auto pt-4 px-4 mb-10'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={EPages.HOME} element={<Home />} />
        <Route path={EPages.ABOUT} element={<About />} />
        <Route path={EPages.CONTACT} element={<Contact />} />
        <Route path={EPages.PORTFOLIO} element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </div>
)
