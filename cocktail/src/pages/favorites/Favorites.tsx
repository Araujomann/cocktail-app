import React, { useEffect } from "react";
import { useState } from "react";
import { CategoryItem } from "../../components";
import emptyCocktailGlass from "../../assets/emptyCocktailGlass.png";
import { PuffLoader } from "react-spinners";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    setFavorites(storedFavorites);
    setLoading(false);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="w-screen h-screen overflow-x-hidden flex flex-wrap items-start bg-bgCategory">
        {loading && (
          <div className="absolute flex justify-center items-center h-screen w-screen bg-bgPage">
            <PuffLoader color="#2e2e2e" loading={loading} size={150} />
          </div>
        )}

        <div className="flex flex-col w-screen items-center justify-center mb-16">
          <img
            src={emptyCocktailGlass}
            alt="empty-cocktail-glass"
            className="w-6/12 md:w-96 h-3/6 mt-40 lg:mt-10"
          />
          <h2 className="text-secondTextColor font-sans text-xl px-4 text-center">
            Oops! Looks like your list of favorite drinks is dry. Let's fill it
            up, shall we?
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen h-screen overflow-x-hidden bg-bgCategory">
      <div
        className="flex flex-col w-screen place-content-center h-60 md:h-96 px-5 md:pl-16 md:ml-4 gap-4
            leading-1"
      >
        <h1 className="text-principalTitleColor font-sans">Favorites</h1>
        <h3 className="font-sans text-secondTextColor">
          Looking to learn new drinks for receptions and celebratory gatherings?
          Ceck out the largest free drink recipe book below.
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center w-screen min-h-28 gap-2">
        {favorites.map((drink, index) => (
          <CategoryItem cocktail={drink} index={index} isFavoritePage={true} />
        ))}
      </div>
    </div>
  );
};
