import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { cocktailFetch } from "../../services/global";
import { useNavigate } from "react-router-dom";

interface Props {
    onClose: () => void;
}

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export const InputText: React.FC<Props> = ({ onClose }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchedDrink, setSearchedDrink] = useState<string>("");
    const [drinks, setDrinks] = useState<Cocktail[]>({} as Cocktail[]);
    const navigate = useNavigate();

    useEffect(() => {
        setIsMounted(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const searchDrink = async () => {
        try {
            const response = await cocktailFetch.get(
                `/search.php?s=${searchedDrink}`
            );
            const data = response.data.drinks;
            setDrinks(data);
            console.log(
                "eis os drinks prontos para serem renderizados: ",
                data
            );
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
       
            searchDrink();
        
    }, [searchedDrink]);

    const handleSearch = () => {
        if (drinks.length > 0) navigate("/results", { state: { drinks } });
    };

    return (
        <div
            onClick={onClose}
            className="absolute z-50 h-full w-screen flex justify-center items-center bg-black/85 "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute flex h-14 w-80 rounded-full text-center outline-none items-center bg-white px-9 text-principalTitleColor transition-all duration-500 ${
                    isMounted
                        ? "-translate-y-20 opacity-100"
                        : "translate-y-0 opacity-0"
                }`}
            >
                <input
                    ref={inputRef}
                    type="text"
                    className="w-full outline-none bg-white text-principalTitleColor"
                    placeholder="Search drink name..."
                    onChange={(e) => setSearchedDrink(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <IoSearchOutline
                    onClick={handleSearch}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};
