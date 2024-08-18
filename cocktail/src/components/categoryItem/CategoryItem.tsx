import React, { useEffect, useState } from "react";
import { cocktailFetch } from "../../services/global";
import { DrinkModal } from "../drinkModal/DrinkModal";

interface Props {
  index: number;
  isFavoritePage: boolean;
  cocktail: Cocktail;
}

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
interface CocktailModal {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  [key: string]: string;
}

export const CategoryItem: React.FC<Props> = ({
  index,
  cocktail,
  isFavoritePage,
}) => {
  const [itemIdClicked, setItemIdClicked] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [item, setItem] = useState<CocktailModal>({} as CocktailModal);

  const handleClick = () => {
    setItemIdClicked(cocktail.idDrink);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const itemFetch = async () => {
    try {
      const response = await cocktailFetch.get("lookup.php?i=" + itemIdClicked);

      const data = response.data.drinks[0];
      console.log("clicked: ", data);
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setItemIdClicked("");
    }, 700);

    if (itemIdClicked) {
      itemFetch();
    }
  }, [itemIdClicked]);

  const ingredients = [];
  for (let i = 0; i <= 15; i++) {
    const ingredient = item["strIngredient" + i];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  const formatIngredients = (array: string[]) => {
    if (array.length === 0) return "";
    if (array.length === 1) return array[0] + ".";
    if (array.length === 2) return array[0] + " e " + array[1] + ".";
    return (
      array.slice(0, -1).join(", ") + " e " + array[array.length - 1] + "."
    );
  };

  console.log("item", item);
  return (
    <>
      <div
        className="flex flex-col w-48 h-64 hover:bg-pearl hover:cursor-pointer border-gray-900 rounded-md p-2 transition-all"
        onClick={handleClick}
        key={index}
      >
        <img
          className="rounded-md w-full"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <h3 className="text-principalTitleColor font-semibold font-sans">
          {cocktail.strDrink}
        </h3>
      </div>
      {showModal && item.idDrink && (
        <DrinkModal
          id={item.idDrink}
          img={item.strDrinkThumb}
          name={item.strDrink}
          onClose={handleCloseModal}
          alcoholic={item.strAlcoholic}
          instructions={item.strInstructions}
          ingredients={formatIngredients(ingredients)}
          isFavoritePage={isFavoritePage}
        />
      )}
    </>
  );
};
