import React from 'react'
import img_1 from '../../assets/img/img_1.png'
import img_2 from '../../assets/img/img_2.png'
import img_3 from '../../assets/img/img_3.png'
import { HomeIcon, Play } from 'lucide-react'
import { Building2 } from 'lucide-react'
import { Tractor } from 'lucide-react'

const AboutUs = () => {
  return (
    <div id="about-us" className="py-20 px-4 sm:px-6 lg:px-40 bg-white text-[#011627]">
      <div>
        <span className='text-sm '>WHO WE ARE</span>
        <h2 className='text-[#F5622A] text-3xl md:text-4xl font-bold'>ABOUT US</h2>
      </div>
      <div className='mt-10'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <div className=" ">
              <p className='pb-2 leading-7'>HOBBS is a forward-thinking solar energy brand based in Nigeria. We’re committed to helping individuals, homes, and small businesses enjoy uninterrupted power through smart solar inverter systems.</p>
              <p className='pb-2 leading-7'>We believe everyone deserves clean and consistent electricity — and that’s why we’re here: to deliver top-tier solar installations, honest consultations, and lasting support.</p>
              <p className='leading-7'>Whether you're switching to solar for savings, sustainability, or stability, we’ve got you covered.</p>
            </div>
            <div className='relative'>
              <img src={img_1} alt="About Hobbs Energy Image" className='' />
              <div className='absolute bottom-3 flex flex-col lg:flex-row justify-between px-5 gap-2 lg:gap-5 items-center w-full  text-white text-sm text-center'>
                  <div className='flex-1 bg-white/10 backdrop-blur-sm py-2 px-3 rounded-md border border-white/50 w-full'>
                    <p>Bank Road, Ado-Ekiti.</p>
                  </div>
                  <div className='flex-1 bg-white/10 backdrop-blur-sm py-2 px-3 rounded-md border border-white/50 flex justify-center items-center gap-2 cursor-pointer w-full'>
                  <Play className='w-4 h-4'/>
                    <p>Watch full video</p>
                  </div>
              </div>
            </div>


          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {/* Green card */}
            <div className="bg-[#228B22] text-white p-6 rounded-lg relative overflow-hidden">
              <h2 className="font-bold">
                Proud to serve the <span className="font-semibold">Nigerian</span> community
                with our top-notch <span className="font-semibold">solar energy solutions.</span>
              </h2>

              {/* Decorative corner shape */}
              <div className="absolute bottom-0 right-0">
                <div
                  className='bg-[#FD7D01] w-8 h-8 rounded-tl-full'

                >

                </div>
              </div>
            </div>


            {/* Wide image */}
            <div className='relative'>
              <img src={img_3} alt="About Hobbs Energy Image" className='' />
              <div className='absolute bottom-3 flex flex-col lg:flex-row justify-between px-5 gap-2 lg:gap-5 items-center w-full  text-white text-sm text-center'>
                  <div className='flex-1 bg-white/10 backdrop-blur-sm py-2 px-3 rounded-md border border-white/50 w-full'>
                    <p>Akintola Street, Ijaye, Ogun</p>
                  </div>
                  <div className='flex-1 bg-white/10 backdrop-blur-sm py-2 px-3 rounded-md border border-white/50 flex justify-center items-center gap-2 cursor-pointer w-full'>
                  <Play className='w-4 h-4'/>
                    <p>Watch full video</p>
                  </div>
              </div>
            </div>

            {/* Stats section */}
            <div className="border border-gray-300  rounded-lg p-3">
              <p className=' text-center pb-3 text-xl'>We have successfully powered over</p>
              <div className='flex flex-wrap justify-center gap-2'>
                <div className=" bg-[#3C3D5A] text-white p-2 text-center rounded-lg">
                  <div className='flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-sm border border-white/50'>
                    <p className='text-5xl'>87</p>
                    <div className='flex flex-col items-center'>
                      <HomeIcon className="text-white w-3 h-3" />
                      <span className='text-[12px]'>Homes</span>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#FD7D01] text-white p-2 text-center rounded-lg">
                  <div className='flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-sm border border-white/50'>
                    <p className='text-5xl'>32</p>
                    <div className='flex flex-col items-center'>
                      <Building2 className="text-white w-3 h-3" />
                      <span className='text-[12px]'>Companies</span>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#228B22] text-white p-2 text-center rounded-lg">
                  <div className='flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-sm border border-white/50'>
                    <p className='text-5xl'>40</p>
                    <div className='flex flex-col items-center'>
                      <Tractor className="text-white w-3 h-3" />
                      <span className='text-[12px]'>Farms</span>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AboutUs