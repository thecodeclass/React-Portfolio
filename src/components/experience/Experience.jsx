import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {ImHtmlFive} from "react-icons/im"
import {DiCss3} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"
import {BsBootstrapFill} from "react-icons/bs"
import {FaReact} from "react-icons/fa"
import {FaLinux} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {FaAws} from "react-icons/fa"
import {FaJenkins} from "react-icons/fa"
import {FaDocker} from "react-icons/fa"
import {SiKubernetes} from "react-icons/si"


const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <DiCss3 />
              <h4>CSS</h4>
              <small className="text-light">Inermediate</small>
            </article>
            <article className="experience_details">
              <TbBrandJavascript />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsBootstrapFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <FaReact />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <FaReact />
              <h4>React Native</h4>
              <small className="text-light">Beginer</small>
            </article>
          </div>
        </div>
        <div className="experience_devops">
        <h3>DevOps Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaLinux />
              <h4>Linux</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsGithub />
              <h4>GIT</h4>
              <small className="text-light">Inermediate</small>
            </article>
            <article className="experience_details">
              <FaAws />
              <h4>AWS</h4>
              <small className="text-light">Beginer</small>
            </article>
            <article className="experience_details">
              <FaJenkins />
              <h4>Jenkins</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <FaDocker />
              <h4>Docker</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <SiKubernetes />
              <h4>Kubernetes</h4>
              <small className="text-light">Experienced</small>
            </article>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
