
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Card from './Card';

const Slider = ({ weather }) => {
    console.log("ww", weather)
    return (
        <div style={{width:'100%'}}>
          
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
              
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
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
              
            >
                {weather.map((w) =>
                    <SwiperSlide  >
                        <Card  weather={w}/>
                    </SwiperSlide>

                )} 
            </Swiper>

         

        </div>
    )
}

export default Slider