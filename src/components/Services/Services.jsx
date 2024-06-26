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
    <div className={classes.servicesPage}>
      <section className={`${container} ${classes.services}`} id="services">
        <h2 className="sectionTitle">What I Do</h2>
        <p className="sectionSubtitle">
          My <span>Services</span>
        </p>

        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            460: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            986: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {services.map(({ name, title, description }, index) => (
            <SwiperSlide className={classes.servicesCard} key={index}>
              <span className="subtitle">{name}</span>
              <h3 className="title">{title}</h3>
              <p className={classes.servicesDescription}>{description}</p>
              <h4 className={classes.free}>
                {index === 0 ? "fee-based" : "free"}
              </h4>
              <img src={shapeTwo} alt="shape image" className="shape" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
export default Services;
