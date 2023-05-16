import React from 'react';
import HomeHeader from './homeHeader';
import HomeThreeColumns from './homeThreeColumns';

function Home() {
  return (
    <>
    <div><p>Test</p></div>
    <div className="container">
      <header className="header">
        <div className="header">
          <HomeHeader/>
        </div>
      </header>
      <section className="navBar">
        <div className='mainPage'>
          {/* main image content */}
          </div>
      </section>
      <section className="threeColumns">
        <div className="columns">
          <HomeThreeColumns />
        </div>
      </section>

      <section className="fourSteps">
        <div className="step">
          {/* step 1 content */}
        </div>
      </section>

      <section className="aboutUs">
        {/* about us content */}
      </section>

      <section className="whoWeHelp">
        {/* who we help content */}
      </section>

      <section className="contact">
        {/* contact content */}
      </section>

      <footer className="footer">
        {/* footer content */}
      </footer>
    </div>
    </>
  );
}

export default Home;
