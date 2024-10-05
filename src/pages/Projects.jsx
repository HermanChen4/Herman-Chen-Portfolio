import Navbar from '../components/Navbar';
const projects = [
    {
      name: 'Kaleidoscope',
      role: 'Open source product - Observability developer tool for identifying bottlenecks in applications.',
      imageUrl:
        'https://res.cloudinary.com/do1uqbdzs/image/upload/v1727469848/Screenshot_2024-08-29_at_4.31.54_PM_t7rxhx.png',
    },
    {
      name: 'NYC Routes',
      role: 'Personal project - Mobile application that lets users save and view MTA bus and train routes.',
      imageUrl:
        'https://res.cloudinary.com/do1uqbdzs/image/upload/v1727469848/Screenshot_2024-09-25_at_6.31.36_PM_fv3m5j.png',
    },
    {
      name: 'Next.js',
      role: 'Most recent learning - Next.js is a React framework that helps with server-side rendering and static website generation.',
      imageUrl:
        'https://res.cloudinary.com/do1uqbdzs/image/upload/v1727469848/nextjs_pyfhrv.png',
    },
  ];

function Projects() {
  return (
    <div className='bg-[#046307] flex justify-center flex-col items-center min-h-screen w-full text-white'>
      <Navbar />
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center mb-10'></div>
      <div>
      <ul
            role='list'
            className='mx-auto grid max-w-4xl grid-cols-1 gap-x-24 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 pb-2'
          >
            {projects.map((project) => (
              <li key={project.name} className='text-center'>
                <img
                  className='aspect-[14/13] w-full rounded-2xl object-scale-down'
                  src={project.imageUrl}
                  alt={project.name}
                />
                <h3 className='mt-6 text-xl font-semibold leading-8 tracking-tight text-white'>
                  {project.name}
                </h3>
                <p className='text-teal-100 w-full'>{project.role}</p>
              </li>
            ))}
          </ul>
          </div>
          
        </div>
    </div>
  );
}

export default Projects;