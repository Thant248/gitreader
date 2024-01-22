import React from 'react'
import { CiMoneyBill } from 'react-icons/ci'

export default function ClickEventHandler() {

    const myFun = () => {
        alert('You Click Button');
    }
  return (
    <div>

            <button className='btn' onClick={myFun}>Click</button>
    </div>
  )
}
