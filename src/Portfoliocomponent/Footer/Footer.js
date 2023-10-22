import './Footer.css'
import {FaFacebook,FaGithub,FaCopyright,FaLinkedin} from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (  
        <div className="footer">
        <div  className='icon'>
            {/* <FontAwesomeIcon icon={faTwitter} color='primary'/> */}
        <a href='http://github.com/selamyemru' className='twitter ' target='_blank'><FaGithub /></a>
       <a href='#'  className='facebook ' target='_blank'> <FaFacebook/></a> 
       {/* <a href='#' className='youtube ' target='_blank'><FaYoutube /></a>  */}
       <a href='http://www.linkedin.com/in/selam-yemru'  className='linkedin' target='_blank'><FaLinkedin/></a> 
        <i className='fa fa-Instagram-square'></i>
       
        </div>
        <span  ><FaCopyright/> Copy right reserved</span>
        <div>
            <a href='mailto:selamyemru6@gmail.com'>Email:selamyemru6@gmail.com</a>
            <p>Tel:0938401262</p>
        </div>
            </div>
    );
}
 
export default Footer;