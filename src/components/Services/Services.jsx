import classes from "./Services.module.css";
import { services } from "../../assets/data/data";
import shapeTwo from "../../assets/home/shape-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Services = () => {
  const container = "container";
  return (
    <section className={`${container} ${classes.services}`} id="services">
      <h2 className={classes.sectionTitle}>What I Do</h2>
      <p className={classes.sectionSubtitle}>
        My <span>Services</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {services.map(({ name, title, description }, index) => (
          <SwiperSlide className={classes.servicesCard} key={index}>
            <span className={classes.servicesSubtitle}>{name}</span>
            <h3 className={classes.servicesTitle}>{title}</h3>
            <p className={classes.servicesDescription}>{description}</p>
            <h4 className={classes.free}>free</h4>
            <img
              src={shapeTwo}
              alt="shape image"
              className={classes.servicesShape}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Services;
