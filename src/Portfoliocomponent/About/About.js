import React from 'react'
 import './about.css'
// import img from '../img/seli.jpg'
// import videos from '../video/v1.mp4'
// import { Button } from 'bootstrap
const skill=['Good communication skill'," Teamwork: Work effectively in teams.",
" Work ethics: Focused, motivated,dependable"];
// const frontend=["HTML","CSS",'React (Frontend developer)'] 
const programming=["python,js,C,C++,Java","MongoDB,SQL","HTML,CSS,React (Frontend developer)"];
const interest=["Public speech","DSTV","Video game" ,"Football"]

const About = () => {

    return ( 
    <div className='container'>
    <div className='about'>
       {/* <img src={img} alt='' className='img'/> */}
       <div className='hello'>
         <h1>About me</h1>
         <p> I am  4<sup>th</sup> year software engineering student at  Addis Ababa university in AAiT  Campus and also study Graphics Design in 
           Brihanena Selam Printing  college.I am passionate about creating <b>Web page</b> with <b>UI/UX user interface</b>.I have  projects carried out.</p>
       </div>
       <div className='technical'>
      <h1>Technical skill</h1>
      <li className='full'>Fullstack Developer</li>
      
    
      <li className='ui'>UI/UX Designer</li>
          <li className='front'>Frontend Developer</li>
          <li className='flutter'>Flutter Developer</li>
          <li className='back'>Backend Developer</li>
     
      </div>
          <div className='exp'>
            
            <h1>Softskill</h1>
            {skill.map(name=><li>{name}</li>)}
         
          
         </div>
         <div className='programming'>
        <h1>Programming</h1>

        <p className='list'> {programming.map(name=><li>{name}</li>)}</p>
        {/* <p className='list'>{frontend.map(name=><li>{name}</li>)}</p> */}
       

      </div>
      
      <div className='intersest '>
        <h1>Interest</h1>
       <p className='list'>{interest.map(name=><li>{name}</li>)}</p> 
        

      </div>
    </div>
    
     <section className='section'>
    <h2>Service</h2>
    <div className='service'>
      <div className='ser'>
        <h3>UI/UX design</h3>
        <p>website UI/UX design</p>
      </div>
      <div  className='ser'>
        <h3>Development</h3>
        <p>Software development</p>
        <p></p>
      </div>
      <div className='ser'>
        <h3 className='mt-0'>Video Edditing</h3>
        <p>Any video based on your interest</p>
        <p></p>
      </div>
      
    </div>
    </section>
    </div> 
     );
}
 
export default About;