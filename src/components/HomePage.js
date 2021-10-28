import React from 'react'
import taxiimg from './assets/taxiimg.png'
import Footer from './Footer'
export default function HomePage() {


    return (
        <>
            <div style={{
                backgroundImage: `url(${taxiimg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '92.5vh',
                // opacity: '0.7',
                // backgroundColor: 'black'     
            }}>
            </div>
            <Footer />
        </>
    )
}
