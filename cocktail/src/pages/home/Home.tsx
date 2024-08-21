import { InputText, Slider } from "../../components";
import { Button } from "../../components/button/Button";
import { useRef, useState } from "react";
import { CategoriesModal } from "../../components";
import { IoMdArrowDropright } from "react-icons/io";

export const Home:React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpenModal = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setModalOpen(false);
    }, 100);
  };

  const handleOpenInput = () => {
    setInputOpen(true);
  };

  const handleCloseInput = () => {
    setInputOpen(false);
  };

  return (
    <div className=" relative flex flex-col w-screen h-screen overflow-hidden">
      <div className="bg-bgPage flex flex-col place-content-center w-full md:h-80  p-10 gap-10 md:gap-4">
        <div className="flex flex-col items-center justify-center md:gap-1">
          <h1 className="text-5xl md:text-6xl font-serif text-principalTitleColor mt-1 whitespace-nowrap">
            Cocktail Genius
          </h1>
          <h2 className="md:text-xl md:text-l text-secondTextColor font-sans text-center">
            Choose a category or select by name.
          </h2>
        </div>

        <div className="flex flex-col w-36 gap-2 mx-auto my-6">
          <Button
            name="Categories"
            onMouseEnter={handleOpenModal}
            onMouseLeave={handleCloseModal}
            icon={<IoMdArrowDropright />}
          />
          <Button name="Name" action={handleOpenInput} />
        </div>
        <CategoriesModal
          isOpen={modalOpen}
          onMouseEnter={handleOpenModal}
          onMouseLeave={handleCloseModal}
        />
      </div>
      {inputOpen && <InputText onClose={handleCloseInput} />}

      <Slider />
    </div>
  );
};
