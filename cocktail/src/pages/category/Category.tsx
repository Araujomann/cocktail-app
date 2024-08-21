import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cocktailFetch } from "../../services/global";
import { CategoryItem } from "../../components";
import { PuffLoader } from "react-spinners";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const Category: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [cocktailList, setCocktailList] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (location.state) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state.category]);

  const listFetch = async () => {
    try {
      const response = await cocktailFetch.get(
        `/filter.php?c=${selectedCategory}`,
      );
      const data = response.data.drinks;
      console.log(selectedCategory);
      console.log(data);
      setCocktailList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      listFetch();
    }
  }, [selectedCategory]);

  return (
    <div className=" flex flex-col w-screen h-screen overflow-x-hidden items-center bg-bgCategory">
      {loading && (
        <div className="absolute flex justify-center items-center h-screen w-screen bg-bgPage">
          <PuffLoader color="#2e2e2e" loading={loading} size={150} />
        </div>
      )}

      <div
        className="flex flex-col w-screen place-content-center h-60 md:h-96 px-5 md:pl-16 md:ml-4 gap-4
            leading-1"
      >
        <h1 className="text-principalTitleColor font-sans">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h1>
        <h3 className="font-sans text-secondTextColor">
          Looking to learn new drinks for receptions and celebratory gatherings?
          Check out the largest free drink recipe book below.
        </h3>
      </div>

      <div className=" flex flex-wrap items-center justify-center gap-2 w-full h-0">
        {cocktailList.map((cocktail, index) => (
          <CategoryItem
            key={cocktail.idDrink}
            index={index}
            cocktail={cocktail}
            isFavoritePage={false}
          />
        ))}
      </div>
    </div>
  );
};
