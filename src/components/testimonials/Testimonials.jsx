import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'


//import swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

const data =[
  {
    avatar: AVTR1,
    
  },
  {
    avatar: AVTR2,
    
  },
  {
    avatar: AVTR3,
    
  },
  {
    avatar: AVTR4,
    
  },

  {
    avatar: AVTR5,
    
  },
  {
    avatar: AVTR6,
    
 },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Completed Course or Training</h5>
      <h2>Certificates</h2>

      <Swiper className="container testimonials__container"
        //install Swiper modules
        modules={[Pagination]} spaceBetween={0}
        slidesPreview={1}
        pagination={{ clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              
                <img src={avatar} className='client__avatar'/>
              
              {/* <h5 classname='client__name'>{name}</h5> */}
              {/* <small className='client__review'>{review}</small> */}
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials