import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './aboutCarousel.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function AboutCarousel() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
  return (
    <div className='md:w-[500px] md:h-[500px] w-[300px] h-[300px] overflow-hidden relative'>
        <Swiper
            pagination={{
            type: 'progressbar',
            }}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='w-full h-full'
        >
            <SwiperSlide><img
                src="https://picsum.photos/203"
                className="w-full h-full object-cover"
                /></SwiperSlide>
            <SwiperSlide><img
                src="https://picsum.photos/202"
                className="w-full h-full object-cover"
                /></SwiperSlide>
            <SwiperSlide><img
                src="https://picsum.photos/201"
                className="w-full h-full object-cover"
                /></SwiperSlide>
            <SwiperSlide><img
                src="https://picsum.photos/200"
                className="w-full h-full object-cover"
                /></SwiperSlide>
        </Swiper>
    </div>
  );
}