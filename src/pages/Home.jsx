import Navbar from '../components/Navbar';
import TechStack from '../components/TechStack';

function Home() {
  return (
    <div className='bg-[#046307] flex justify-center flex-col items-center min-h-screen w-full text-white'>
      <Navbar />
      <div className='text-center text-5xl font-bold text-teal-100 pb-4 mt-20'>
        Hey I'm Herman
        <br />
        Welcome to My Portfolio!
      </div>
      <div className='text-teal-100 text-3xl pl-40 pr-40 text-center pb-20 mt-2'>
        I'm a software engineer with a passion for building web applications
        using TypeScript and React. Currently, I'm dedicating my time to coding
        for a non-profit that empowers youth in NYC. Throughout my career, I've
        made contributions to open-source projects and developed a strong
        interest in observability. Outside of work, I'm an avid gamer, a rock
        climbing enthusiast, actively involved in community volunteering, and
        always seeking out new knowledge!{' '}
      </div>
      <div className='w-full text-center'>
        <div>
          <div className='text-center text-3xl font-bold text-teal-100 pb-2'>
            My Favorite Technologies
          </div>
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default Home;
