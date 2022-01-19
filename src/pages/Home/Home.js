import { Potd } from '../../components'
import './Home.css'

const Home =({potd})=> {

  return (
    <div id='home' className='fill'>
      <Potd potd={potd} />
    </div>
  )
}

export default Home;
