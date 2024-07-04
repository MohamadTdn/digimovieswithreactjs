import React from 'react'
import Slider from '../Slider/Slider'
import Content from '../Content/Content'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className='Home'>
      <NavMenu/>
      <Slider/>
      <div className='Filter'>
        <select style={{margin: '10px', padding: '12px', backgroundColor: 'black', border: 'none', color: '#ffff', borderRadius: '10px'}}>
            <option style={{padding: '10px'}} value="همه">همه</option>
            <option style={{padding: '10px'}} value="اکشن">اکشن</option>
            <option style={{padding: '10px'}} value="عاشقانه">عاشقانه</option>
            <option style={{padding: '10px'}} value="تخیلی">تخیلی</option>
        </select>
      </div>
      <Content/>
      <Footer/>
    </div>
  )
}
