import './MenuBar.css';

const MenuBar =({ setIsMenuOpen, isMenuOpen })=> {
  return (
    <div id='menu-bar'
        className='flex justify-between align-center w-100'>

      <div id='logo'
          className="test-border">
          Spacestagram
      </div>

      <div id='menu-button'
          className='flex justify-center align-center space-font'
          onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen? 'X' : 'MENU'}
      </div>

    </div>
  )
}

export default MenuBar;
