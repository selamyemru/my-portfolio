// import {Component} from 'react'
import './home.css'
import image from '../img/seli.jpg'
import resume from '../Resume/resume.pdf';
import React, { Component } from 'react'

export default class home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fullname:'',
         Email:'',
         comment:''
      }
    }
    handilename(event){
     this.setState({
        fullname:event.target.value
     })
    }
    
  render() {
    return (
      <div>
        
     <div className='hi'>
        <div className='Who'>
            <h2 className='mb-5 text-primary font'>Hello it's me</h2>
            <h3 className='text-warning'>Selam </h3>
            <p className='p1'>And I am knack of building application with <em ><b>front</b>  </em> and <em ><b>backend</b>  </em> oprations.</p>
        <a href='/contact' ><button className='button hire' >Contact me</button></a>
        <a href={resume} download='resume'><button className='button resume'>Get Resume</button></a>
        </div>
        
       <img src={image} alt='' className='img'/>
       
    </div> 
   
       
    </div>
    )
  }
}
