import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu =({isMenuOpen})=> {
  return (
    <div>
      {
        isMenuOpen && (
          <div id='menu'
              className='flex
                        flex-column
                        justify-center
                        align-center' >
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
    </div>
  )
}

export default Menu;
