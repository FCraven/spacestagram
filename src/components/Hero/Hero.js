import './Hero.css'

const Hero =({potd})=> {
    console.log('PICTURE OF THE DAY!!-> ', potd.hdurl)
    const styles = {
        backgroundImage: `url(${potd.hdurl})`,
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div id="hero" className='h-75 w-100 flex justify-center align-center' style={styles}>
            <div id='info-container' className='flex flex-column h-50 w-100'>
             
            </div>
        </div>
    )
}

export default Hero;
