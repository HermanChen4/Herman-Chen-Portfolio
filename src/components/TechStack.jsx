import { motion } from 'framer-motion';

function TechStack() {
  return (
    <div className='flex justify-center items-center py-4'>
      <div className='bg-white w-full max-w-6xl rounded-lg p-4 shadow-lg'>
        <h2 className='text-center text-xl font-semibold mb-4'>
          Here is my tech stack!
        </h2>
        <div className='flex flex-wrap justify-evenly items-center'>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://reactjs.org/docs/getting-started.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                alt='React'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>React</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
                alt='JavaScript'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>JavaScript</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://www.typescriptlang.org/docs/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg'
                alt='TypeScript'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>TypeScript</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://nodejs.org/en/docs/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg'
                alt='Node.js'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>Node.js</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://docs.python.org/3/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
                alt='Python'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>Python</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://docs.docker.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://bornsql.ca/wp-content/uploads/2023/01/docker.png'
                alt='Docker'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>Docker</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://www.w3schools.com/sql/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'
                alt='SQL'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>SQL</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://nextjs.org/docs'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
                alt='Next.js'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>Next.js</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='flex flex-col items-center'
          >
            <a
              href='https://aws.amazon.com/documentation/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='techimg h-16 w-16 object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
                alt='AWS'
              />
            </a>
            <p className='mt-2 text-sm font-medium text-gray-700'>AWS</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
