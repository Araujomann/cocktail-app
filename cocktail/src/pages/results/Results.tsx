import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CategoryItem } from "../../components";
import { PuffLoader } from "react-spinners";

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export const Results: React.FC = () => {
    const [drinks, setDrinks] = useState<Cocktail[]>([]);
    const location = useLocation();
    const [loading, setLoading] = useState<boolean>(true);
    console.log(drinks);

    useEffect(() => {
        if (location.state) {
            setDrinks(location.state.drinks);
            setLoading(false);
            
        }
    }, [location.state.drinks]);



    return (
        <div className="w-screen h-screen flex flex-col overflow-x-hidden items-center">
         
            {loading && (
                <div className="absolute flex justify-center items-center h-screen w-screen bg-bgPage">
                    <PuffLoader color="#2e2e2e" loading={loading} size={130} />
                </div>
            )}

            <div className="bg-bgCategory flex flex-col flex-wrap items-center justify-center w-screen ">
                <div className="flex flex-wrap items-center justify-center gap-2 mt-12 w-full">
                    {drinks.map((drink, index) => (
                        <CategoryItem
                            index={index}
                            cocktail={drink}
                            isFavoritePage={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
