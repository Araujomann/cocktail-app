import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  id: string;
  img: string;
  name: string;
  alcoholic: string;
  instructions: string;
  ingredients: string;
  onClose: () => void;
  isFavoritePage?: boolean;
}

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const DrinkModal: React.FC<Props> = ({
  id,
  img,
  name,
  instructions,
  ingredients,
  alcoholic,
  onClose,
}) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("lista de favoritos", favorites);
    const isFav = favorites.some((drink: Cocktail) => {
      console.log("dring:", drink.strDrink);
      return drink.strDrink === name;
    });

    console.log("is fav", isFav, name);
    return isFav;
  });

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleFavoriteClick = () => {
    let updatedFavorites;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    console.log("estes são os favoritos até o momento: ", favorites);

    if (isFavorite) {
      console.log("era favorito e deixou de ser!");
      updatedFavorites = favorites.filter(
        (drink: Cocktail) => drink.strDrink !== name,
      );
    } else {
      console.log("esse agora é um favorito!");
      updatedFavorites = [
        ...favorites,
        {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: img,
        },
      ];
      setIsFavorite(!isFavorite);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  console.log("rendering is favorite", isFavorite);
  return (
    <>
      <div
        onClick={onClose}
        className="fixed w-full h-full  bg-black/60 bg-rgba z-1000 top-0 left-0 flex items-center justify-center"
      >
        <div
          onClick={handleModalClick}
          className="relative flex flex-col text-center bg-white max-h-144 md:max-h-screen md:h-auto  md:w-5/12 md:min-w-96 md:p-16 px-4 py-10 md:pb-16 rounded-lg"
        >
          <span
            onClick={onClose}
            className="absolute text-slate-900 right-6 top-6 cursor-pointer"
          >
            <IoCloseOutline size={23} />
          </span>
          <img className="size-7/12 md:w-64 mx-auto rounded-md shadow-2xl" src={img} />
          <section className="mt-4">
            <div className="relative flex gap-3 place-content-center">
              <h2 className="text-principalTitleColor font-sans font-bold text-xl md:text-3xl flex wrap w-72 m-auto place-content-center">
                {name}
              </h2>
              <span
                onClick={handleFavoriteClick}
                className="hidden md:block md:absolute bottom-0 md:right-0 cursor-pointer"
              >
                {isFavorite ? (
                  <GoHeartFill size={34} color="red" />
                ) : (
                  <GoHeart size={34} color="black" />
                )}
              </span>
            </div>

            <h3 className="text-secondTextColor m-2 font-semibold text-sm md:text-base">
              {alcoholic}
            </h3>
            <p className="text-secondTextColor mb-4 max-h-32 md:max-h-none  overflow-auto text-sm md:text-base">
              {instructions}
            </p>
            <p className="text-slate-800 text-left text-sm md:text-base">
              <b>Ingredients:</b> {ingredients}
            </p>
          </section>

          <div className="md:hidden flex place-content-center mt-4">
            <span onClick={handleFavoriteClick}>
              {isFavorite ? (
                <GoHeartFill size={34} color="red" />
              ) : (
                <GoHeart size={34} color="black" />
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
