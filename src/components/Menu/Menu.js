import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu =({isMenuOpen})=> {
  return (
   <>
      {
        isMenuOpen && (
          <div id='menu'
              className='flex
                        flex-column
                        w-100' >
            <NavLink active to='/test'
                    className='menu-link'>
                    Test
            </NavLink>
            <NavLink to='/rover-photos'
                    className='menu-link'>
                    Rover Photos
            </NavLink>
          </div>
        )
      }
    </>
  )
}

export default Menu;
