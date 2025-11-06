import React from "react";
import Heading from "../heading/heading";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex  justify-end pt-20 pb-10 gap-x-3">
          <button className="text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 cursor-pointer hover:text-white custom-prev">
            <IoIosArrowBack />
          </button>
          <button className="text-2xl rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 cursor-pointer hover:text-white custom-next">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
        }
        } 
        loop={true}
        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
                <SwiperSlide key={item.id}className="bg-zinc-100 rounded-xl p-8 flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-300 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img className=" h-full w-full " src={item.photo} alt="" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 text-xl">{Array.from({length:item.rating},(_,index)=>(
                        <FaStar key={index} />
                    ))}</span>
                    <div className="mt-5">
                      <p className="text-zinc-600">
                        {item.review}
                      </p>
                    </div>
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    review:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
      photo:Customer1,
      rating:3
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    review:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
      photo:Customer2,
      rating:4
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    review:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
      photo:Customer3,
      rating:4
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    review:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
      photo:Customer4,
      rating:4
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    review:
      "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
      photo:Customer5,
      rating:5
  },
];
