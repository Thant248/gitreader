import React from 'react'

export default function Delivery() {
  return (
    <div className='w-[1300px] bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt=""  className='w-[550px] mx-auto my-4'
            />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Limitless Convenience  on-Demand
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, vel corporis repudiandae ducimus possimus eveniet nisi,
                     accusamus, mollitia assumenda officiis debitis 
                     dolor voluptate fugiat facilis quod fuga illum pariatur. Inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora debitis cupiditate temporibus similique sint
                      vitae accusantium dolor quidem labore quaerat 
                      ut quod beatae iste impedit aliquam, ex, veniam deserunt?</p>

                      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )

}
