import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Education</h5>
      <h2>Education</h2>

      <div className="container services__container">
        {/*Start Of UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>SSC (10th)</h3>
          </div>

          <ul className='service__list'>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p><b>Board: </b>
                Maharashtra State Board of Secondary And Higher Secondary Education</p>
            </li>
            
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p className='service__list-icon'>&#10004;</p>
              <p><b> School Name: </b>
              National High School, Ulhasnagar
              </p>
            </li>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p>
                <b>Percentage: </b>
                77.20%
              </p>
            </li>
          </ul>
        </article>


        {/*Start Of Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>HSC (12th)</h3>
          </div>

          <ul className='service__list'>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p><b>Board: </b>
                Maharashtra State Board of Secondary And Higher Secondary Education</p>
            </li>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p><b>college Name: </b>
              National Junior College, Ulhasnagar
              </p>
            </li>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p>
                <b>Percentage: </b>
                70.77%
              </p>
            </li>
            
          </ul>
        </article>

        {/*Start Of Content Creation*/}
        <article className="service">
          <div className="service__head">
            <h3>Bachelor of Engineering</h3>
            <h3><b><center>(Information Technology)</center></b></h3>
          </div>

          <ul className='service__list'>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p><b>Board: </b>
              University Of Mumbai</p>
            </li>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p><b>College Name: </b>
              Datta Meghe College Of Engineering, Airoli (Navi Mumbai)</p>
            </li>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p>
                <b>Percentage: </b>
                72.27% (Till 7th Semester)
              </p>
            </li>
            <li>
            <p className='service__list-icon'>&#10004;</p>
              <p>
                <b>CGPA: </b>
                8.45
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services