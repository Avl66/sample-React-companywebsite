import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <section id="section1">
              <img id="hero-banner" src="https://www.bbva.com/wp-content/uploads/2017/11/innovacion-tecnologia-digital-BBVA-e1512122260593.jpg" alt="banner"/>
              <div className="banner-content">
                  <h1>We are now globally certified 
                  top employer and recognized by Forbes.</h1>
            </div>
            </section>
            <section id="section2">
                <h2>Explore Opportunities</h2>
                <p>What’s your next destination? Is it better technology? A better you? Or a better community of makers? Wherever you desire to go, we give you the tools, the techniques, and the teams to navigate the journey. 
                    So you’re inspired to build what’s next, ensure your career never 
                    stands still, and navigate further together. Move forward with us by exploring opportunities.</p>
                    <Link to="/careers"><button id="ecareer"><b>Explore Careers</b></button></Link>
            </section>
            <section></section>
        </div>
    )
}

export default Home
