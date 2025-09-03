import React from 'react'
import heroimg from '../../assets/img/heroimg.png'
import { Link } from 'react-router-dom'
import { Award, BadgeCheck } from 'lucide-react'

const HeroPage = () => {
    return (
        <section id="home" className="min-h-[90vh]  flex justify-center items-center  bg-no-repeat bg-cover bg-center pt-[10%] rounded-b-full md:rounded-b-[90px] relative" style={{
            backgroundImage: ` url(${heroimg})`,
        }}>
            <div className='hidden absolute bottom-0 left-40 right-40 mb-10 md:flex justify-between'>
                <div className='text-white text-sm '>
                    <h1 className='font-bold text-4xl pb-3'>Let the Sun Do the Work.</h1>
                    <p>Power your home or business with clean, reliable solar energy.</p>
                    <p className='pb-5'> <span className='font-semibold'>HOBBS ENERGY </span> makes switching to solar easy, affordable, and stress-free.</p>

                    <div>
                        <Link to="/get-started" >
                            <button className="bg-gradient-to-r from-[#F58C2A] to-[#F5512A] text-white text-sm font-semibold px-6 py-2 rounded-full [box-shadow:inset_0_0px_3px_rgba(0,0,0,0.4)] cursor-pointer ">
                                Request a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='relative bg-white/20 backdrop-blur-sm text-white flex justify-center items-start flex-col gap-2 px-10 text-sm rounded-b-3xl rounded-tl-3xl'>
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#F58C2A] to-[#F5512A] p-2 rounded-full shadow-lg">
                        <Award className="text-white w-6 h-6" />
                    </div>
                    <p className='flex items-center gap-2'><svg width="15" height="16" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2103_89)">
                            <path d="M30 27.1667C30 28.0507 29.6488 28.8986 29.0237 29.5237C28.3986 30.1488 27.5507 30.5 26.6667 30.5H3.33333C2.44928 30.5 1.60143 30.1488 0.976311 29.5237C0.35119 28.8986 0 28.0507 0 27.1667V3.83333C0 2.94928 0.35119 2.10143 0.976311 1.47631C1.60143 0.85119 2.44928 0.5 3.33333 0.5L26.6667 0.5C27.5507 0.5 28.3986 0.85119 29.0237 1.47631C29.6488 2.10143 30 2.94928 30 3.83333V27.1667Z" fill="url(#paint0_linear_2103_89)" />
                            <path d="M24.6622 5.83514C24.1986 5.5348 23.6348 5.43069 23.0945 5.54569C22.5542 5.66068 22.0817 5.98537 21.7806 6.44847L12.7089 20.431L8.51808 16.556C8.318 16.3659 8.08216 16.2175 7.82425 16.1194C7.56635 16.0213 7.29152 15.9753 7.01572 15.9843C6.73992 15.9933 6.46864 16.0569 6.21765 16.1716C5.96665 16.2862 5.74094 16.4496 5.55361 16.6522C5.36628 16.8549 5.22107 17.0927 5.12641 17.3519C5.03175 17.6111 4.98953 17.8865 5.0022 18.1622C5.01486 18.4378 5.08216 18.7082 5.20019 18.9576C5.31822 19.2071 5.48462 19.4306 5.68974 19.6151L11.6972 25.1701C12.0972 25.541 12.6056 25.7243 13.1106 25.7243C13.6714 25.7243 14.3889 25.4893 14.8597 24.7751C15.1364 24.3535 25.2764 8.71681 25.2764 8.71681C25.4253 8.48727 25.5275 8.23065 25.5772 7.96161C25.627 7.69256 25.6232 7.41636 25.5662 7.14877C25.5091 6.88118 25.4 6.62744 25.2449 6.40205C25.0898 6.17666 24.8918 5.98402 24.6622 5.83514Z" fill="white" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2103_89" x1="15" y1="0.5" x2="15" y2="30.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F5892A" />
                                <stop offset="1" stop-color="#F5602A" />
                            </linearGradient>
                            <clipPath id="clip0_2103_89">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                        Quality Solar Installations.
                    </p>
                    <p className='flex items-center gap-2'><svg width="15" height="16" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2103_89)">
                            <path d="M30 27.1667C30 28.0507 29.6488 28.8986 29.0237 29.5237C28.3986 30.1488 27.5507 30.5 26.6667 30.5H3.33333C2.44928 30.5 1.60143 30.1488 0.976311 29.5237C0.35119 28.8986 0 28.0507 0 27.1667V3.83333C0 2.94928 0.35119 2.10143 0.976311 1.47631C1.60143 0.85119 2.44928 0.5 3.33333 0.5L26.6667 0.5C27.5507 0.5 28.3986 0.85119 29.0237 1.47631C29.6488 2.10143 30 2.94928 30 3.83333V27.1667Z" fill="url(#paint0_linear_2103_89)" />
                            <path d="M24.6622 5.83514C24.1986 5.5348 23.6348 5.43069 23.0945 5.54569C22.5542 5.66068 22.0817 5.98537 21.7806 6.44847L12.7089 20.431L8.51808 16.556C8.318 16.3659 8.08216 16.2175 7.82425 16.1194C7.56635 16.0213 7.29152 15.9753 7.01572 15.9843C6.73992 15.9933 6.46864 16.0569 6.21765 16.1716C5.96665 16.2862 5.74094 16.4496 5.55361 16.6522C5.36628 16.8549 5.22107 17.0927 5.12641 17.3519C5.03175 17.6111 4.98953 17.8865 5.0022 18.1622C5.01486 18.4378 5.08216 18.7082 5.20019 18.9576C5.31822 19.2071 5.48462 19.4306 5.68974 19.6151L11.6972 25.1701C12.0972 25.541 12.6056 25.7243 13.1106 25.7243C13.6714 25.7243 14.3889 25.4893 14.8597 24.7751C15.1364 24.3535 25.2764 8.71681 25.2764 8.71681C25.4253 8.48727 25.5275 8.23065 25.5772 7.96161C25.627 7.69256 25.6232 7.41636 25.5662 7.14877C25.5091 6.88118 25.4 6.62744 25.2449 6.40205C25.0898 6.17666 24.8918 5.98402 24.6622 5.83514Z" fill="white" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2103_89" x1="15" y1="0.5" x2="15" y2="30.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F5892A" />
                                <stop offset="1" stop-color="#F5602A" />
                            </linearGradient>
                            <clipPath id="clip0_2103_89">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                        Expert Maintenance.
                    </p>
                    <p className='flex items-center gap-2'><svg width="15" height="16" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2103_89)">
                            <path d="M30 27.1667C30 28.0507 29.6488 28.8986 29.0237 29.5237C28.3986 30.1488 27.5507 30.5 26.6667 30.5H3.33333C2.44928 30.5 1.60143 30.1488 0.976311 29.5237C0.35119 28.8986 0 28.0507 0 27.1667V3.83333C0 2.94928 0.35119 2.10143 0.976311 1.47631C1.60143 0.85119 2.44928 0.5 3.33333 0.5L26.6667 0.5C27.5507 0.5 28.3986 0.85119 29.0237 1.47631C29.6488 2.10143 30 2.94928 30 3.83333V27.1667Z" fill="url(#paint0_linear_2103_89)" />
                            <path d="M24.6622 5.83514C24.1986 5.5348 23.6348 5.43069 23.0945 5.54569C22.5542 5.66068 22.0817 5.98537 21.7806 6.44847L12.7089 20.431L8.51808 16.556C8.318 16.3659 8.08216 16.2175 7.82425 16.1194C7.56635 16.0213 7.29152 15.9753 7.01572 15.9843C6.73992 15.9933 6.46864 16.0569 6.21765 16.1716C5.96665 16.2862 5.74094 16.4496 5.55361 16.6522C5.36628 16.8549 5.22107 17.0927 5.12641 17.3519C5.03175 17.6111 4.98953 17.8865 5.0022 18.1622C5.01486 18.4378 5.08216 18.7082 5.20019 18.9576C5.31822 19.2071 5.48462 19.4306 5.68974 19.6151L11.6972 25.1701C12.0972 25.541 12.6056 25.7243 13.1106 25.7243C13.6714 25.7243 14.3889 25.4893 14.8597 24.7751C15.1364 24.3535 25.2764 8.71681 25.2764 8.71681C25.4253 8.48727 25.5275 8.23065 25.5772 7.96161C25.627 7.69256 25.6232 7.41636 25.5662 7.14877C25.5091 6.88118 25.4 6.62744 25.2449 6.40205C25.0898 6.17666 24.8918 5.98402 24.6622 5.83514Z" fill="white" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_2103_89" x1="15" y1="0.5" x2="15" y2="30.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F5892A" />
                                <stop offset="1" stop-color="#F5602A" />
                            </linearGradient>
                            <clipPath id="clip0_2103_89">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                        Custom Energy Solutions.
                    </p>
                </div>

            </div>




            <div className='flex flex-col gap-10 justify-center items-center md:hidden px-10'>
                <div className='text-white text-sm '>
                    <h1 className='font-bold text-3xl pb-3'>Let the Sun Do the Work.</h1>
                    <p>Power your home or business with clean, reliable solar energy.</p>
                    <p className='pb-5'> <span className='font-semibold'>HOBBS ENERGY </span> makes switching to solar easy, affordable, and stress-free.</p>

                    <div>
                        <Link to="/get-started" >
                            <button className="bg-gradient-to-r from-[#F58C2A] to-[#F5512A] text-white text-sm font-semibold px-6 py-3 rounded-full [box-shadow:inset_0_0px_3px_rgba(0,0,0,0.4)] cursor-pointer w-full ">
                                Request a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='relative bg-white/20 backdrop-blur-sm text-white flex justify-center flex-col gap-3 py-5 px-10 text-sm rounded-b-3xl rounded-tl-3xl w-full'>
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#F58C2A] to-[#F5512A] p-2 rounded-full shadow-lg">
                        <Award className="text-white w-6 h-6" />
                    </div>
                    <p className='flex items-center gap-2'>
                       <BadgeCheck className='text-[#F58C2A]' />
                        Quality Solar Installations.
                    </p>
                    <p className='flex items-center gap-2'>
                    <BadgeCheck className='text-[#F58C2A]' />
                        Expert Maintenance.
                    </p>
                    <p className='flex items-center gap-2'>
                    <BadgeCheck className='text-[#F58C2A]' />
                        Custom Energy Solutions.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default HeroPage