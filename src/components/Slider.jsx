import React from "react";
import { Container, Row } from "react-bootstrap";
import nishant from '../assets/images/Nishant.jpg'
const Slider=()=>{

    return(
        <>
        <Container  fluid className="portfolio-slider bg-primary p-5">
         <div className="mx-auto ">
            <div className="slider-img mx-auto">
                <img src={nishant} alt="brijesh" title="hello brijesh" className="img-fluid" />
            </div>
            <div className="slider-info">
                <h3 className="text-center h1 mt-2  portfolio-name">Front-end Developer</h3>
                <hr className="border border-dark border-3 mx-auto w-25" />
                <p className="text-center mt-2 h4">HTML - CSS - Bootstrap - TailWind - JavaScript - React JS</p>
            </div>
         </div>

        </Container>
        </>
    )
}
export default Slider