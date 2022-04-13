import './about.css'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src="/images/about-bg.jpeg" alt="about" className='about-img'/>
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-sub"> 
                Voravadee is native of Thailand and has lived in the Boston since 2019. She has been working as a event planning, TV production and licen massage therapist.  
            </p>
            <p className="about-desc">
            I've just graduated from General Assembly’s Software Engineering Immersive bootcamp, in Boston, MA. This portfolio showcases a few of my projects. where 
            I worked indivudially and collaboratively to create apps, webpages and games.
            </p>
            <div className="about-grad">
                <img src="/images/general-assembly_logo.png" alt="" className='about-grad-img' />
                <div className="about-grad-texts">
                    <h4 className="about-grad-title">General Assembly</h4>
                    <p className="about-grad-desc">
                    Certificate of Completion Software Engineering Immersive.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About