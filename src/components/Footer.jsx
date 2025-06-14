import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="w-full bg-gray-800 text-white py-10 px-6 flex flex-col items-center gap-6 md:gap-10">
      
      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row gap-4 text-center">
        <Link to='/about' className='hover:underline' onClick={(e) => handleLinkClick(e, '/about')}>About us</Link>
        <Link to='/contact' className='hover:underline' onClick={(e) => handleLinkClick(e, '/contact')}>Contact</Link>
        <Link to='/career' className='hover:underline' onClick={(e) => handleLinkClick(e, '/career')}>Careers</Link>
      </nav>

      {/* Social Icons */}
      <nav>
        <div className="flex gap-6 text-2xl">
          <Link to="https://www.linkedin.com/company/gvkss-software-private-limited/"><AiFillLinkedin /></Link>
          <Link to="https://www.instagram.com/gvkssdigital/"><AiFillInstagram /></Link>
          <Link to="https://x.com/GVKSSCEO"><FaXTwitter /></Link>
          <Link to="https://www.youtube.com/@GVKSSAIDIGITALSOLUTION"><FaYoutube /></Link>
          <a href="mailto:gvkssceo@gvkss.com" target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=917441143143&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </nav>

      {/* Footer Text */}
      <aside className='text-sm text-center'>
        <p>© {new Date().getFullYear()} GVKSS - All Rights Reserved.</p>
      </aside>
    </footer>
  )
}

export default Footer
