import './MenuBar.css';
import { NavLink } from 'react-router-dom';

const MenuBar =({ setIsMenuOpen, isMenuOpen })=> {
  return (
    <div id='menu-bar'
        className='flex justify-between align-center w-100'
        style={{height: isMenuOpen? 'max-content': '5rem'}}>

      <div id='logo'
          className='w-50 '>
          Spacestagram
      </div>

      <div id='menu-button'
          className='flex center space-font'
          onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen? 'CLOSE MENU' : 'MENU'}
      </div>

    </div>
  )
}

export default MenuBar;
