import Navbar from '../components/Navbar';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className='bg-[#046307] flex justify-center flex-col items-center min-h-screen w-full text-white'>
      <Navbar />
      <div className='flex flex-col items-center mt-10 md:mt-20'>
        {/* Logo Section */}
        <div className='w-40 h-40 md:w-56 md:h-56 flex items-center justify-center mb-10 md:mb-16 rounded-md'>
          <img
            src='https://res.cloudinary.com/do1uqbdzs/image/upload/v1727465095/HC_1_l1n7vk.png'
            alt='Logo'
            className='w-full h-full object-contain'
          />
        </div>

        {/* Contact Me Heading */}
        <h2 className='text-4xl md:text-5xl font-bold mb-10 md:mb-16'>Contact Me!</h2>

        {/* Contact Information */}
        <div className='flex flex-col md:flex-row md:space-x-16 lg:space-x-24 text-center'>
          {/* Email */}
          <div className='flex flex-col items-center mb-10 md:mb-0'>
            <FaEnvelope className='text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-8' />
            <p className='text-xl md:text-2xl lg:text-3xl'>Hermanchen77@gmail.com</p>
          </div>

          {/* Phone */}
          <div className='flex flex-col items-center mb-10 md:mb-0'>
            <FaPhone className='text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-8' />
            <p className='text-xl md:text-2xl lg:text-3xl'>917-932-5703</p>
          </div>

          {/* LinkedIn */}
          <div className='flex flex-col items-center'>
            <FaLinkedin className='text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-8' />
            <a
              href='https://www.linkedin.com/in/hermanchen4/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl md:text-2xl lg:text-3xl underline'
            >
              linkedin.com/in/hermanchen4/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
