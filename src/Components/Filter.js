import React from 'react'

export default function Filter() {
  return (
    <div className='Filter'>
        <select style={{margin: '10px', padding: '12px', backgroundColor: 'black', border: 'none', color: '#ffff', borderRadius: '10px'}}>
            <option style={{margin: '10px'}} value="همه">همه</option>
            <option style={{margin: '10px'}} value="اکشن">اکشن</option>
            <option style={{margin: '10px'}} value="عاشقانه">عاشقانه</option>
            <option style={{margin: '10px'}} value="تخیلی">تخیلی</option>
        </select>
    </div>
  )
}
