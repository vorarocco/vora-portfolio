import './about.css'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src="/images/aboutme.jpeg" alt="about" className='about-img'/>
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-sub"> 
                I'm a native of Thailand and who has lived in Boston since 2019. While working in tv production, I worked on a team that produce a highly-acclaimed biography of the IX king of Thailand for public brodcasting. I'm a creative problem solver and a hard-worker who thrives under stressful conditions and never misses a deadline. I'm a life long language learner: first Japanses, then English and now computer language.   
            </p>
            <p className="about-desc">
            I've just graduated from General Assembly’s Software Engineering Immersive bootcamp, in Boston, MA. This portfolio showcases a few of my projects. 
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