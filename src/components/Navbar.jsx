import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-[#30C67C] text-md absolute top-0 flex text-center rounded-b-lg py-4 px-4'>
      <div className='flex flex-row py-2 px-2'>
        <div className='pr-3 font-semibold'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-black font-semibold'
            }
          >
            About Me
          </NavLink>
        </div>
        <div className='pr-3 pl-3'>|</div>
        <div className='pr-3 pl-3 font-semibold'>
          <NavLink
            to='/Projects'
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-black font-semibold'
            }
          >
            Projects
          </NavLink>
        </div>
        <div className='pr-3 pl-3'>|</div>
        <div className='pl-3 font-semibold'>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-black font-semibold'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
