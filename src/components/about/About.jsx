import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import {FaAward} from 'react-icons/fa' 
import {FaUserSecret} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me!!!</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt='About Image' />
          </div>

        </div>
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUserSecret className='about_icon'/>
            <h5>Clients</h5>
            <small>Worked for 3+ Clients </small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>3+ Projects Completed</small>
            </article>
          </div>
          <p>
        We are a dynamic team of professionals who are passionate about building exceptional web applications and ensuring seamless deployment through DevOps practices.
      </p>

      {/* <h2>Our Expertise</h2>
      <p>
        As React front-end developers, we specialize in crafting user-friendly, responsive web interfaces. With a deep understanding of JavaScript, HTML, and CSS, we turn your ideas into engaging digital experiences.
      </p>

      <p>
       As well as we are master in DevOps engineering of infrastructure as code, containerization, and continuous integration/continuous deployment (CI/CD). We leverage cutting-edge DevOps tools like Docker, Kubernetes, Jenkins, and Git to optimize your development pipeline.
      </p>

      <h2>What Sets Us Apart</h2>
      <p>
        With a strong emphasis on problem-solving, we've successfully tackled complex technical challenges and optimized development processes. Our collaborative approach ensures that your project benefits from the synergy of both front-end excellence and DevOps efficiency.
      </p>

      <h2>Our Achievements</h2>
      <p>
        Our track record includes projects with improved performance, reduced deployment times, and increased user engagement. We've actively contributed to open source projects and mentored junior developers to help them grow in their careers.
      </p>

      <h2>Join Us on Our Journey</h2>
      <p>
        We're committed to staying at the forefront of technology, continuously learning, and sharing our knowledge with the tech community. Our goal is to create outstanding digital solutions and foster innovation.
      </p> */}
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>


        </div>

      </div>
    </section>
  )
}

export default About