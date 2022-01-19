import { ReactComponent as OutlinedHeartSvg } from '../../assets/heart.svg'
import { ReactComponent as FilledHeartSvg } from '../../assets/heart-filled.svg'
import { useState } from 'react'

const LikeButton =({ addToFavorites, removeFromFavorites, isFavorite })=> {

  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    outlinedHeartSvg: {
      height: '2rem',
      width: '2rem',
      padding: '0',
      fill: isHovered ? 'red' : 'white',
      stroke: 'gold'
    },
    filledHeartSvg: {
      height: '2rem',
      width: '2rem',
      fill: `pink`
    },
    container: {

    }
  }

  const toggleHover =()=> {
    setIsHovered(!isHovered)
    return;
  }

  return (
    <div style={styles.container}>
      {isFavorite ?
        <FilledHeartSvg
                style={styles.filledHeartSvg}
            /> :
        <OutlinedHeartSvg
                style={styles.outlinedHeartSvg}
                alt='Like Button'
                onClick={()=>console.log('clicked the loooioike button')}
                onMouseEnter={()=> toggleHover()}
                onMouseLeave={()=> toggleHover()}
      />
        }

    </div>
  )
}

export default LikeButton;
