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
import Image from "next/image";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    if (!landmarks || landmarks.length === 0) {
        return <p className="text-center mt-10">No landmarks available.</p>;
    }

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
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {landmarks.map((landmark) => (
                    <SwiperSlide key={landmark.id} className="group">
                        <div className="relative rounded-md overflow-hidden">
                            <Image
                                className="w-full h-[600px] md:h-[500px] lg:h-[600px] object-cover
             brightness-75 group-hover:brightness-50 
             transition-all duration-300"
                                src={landmark.image} // URL ของภาพ
                                alt={landmark.name || "Landmark"} // Text อธิบายภาพ
                                width={1920} // ระบุความกว้างที่ต้องการ
                                height={600} // ระบุความสูงที่ต้องการ
                                priority // ใช้สำหรับภาพที่สำคัญ เช่นใน Hero Section
                            />
                            <div className="absolute bottom-0 left-0 z-50">
                                <div
                                    className="col-span-4 mb-4 flex h-full flex-1
                                    justify-end px-5 md:mb-4 md:justify-end md:px-10"
                                >
                                    <OtherInfo landmark={landmark} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;