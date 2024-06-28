import React from 'react'
import Slider from '../Slider/Slider'
import Filter from '../Filter'
import Content from '../Content/Content'

export default function Home() {
  return (
    <div className='Home'>
      <Slider/>
      <Filter/>
      <Content/>
    </div>
  )
}
