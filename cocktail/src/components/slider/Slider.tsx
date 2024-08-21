import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { cocktailFetch } from "../../services/global";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const Slider: React.FC = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  const fetchCocktail = async () => {
    try {
      const response = await cocktailFetch.get("/filter.php?g=Cocktail_glass");
      const data = response.data.drinks;

      setDrinks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <div className="flex w-screen md:h-96
    ">
      <Swiper
        className="flex mb-10 mt-6 md:mt-20 py-10 "
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          960: {
            slidesPerView: 6,
          },
          1070: {
            slidesPerView: 7,
          },
          1300: {
            slidesPerView: 8,
          },
          1430: {
            slidesPerView: 9,
          },
        }}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={4000}
      >
        {drinks.map((drink, index) => (
          <SwiperSlide key={index} className="w-40 h-40">
            <img
              src={drink.strDrinkThumb}
              alt="slide"
              className=" object-fill rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
