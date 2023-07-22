import "./Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const Banner = () => {
    return (
        <div className="text-gray-100">
            <Swiper navigation={true} modules={[Navigation]} effect="EffectFade" className="mySwiper">
                <SwiperSlide>
                    <div className="bg-img1 h-[100vh]">
                        <div className="flex flex-col justify-center items-center h-[100vh] ">
                            <h1 className="text-4xl font-bold">Unlock Your Future: College Booking Made Easy</h1>
                            <p className="text-xl font-semibold">Empowering Students to Choose their Path to Success</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-img2 h-[100vh]">
                        <div className="flex flex-col justify-center items-center h-[100vh] ">
                            <h1 className="text-4xl font-bold">Find and Book Your Dream College</h1>
                            <p className="text-xl font-semibold">Your Journey to Higher Education Starts Here</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-img3 h-[100vh]">
                        <div className="flex flex-col justify-center items-center h-[100vh] ">
                            <h1 className="text-4xl font-bold">Find and Book Your Dream College</h1>
                            <p className="text-xl font-semibold">Explore, Compare, and Reserve Your Ideal College</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-img4 h-[100vh]">
                        <div className="flex flex-col justify-center items-center h-[100vh] ">
                            <h1 className="text-4xl font-bold">Unlock Your Future: College Booking Made Easy</h1>
                            <p className="text-xl font-semibold">Empowering Students to Choose their Path to Success</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-img5 h-[100vh]">
                        <div className="flex flex-col justify-center items-center h-[100vh] ">
                            <h1 className="text-4xl font-bold">Find and Book Your Dream College</h1>
                            <p className="text-xl font-semibold">Your Journey to Higher Education Starts Here</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;