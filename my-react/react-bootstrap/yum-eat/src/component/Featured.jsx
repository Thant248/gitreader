import React, { useState } from 'react'
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
export default function Featured() {

    const sliders = [
    
       {
        url :  'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
       },
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1272672076/NetflixApp/ric_a4ewxo.jpg'
        }
   ] 

   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlider = () => {
    const isFirstSlider = currentIndex == 0;
    const newIndex = isFirstSlider ? sliders.length -1 : currentIndex -1 ;
    setCurrentIndex(newIndex);
   }

   const nextSlider = () => {
    const isLastSlider = currentIndex === sliders.length -1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1 ;
    setCurrentIndex(newIndex);
   }

   const moveToSlide = (sliderIndex) => {
        
            setCurrentIndex (sliderIndex);

   }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>

        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-200' style={{backgroundImage: `url(${sliders[currentIndex].url}`}}>
        </div>

        <div  className=' absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft  onClick={() => {prevSlider()}}/>
        
        </div>

        <div   className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full  p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={ ()=> {nextSlider()}} />
        </div>

        <div className='flex top-4 justify-center py-2 '>

            {
                sliders.map ( (sliderItem, slideIndex) => (

                    <div key={slideIndex} className='text-2xl cursor-pointer' onClick={() => moveToSlide(slideIndex)}>
                        <RxDotFilled/>
                         </div>
                ))
            }

        </div>
      
    </div>
  ) 
}
