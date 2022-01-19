import { Potd } from '../../components'
import './Home.css'

const Home =({potd, favorites})=> {

  return (
    <div id='home' className='fill'>
      <Potd favorites={favorites} potd={potd} />
    </div>
  )
}

export default Home;
