import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { HashLink } from 'react-router-hash-link';


class Home extends Component {
  

  render() {

    return (
        <div>
            <a id="top"></a>
            <div className="a">
                
            </div>

            <div className="b">
                <div className="centertext">
                    <h1 className="info">Something about plants here. Something about plants here. something about plants here. something about plants.</h1>
                    <hr className="binfoh"/>
                    <a id="about"></a>
                </div>
            </div>

            <div className='saab'>
            <div className='sb1'>
            </div>
            <div className='sb2'>
            <h1 className='est'>About us</h1>
            <h5 className='servinfo'>Green House was established in 2021 by Camille Camp with one goal in mind: To provide the highest quality plants. From propogation, to nurturing, to delivery, every detail is handled with the highest care.  
            <a id="gallery"></a>
             </h5>
            </div>
          </div>
          
            <div className="scrollsection"><h1 className="gallery">Gallery</h1></div>
            <div className="scrolling-wrapper">
                <div className="cards slide1"></div>
                <div className="cards slide2"></div>
                <div className="cards slide3"></div>
                <div className="cards slide4"></div>
                <div className="cards slide5"></div>
                <div className="cards slide6"></div>
                <div className="cards slide7"></div>
            </div>
            <div className="bottomscroll"></div>
        

            <div className="c">
                    <h3 className="mods">Order</h3>
                    <HashLink to="/contact#top"><button className="designyours btn btn-light">CONTACT US</button></HashLink>
            </div>
           

            

        </div>
    );
  }
}

export default Home;