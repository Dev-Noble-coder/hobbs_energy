import { useState } from 'react';
import { Link } from 'react-router-dom';
import hobbs_logo from '../../assets/img/hobbs_logo.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About Us', 'Services', 'Testimonial'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="absolute top-3 left-10 right-10 lg:left-40 lg:right-40 bg-transparent backdrop-blur-sm text-white rounded-full  shadow-sm z-40 border border-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-5">
            {/* Logo */}
            <div className="">
              <img src={hobbs_logo} alt="Hobbs logo" className='h-7 w-auto object-contain' />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden  md:block">
              <div className=" flex gap-8">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-semibold cursor-pointer `}
                  >
                    {item}
                  </button>
                ))}


              </div>

            </div>

            <div className='hidden md:block'>
              <Link to="/get-started" >
                <button className="bg-gradient-to-r from-[#F58C2A] to-[#F5512A] text-white text-sm font-semibold px-6 py-2 rounded-full [box-shadow:inset_0_0px_3px_rgba(0,0,0,0.4)] ">
                  Contact Us
                </button>
              </Link>
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color='#FFF'
                >

                  <path d="M4 6h16M4 12h16M4 18h16" />

                </svg>
              </button>
            </div>
          </div>



        </div>

      </nav>

    </>
  );
};

export default Navbar;
