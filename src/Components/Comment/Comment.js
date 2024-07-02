import React from 'react'
import { Button } from 'react-bootstrap'

export default function Comment() {
  return (
    <div className='Comment' style={{borderRadius: '25px', backgroundColor: 'grey'}}>
        <form action="#">
            <textarea style={{width: '100%'}} className='Main-Comment' placeholder='نظر خود را وارد کنید'></textarea>
            <input style={{width: '50%'}} type="text" placeholder='نام' />
            <input style={{width: '50%'}} type="text" placeholder='ایمیل' />
            <Button variant='success'>ثبت</Button>
        </form>
    </div>
  )
}
