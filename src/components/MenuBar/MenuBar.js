import './MenuBar.css';
import { NavLink } from 'react-router-dom';

const MenuBar =({ setIsMenuOpen, isMenuOpen })=> {
  return (
    <div id='menu-bar' class='flex justify-between align-center'>
      <h1 id='logo'>Spacestagram</h1>
      <div>
      <div id='menu-button'
           className='flex center'
           onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen? 'CLOSE MENU' : 'MENU'}
      </div>
      {
        isMenuOpen && (
          <div>
            <NavLink active to='/test' className='menu-link'>Test</NavLink>
            <NavLink to='/rover-photos' className='menu-link'>Rover Photos</NavLink>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default MenuBar;
