import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Certificates</h5>
              <small> 5+ <br/> With Training</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
            
          </div>
          <p align='justify'>
                Hello, I'm Yogesh Ghate,<br/>
                I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns. I've never stopped engaging my passion to help others and solve problems.
                As a developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About