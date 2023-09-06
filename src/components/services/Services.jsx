import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'

const Services = () => {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services_container">
      <article className='service'>
        <div className="service_head">
          <h3>UI/UX Design </h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          

        </ul>
      </article>
      {/* end of ui */}
      <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          

        </ul>
      </article>
      {/* end of Web development */}
      <article className='service'>
        <div className="service_head">
          <h3>DevOps</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          <li>
            <BsCheckAll className='service_list-icon'/>
            <p>Points for development</p>
          </li>
          

        </ul>
      </article>
    </div>

   </section>
  )
}

export default Services