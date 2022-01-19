import './Potd.css'

const Potd =({potd})=> {
    console.log('PICTURE OF THE DAY!!-> ', potd.hdurl)
    const styles = {
        background: {
            backgroundImage: `url(${potd.hdurl})`,
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        },
        headline: {
            fontSize: '3rem',
        },
        container: {
            height: 'max-content',
            backdropFilter: `opacity(10%) blur(10px)`,
            backgroundColor: `rgba(0,0,0,0.3)`,
            margin: `1rem 2rem`,
            borderRadius: `1em`
        },
        copy: {
            padding: '1em',
            fontSize: '16px'
        },
        date: {
            padding: `1em`
        }
    }

    return (

        <div id="potd"
             className='h-100
                        w-100
                        flex
                        justify-start
                        align-end'
            style={styles.background}>

            <div id='info-container'
                className='flex
                            flex-column
                            w-100
                            justify-evenly'
                style={styles.container}>

                <h1 className='space-font' style={styles.headline}>{potd.title}</h1>
                <div className='flex justify-around align-center'>
                    <date className='space-font' style={styles.date}>{potd.date}</date>
                    <h4 class='space-font'>{potd.copyright}</h4>
                </div>

                <p style={styles.copy}>{potd.explanation}</p>

            </div>

        </div>
    )
}

export default Potd;
