"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css';

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LandmarkCardProps } from "@/utils/types";
import OtherInfo from "./OtherInfo";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    enabled: true,

                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {landmarks.map((landmark) => {
                    return (
                        <SwiperSlide key={landmark.image} className="group">
                            <div className="relative rounded-md overflow-hidden">
                                <img
                                    className="w-full h-[600px] object-cover
                                brightness-75 group-hover:brightness-50 
                                transition-all duration-300 "
                                    src={landmark.image}
                                />
                                <div className="absolute bottom-0 left-0 z-50">
                                    <div
                                        className="col-span-4 mb-4 flex h-full flex-1
                                justify-end px-5 md:mb-4 md:justify-end md:px-10
                                "
                                    >
                                        <OtherInfo landmark={landmark} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
export default Hero;
