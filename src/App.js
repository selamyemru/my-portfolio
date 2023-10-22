//class component in react
import img from './Portfoliocomponent/img/S-logo.png';
import {FaBars,FaTimes} from 'react-icons/fa'; 
import React, {useRef} from 'react'
// import css
import './app.css';
import Home from './Portfoliocomponent/Home/home';
import About from './Portfoliocomponent/About/About';
import Project from './Portfoliocomponent/Project/project';
import Contact from './Portfoliocomponent/Contact/Contact';
import Footer from './Portfoliocomponent/Footer/Footer';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'

 function App(){
  const navRef=useRef();
  const showNav=()=>{
    navRef.current.classList.toggle('responsive-nav');
  }
 return(
  <div>
     <Router>
      <header >
      <img src={img} alt ='' className='logo'/>
      <nav ref={navRef} className='responsive-nav'> 
      <button onClick={showNav} className='nav-btn nav-close-btn'><FaTimes/></button>
    
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        {/* <NavLink to='/resume'>Resume</NavLink> */}
        <NavLink to='./project'>Project</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
         </nav>
      <button onClick={showNav} className='nav-btn '><FaBars/></button>
    
        </header>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about'Component={About}></Route>
        {/* <Route path='/resume' Component={Resume}></Route> */}
        <Route path='/project' Component={Project}></Route>
        <Route path='contact' Component={Contact}></Route>
      </Routes>
     <Footer/>
     </Router> 
  </div>);
    
}
export default App;