import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Favourite.css";

import favImg1 from "../../assets/fav1.jpg";
import favImg2 from "../../assets/fav2.jpg";
import favImg3 from "../../assets/fav3.jpg";
import favImg4 from "../../assets/fav4.jpg";
import favImg5 from "../../assets/fav5.jpg";


const Favourite = () => {
  return (
    <div id="favourite-part">
      <div className="container  ">
        <div className="favourite-text">
            <h2>Favourite</h2>
            <p>This is our favourite toy car. Which was loved by car lover.</p>
        </div>
        <div className="favourite-item">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <div className="row">
              
                <SwiperSlide>
                  <img src={favImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg4} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg5} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg4} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={favImg5} />
                </SwiperSlide>


            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
