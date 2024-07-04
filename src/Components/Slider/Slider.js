import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <Carousel fade className='Slider' style={{padding: "30px 0 0 0"}}>
      <Carousel.Item interval={1000} >
        <img src='assets/sliderimg.avif' style={{height: '700px'}} className='w-100' />
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img src='assets/slide2.jpg' style={{height: '700px'}} className='w-100' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src='assets/slide3.jpg' style={{height: '700px'}} className='w-100' />
      </Carousel.Item>
    </Carousel>
  )
}
