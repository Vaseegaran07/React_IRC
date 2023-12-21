import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "About">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us.</h3>
                    </div>
                    <p className = "text">Tired of sifting through endless profiles and generic job boards? VLance isn't just another platform. We're a catalyst for dream collaborations, bringing together passionate freelancers with clients who understand the magic of authentic talent.</p>
                    <br></br>
                    <p className='text'>Born from the flames of freelance frustration, we understand the struggle. Our diverse team, a mix of seasoned freelancers and tech wizards, poured their collective heart into building a platform that ignites careers and sparks extraordinary projects</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About