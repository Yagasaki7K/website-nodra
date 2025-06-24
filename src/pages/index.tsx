import HomeDetails from '@/components/HomeDetails'
import React from 'react'

const Home = () => {
    return (
        <HomeDetails>
            <div className="hero">
                <img src="/logotipo-darkblue.png" alt="Nodra Logo" />
                <p>We transform problems into systems.</p>
                <button>Talk with us!</button>
            </div>
        </HomeDetails>
    )
}

export default Home
