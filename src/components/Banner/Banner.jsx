import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import "./Banner.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="bg-[#E2E0DC] dark:bg-[#040506] pb-4">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="flex justify-center items-center"
        >
          {/* slide 1 */}
          <SwiperSlide>
            <div className="pl-8 lg:pl-20 pr-8 lg:pr-10 flex flex-col-reverse lg:flex-row justify-evenly items-center">
              <div className="text-center lg:text-left text-black dark:text-white">
                <p className="text-sm sm:text-2xl">Painting & Drawing</p>
                <h1 className="max-w-[50rem] text-2xl sm:text-4xl font-serif mt-2 sm:mt-4 mb-4 sm:mb-7">
                  Discover Your Creative Masterpiece: Unleash Artistic Brilliance with Our Exquisite Collection
                </h1>
                <a className="btn bg-[#B59460] dark:bg-transparent hover:bg-[#B59460] dark:hover:bg-white dark:hover:text-black hover:brightness-90 px-6 rounded-sm text-lg font-medium text-white mb-10 lg:mb-0">
                  Explore
                </a>
              </div>
              <div>
                <div className="max-w-[12.5rem] sm:max-w-[15.625rem] lg:max-w-[31.25rem]">
                  <img className="w-full" src={slide1} />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slide 2 */}
          <SwiperSlide>
            <div className="pl-8 lg:pl-20 pr-8 lg:pr-10 flex flex-col-reverse lg:flex-row justify-evenly items-center">
              <div className="text-center lg:text-left text-black dark:text-white">
                <p className="text-sm sm:text-2xl">Painting & Drawing</p>
                <h1 className="max-w-[50rem] text-2xl sm:text-4xl font-serif mt-2 sm:mt-4 mb-4 sm:mb-7">
                  Brushstrokes of Inspiration: Where Creativity Meets Imagination and Ingenuity
                </h1>
                <a className="btn bg-[#B59460] dark:bg-transparent hover:bg-[#B59460] dark:hover:bg-white dark:hover:text-black hover:brightness-90 px-6 rounded-sm text-lg font-medium text-white mb-10 lg:mb-0">
                  Explore
                </a>
              </div>
              <div>
                <div className="max-w-[12.5rem] sm:max-w-[15.625rem] lg:max-w-[31.25rem]">
                  <img className="w-full" src={slide2} />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slide 3 */}
          <SwiperSlide>
            <div className="pl-8 lg:pl-20 pr-8 lg:pr-10 flex flex-col-reverse lg:flex-row justify-evenly items-center">
              <div className="text-center lg:text-left text-black dark:text-white">
                <p className="text-sm sm:text-2xl">Painting & Drawing</p>
                <h1 className="max-w-[50rem] text-2xl sm:text-4xl font-serif mt-2 sm:mt-4 mb-4 sm:mb-7">
                  Canvas of Dreams: Step into a World Where Every Stroke Matters
                </h1>
                <a className="btn bg-[#B59460] dark:bg-transparent hover:bg-[#B59460] dark:hover:bg-white dark:hover:text-black hover:brightness-90 px-6 rounded-sm text-lg font-medium text-white mb-10 lg:mb-0">
                  Explore
                </a>
              </div>
              <div>
                <div className="max-w-[12.5rem] sm:max-w-[15.625rem] lg:max-w-[31.25rem]">
                  <img className="w-full" src={slide3} />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
