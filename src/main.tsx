import ReactDOM from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { EPages } from './enums/EPages'
const TRACKING_ID = "G-T1DTR42L0K";
import ReactGA from "react-ga4";
ReactGA.initialize(TRACKING_ID);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='container mx-auto pt-4 px-4 mb-10'>
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path={EPages.HOME} element={<Home />} />
        <Route path={EPages.ABOUT} element={<About />} />
        <Route path={EPages.CONTACT} element={<Contact />} />
        <Route path={EPages.PORTFOLIO} element={<Portfolio />} />
      </Routes>
    </HashRouter>
  </div>
)
