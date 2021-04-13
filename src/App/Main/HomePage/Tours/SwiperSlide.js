import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "./mdTour.scss"
import SlideItem from './SlideItem';
import slides from './Slides';

SwiperCore.use([Navigation]);

export default () => {
  return (
    <Swiper
      /*spaceBetween={30}
      slidesPerView={3}*/
      /*loop={true}
      loopedSlides={3}*/
      speed={500}
      watchOverflow={true}
      navigation
      breakpoints= {{
        320: {
            width: 280,
            slidesPerView: 1,
            spaceBetween: 5,
            //centeredSlides:true
        },
        /*480: {
            width: 420,
            slidesPerView: 1,
            spaceBetween: 10
        },*/
        768: {
            width: 750,
            slidesPerView: 2,
            spaceBetween: 15
        },
        992: {
            width: 970,
            slidesPerView: 4,
            spaceBetween: 30
        },
        1200: {
            width: 1170,
            slidesPerView: 4,
            spaceBetween: 30
        },
      }}
    >
        {
            slides.map(({
                id,
                photo,
                description,
                priceflight,
                pricehotel,
                pricecar,
            }) => (
                <SwiperSlide
                    //id={id}
                    key={id}
                    //photo={photo}
                >
                    <SlideItem
                        //id={id}
                        key={id}
                        photo={photo}
                        description={description}
                        priceflight={priceflight}
                        pricehotel={pricehotel}
                        pricecar={pricecar}
                    />
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
};