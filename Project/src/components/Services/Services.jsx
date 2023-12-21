import React from 'react';
import "./Services.css";
import sections from "../../constants/data";
import SingleService from './SingleService';

const Services = () => {
  return (
    <section className='services section-p bg-md-black' id = "services">
        <div className='container'>
            <div className='services-content'>
                <svg width = "1em" height = "1em">
                    <linearGradient id="gold-to-white" x1="100" y1="0" x2="5" y2="100">
  <stop offset="0%" stop-color="#8a490c" />
  <stop offset="100%" stop-color="#F8D26B" />
</linearGradient>

                </svg>

                <div className='item-list grid text-white text-center'>
                    {
                        sections.services.map(service => {
                            return (
                                <SingleService service = {service} key = {service.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services