import React from 'react';
import './App.css';
import './buttons.css';
import './cards';
import vitepic from './vitepic.png';


export default function App() {
  return (
    <section>
      <div className="card">
        <h1 className="viteText">Vite</h1>
        <h1 className="titleText"> Next Generation <br/> FrontEnd Tooling</h1>
        <h1 className="getreadyText">Get ready for a development environment that <br/> can finally catch up with you</h1>
        <button className="getStartedButton" type="button">Get Started</button>
        <button className="whyViteButton" type="button">Why Vite?</button>
        <button className="whyViteButton" type="button">View on Github</button>

        <div>
          <section>
            <img src={vitepic} alt="My Image" width="300" height="300" />
          </section>
        </div>
      </div>
    </section>
  );
}

