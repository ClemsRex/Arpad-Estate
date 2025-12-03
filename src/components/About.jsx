import React from 'react'
import { assets } from '../assets/assets'
import { ABOUT_PARAGRAPH, ABOUT_TEXT, ABOUT_TEXT_2 } from '../constants'
import { motion } from 'framer-motion'

const About = () => {


  return (

    // About Section

    <motion.div
    initial={{opacity: 0, x:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
    
    className='flex flex-col items-center justify-center contaner mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

        {/* About section header and paragraph */}

        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Company</span></h1>


        <p className='text-gray-500 max-w-80 text-center mb-8 '> {ABOUT_PARAGRAPH} </p>

        {/* About Section image and Write up */}

        <div className='flex flex-col md:flex-row items-center md:items-center md:gap-20'>

            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />

            <div className=' flex flex-col items-center md:items-start mt-10 text-gray-600'>

                <div className=' grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 '>

                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>7+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>13+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>

                </div>

                {/* About section Text and button */}


                <p className='my-10 max-w-lg '> {ABOUT_TEXT}  </p>
                <p className='mb-4'> {ABOUT_TEXT_2} </p>

                <button className='bg-gray-400 px-8 hover:bg-gray-600 py-2 text-white rounded'> Learn more </button>
            </div>

        </div>
      
    </motion.div>
  )
}

export default About
