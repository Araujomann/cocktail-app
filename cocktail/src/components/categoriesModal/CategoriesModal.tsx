import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cocktailFetch } from "../../services/global";
import { CategoryButton } from "../categoryButton/CategoryButton";

interface Props {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface CategoryProps {
  strCategory: string;
}

export const CategoriesModal: React.FC<Props> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const navigate = useNavigate();

  const listCategoriesFetch = async () => {
    try {
      const response = await cocktailFetch.get("/list.php?c=list");
      const drinks = response.data.drinks;
      setCategories(drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.name);
  };

  useEffect(() => {
    if (selectedCategory) {
      navigate(`/category`, {
        state: { category: selectedCategory },
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (isOpen) {
      listCategoriesFetch();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="absolute z-50 top-14 bg-jet/60  p-2 flex flex-col items-center justify-center rounded-2xl gap-1 left-2/4"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            name={category.strCategory}
            onClick={handleCategory}
          >
            {category.strCategory}
          </CategoryButton>
        ))}
      </div>
    </>
  );
};
