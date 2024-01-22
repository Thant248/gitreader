import React from 'react'
import {mealData} from '../data/data'
import {FaArrowRight} from 'react-icons/fa6'
export default function Meal() {
  return (
    <>

            <div className='max-w-[1520px] m-auto px-4 py-12'>
                <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
                <div className='grid md:grid-cols-2  sm:grid-cols-1 lg:grid-cols-4 gap-6'>
                    {
                        mealData.map( (item) => (
                            <div  key={item.id} className='border-none hover:scale-105 duration-300'>
                                <img src={item.image} alt={item.name}  className='w-full h-[200px] rounded-lg object-cover'/>

                                    <div  className='flex justify-between py-2 px-4'>
                                        <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8'>{item.price}</p>
                                    </div>
                                    <div className='py-4 px2'>
                                        <p>View More </p>
                                        <FaArrowRight size={25}/> 
                                    </div>
                                
                                 </div>
                        ))
                    }
                </div>
            </div>
    </>
  )
}
