import { Hero } from '../../components'
import './Home.css'

const Home =({potd})=> {

  return (
    <div id='home' className='fill'>
      <Hero potd={potd} />
    </div>
  )
}

export default Home;
