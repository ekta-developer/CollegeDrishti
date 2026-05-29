// components/Footer.jsx

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF
} from 'react-icons/fa'

import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail
} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className='w-full bg-linear-to-r from-[#3a005f] via-[#4b007d] to-[#5c0099] text-white'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Logo + About */}
          <div>
            <h2 className='text-xl font-bold uppercase tracking-wide'>
              DOSOLCOLLEGEDRISHTI
            </h2>

            <p className='mt-4 text-sm leading-7 text-gray-200 max-w-xs'>
              Your trusted partner for education updates, college admissions,
              results, scholarship and career guidance.
            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-4 mt-6'>
              <a
                href='#'
                className='w-9 h-9 rounded-full bg-white text-[#5c0099] flex items-center justify-center hover:scale-110 transition duration-300'
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href='#'
                className='w-9 h-9 rounded-full bg-white text-[#5c0099] flex items-center justify-center hover:scale-110 transition duration-300'
              >
                <FaInstagram size={16} />
              </a>

              <a
                href='#'
                className='w-9 h-9 rounded-full bg-white text-[#5c0099] flex items-center justify-center hover:scale-110 transition duration-300'
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href='#'
                className='w-9 h-9 rounded-full bg-white text-[#5c0099] flex items-center justify-center hover:scale-110 transition duration-300'
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold uppercase mb-5'>
              Quick Links
            </h3>

            <ul className='space-y-3 text-sm text-gray-200'>
              {[
                'Home',
                'Courses',
                'Colleges',
                'Admission',
                'Result',
                'News',
                'Contact Us'
              ].map(item => (
                <li key={item}>
                  <a
                    href='#'
                    className='hover:text-white transition duration-300'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-lg font-semibold uppercase mb-5'>
              Useful Links
            </h3>

            <ul className='space-y-3 text-sm text-gray-200'>
              {[
                'Privacy Policy',
                'Terms & Conditions',
                'Disclaimer',
                'Sitemap'
              ].map(item => (
                <li key={item}>
                  <a
                    href='#'
                    className='hover:text-white transition duration-300'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold uppercase mb-5'>Contact Us</h3>

            <div className='space-y-4 text-sm text-gray-200'>
              <div className='flex items-start gap-3'>
                <HiOutlineLocationMarker size={20} className='mt-1 shrink-0' />
                <p>
                  123 Education Street, Patna,
                  <br />
                  Bihar - 800001
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <HiOutlinePhone size={20} />
                <p>0123-456-7890</p>
              </div>

              <div className='flex items-center gap-3 break-all'>
                <HiOutlineMail size={20} />
                <p>info@dosolcollegedrishti.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className='border-t border-white/20 mt-10 pt-5 text-center text-sm text-gray-300'>
          © 2025 DOSOLCOLLEGEDRISHTI. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
