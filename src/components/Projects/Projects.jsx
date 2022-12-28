import React from 'react';
import "./projects.css";

import Recipe from "../../assets/recipe.png";
import Blog from "../../assets/blog.jpg";
import IP from "../../assets/IP.webp";
import Social from "../../assets/social.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

const Projects = () => {
  const data = [
    {
      src: Recipe,
      url: "#!"
    },
    {
      src: Blog,
      url: "#!"
    },
    {
      src: IP,
      url: "#!"
    },
    {
      src: Social,
      url: "#!"
    }
  ]
  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map(project => (
            <SwiperSlide key={project.src}>
               <div className='project-box'>
                  <a href={project.url}>
                   <img src={project.src} alt="project" />
                    <div className="p-overlayer">
                    <strong>Reports</strong>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))
        }  
      </Swiper>


      <div className="github-btn">
        <a href='https://github.com/CarlosLF1'className='btn-link'>
          My Github <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects