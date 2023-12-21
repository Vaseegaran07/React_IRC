import React from 'react';
import sections from '../../constants/data';
// import images from '../../constants/images';
import pic from '../Imgvlance.png';
import "./Qualities.css";

const Qualities = () => {
  return (
    <section className='qualities section-p bg-md-black' id = "qualities">
        <div className='container'>
            <div className='qualities-content grid'>
                <div className='content-left'>
                    <div className='section-t text-center'>
                        <h3>What sets us apart.</h3>
                        <p className='text'>the key to our success would be our ability to identify a clear niche, deliver an exceptional user experience, and offer valuable services that differentiate our platform from the competition.</p>
                    </div>

                    <div className='item-list grid text-white'>
                        {
                            sections.qualities.map(quality => {
                                return (
                                    <div className='item flex' key = {quality.id}>
                                        <div className='item-icon flex flex-center'>
                                            {quality.icon}
                                        </div>
                                        <div className='item-text'>
                                            <h3 className='item-title fs-25'>Ideas & Plans</h3>
                                            <p className='text'>{quality.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='content-right'>
                    <img src = {pic} alt = "" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualities
