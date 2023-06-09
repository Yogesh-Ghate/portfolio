import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//Do Not Use Images In Production

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Banking-Management-System',
    github: 'https://github.com/Yogesh-Ghate/Banking-Management-System',
    demo: 'https://yogesh-ghate.github.io/Banking-Management-System/'
  },

  {
    id: 2,
    image: IMG2,
    title:'Quiz-Application',
    github: 'https://github.com/Yogesh-Ghate/Quiz-Application',
    demo: 'https://yogesh-ghate.github.io/Quiz-Application/'
  },

  {
    id: 3,
    image: IMG3,
    title:'NXT-GEN-Society-The Society Management system',
    github: 'https://github.com/Yogesh-Ghate/NXT-GEN-Society---The-Society-Management-System',
    demo: 'http://bitly.ws/FkWV'
  },

  {
    id: 4,
    image: IMG4,
    title:'News Site – NewsDay',
    github: 'https://github.com',
    demo: 'https://newssite-miniproject.netlify.app/'
  },

  {
    id: 5,
    image: IMG5,
    title:'Music BAY',
    github: 'https://github.com/musicBAY/musicBAY.git',
    demo: 'https://github.com/musicBAY/musicBAY/blob/main/GROUP%2017%20-%20PROJECT%20REPORT.pdf'
  },

  {
    id: 6,
    image: IMG6,
    title:'MINI - Intelligent Search Engine',
    github: 'https://github.com/myAssistant-Mini/Source.git',
    demo: 'https://github.com/myAssistant-Mini/Source.git'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='__blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio