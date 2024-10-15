import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projects = [
  {
    name: 'Kaleidoscope',
    role: 'Open Source Product - Observability developer tool for identifying bottlenecks in applications.',
    imageUrl:
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1727469848/Screenshot_2024-08-29_at_4.31.54_PM_t7rxhx.png',
    github: 'https://github.com/oslabs-beta/kaleidoscope',
    figma:
      'https://www.figma.com/design/PNnse4R0atGpKbwcQUbDZ6/OSP-Wireframe?node-id=0-1&node-type=canvas&t=0Q7OdRMetpUPic6C-0',
    additionalPhotos: [
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1728364126/1_hdxnLgtlgz4B9lpqtmQLxA_gv9qq3.webp',
    ],
  },
    {
    name: 'Future Link',
    role: 'Foundation Center Project - Mentor Mentee portal that matches mentees to mentors in their field of interests.',
    imageUrl:
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1728963285/Future_Link_vr0jto.png',
  },
  {
    name: 'NYC Routes',
    role: 'Personal project - Mobile application that lets users save and view MTA bus and train routes. For iOS and Andriod devices. (releasing soon)',
    imageUrl:
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1727469848/Screenshot_2024-09-25_at_6.31.36_PM_fv3m5j.png',
    github: 'https://github.com/EmunW/MTASchedule',
    figma:
      'https://www.figma.com/design/0DaVVo3e2dY7V2ZOPZjxMk/MTA-Schedule?t=baZe2lLdBNmkEsnu-0 ',
  },
  {
    name: 'Foundation Center Website',
    role: 'Non-Profit Website - Developed and maintaining the website for Foundation Center Inc.',
    imageUrl:
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1728360938/Foundation_Center_Home_k28fwu.png',
    figma:
      'https://www.figma.com/design/JUYzZ6V5WClDFYUce0pyeJ/Foundation-Web-Design?node-id=0-1&node-type=canvas&t=kdNIzL1jQfq4tVDp-0',
    website: 'https://www.foundationcenterny.org/',
  },
  {
    name: 'Tangerine HR',
    role: 'Open Source Project- Onboarding and offboarding software solution.',
    imageUrl:
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1728361491/Tangerine_Offboard_tpfwln.png',
    github: 'https://github.com/Kiwano-Group/tangerine',
    figma:
      'https://www.figma.com/design/lWV8yBCVmFQWgDpOdLBLjp/Tangerine?node-id=0-1&node-type=canvas&t=91xoCtvpZBOIBpbR-0',
    additionalPhotos: [
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1728361491/Tangerine_Home_ze0rmb.png',
      'https://res.cloudinary.com/do1uqbdzs/image/upload/v1728361491/Onboarding_a3k5g3.png',
    ],
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProjectCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openModal = (photos) => {
    setCurrentPhotos(photos);
    setCurrentPhotoIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPhotos([]);
    setCurrentPhotoIndex(0);
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % currentPhotos.length);
  };

  const handlePrev = () => {
    setCurrentPhotoIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentPhotos.length) % currentPhotos.length
    );
  };

  return (
    <div className='bg-[#046307] min-h-screen flex flex-col items-center text-white pt-16 relative'>
      <Navbar />
      {!showModal && (
        <div className='w-full max-w-7xl px-4 mt-32' style={{ width: '80%' }}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={8000}
            showDots={true}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'
            containerClass='carousel-container'
          >
            {projects.map((project, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img
                  className='w-full max-h-96 object-contain rounded-lg mb-4'
                  src={project.imageUrl}
                  alt={`${project.name} image`}
                />
                <h5 className='text-4xl font-semibold'>{project.name}</h5>
                <p className='text-teal-100 text-2xl text-center mb-4'>
                  {project.role}
                </p>
                <div className='flex space-x-4'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-teal-200 underline text-xl'
                    >
                      GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-teal-200 underline text-xl'
                    >
                      Website
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-teal-200 underline text-xl'
                    >
                      Figma
                    </a>
                  )}
                  {project.additionalPhotos &&
                    project.additionalPhotos.length > 0 && (
                      <button
                        onClick={() => openModal(project.additionalPhotos)}
                        className='text-teal-200 underline text-xl'
                      >
                        Additional Photos
                      </button>
                    )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 text-white text-xl'
          >
            ✕
          </button>
          <button
            onClick={handlePrev}
            className='absolute left-4 text-white text-3xl'
          >
            ◀
          </button>
          <img
            src={currentPhotos[currentPhotoIndex]}
            alt='Additional view'
            className='max-h-full max-w-full object-contain rounded-lg'
          />
          <button
            onClick={handleNext}
            className='absolute right-4 text-white text-3xl'
          >
            ▶
          </button>
        </div>
      )}
      <style jsx global>{`
        .custom-dot-list-style {
          position: fixed;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
        }
        .react-multi-carousel-dot--active button {
          background-color: white;
        }
      `}</style>
      <div className='text-teal-200 underline text-xl mt-20 flex flex-col items-center'>
        <a
          href='https://github.com/HermanChen4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://cdn-icons-png.flaticon.com/256/25/25231.png'
            alt='GitHub Logo'
            className='w-12 h-12'
          />
        </a>
        <a
          href='https://github.com/HermanChen4'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-2'
        >
          My Github
        </a>{' '}
      </div>
    </div>
  );
}

export default ProjectCarousel;
