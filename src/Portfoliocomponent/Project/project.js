import React, { Component } from 'react'
import './project.css'
export default class Project extends Component {
  render() {
    return (
      <div  className='myproject'>
        <h6> See my project</h6>
        <div className='project'>
          <div className='project1 allproject'>
            <h3>MY first webpage </h3>
            <p>only using HTML</p>
            <a href='https://github.com/selamyemru/UGR-4870-13/tree/main/scr' target='_blank'><h3>View Source Code</h3></a><br/>
            <a href=' https://selamyemru.github.io/UGR-4870-13/' target='_blank'><button className='button '>visite site</button></a>
          </div>
          <div className='project2 allproject'>
            <a href='#'>
            <h3>E-commerce website</h3>
            <p>using</p>
            <a href='#' target='_blank'><button className='button '>see it</button></a>
            </a>
          </div>
          
          
          <div className='project3 allproject'>
          <h3>Fullstack Fitness tracker mobile app</h3>
            <p>using flutter,</p>
            <a href='#'><button className='button '>see it</button></a>
          </div>

          <div className='project4 allproject'>
          <h3>Fullstack E-commerce website</h3>
            <p>using
              Angular,
              Nodejs.
              expressjs,
              postgrasql.</p>
            <a href='#'><button className='button '>see it</button></a>
          </div>
         
          <div className='project3 allproject'>
          <h3>Mancal/Gebeta Game</h3>
            <p>using python</p>
            <a href='#'><button className='button '>visite site</button></a>
          </div>
          <div className='project3 allproject'>
          <h3>Compiler project</h3>
            <p>using</p>
            <a href='#'><button  className='button '>visite site</button></a>
          </div>
          <div className='project3 allproject'>
          <h3>Compiler project</h3>
            <p>using</p>
            <a href='#'><button  className='button '>visite site</button></a>
          </div>
          <div className='project3 allproject'>
          <h3>Compiler project</h3>
            <p>using</p>
            <a href='#'><button  className='button '>visite site</button></a>
          </div>
          <div className='project3 allproject'>
          <h3>Compiler project</h3>
            <p>using</p>
            <a href='#'><button  className='button '>visite site
            </button></a>
          </div>
        </div>
      </div>
    )
  }
}
