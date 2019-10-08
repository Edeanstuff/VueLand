import React from 'react'
import PHeader from './PHeader';
import ReactDOM from 'react-dom';
import Background from '../images/4lEuPet8.png';

class AboutUs extends React.Component {
    render () {
      const colors = {
        backgroundImage: `url(${Background})`,
        width:"100%",
        height:"100vh",
        color:"black",
      };
      const box = {
        padding: "2vh",
        width: "65vw",
        opacity:.8,
        backgroundColor:"white",
        border: "1px solid gray",
      }
      return <div style={colors}>
          <PHeader />
          <div style={box}>
          We build privacy that works for everyone. It’s a responsibility that comes with creating products and services that are free and accessible for all. We look to these 
          principles to guide our products, our processes, and our people in keeping our users’ data private, safe, and secure.
          </div>
       
      </div>

    }
  }
  export default AboutUs