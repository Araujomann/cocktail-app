import React from "react";
interface Props {
  thumb: string;
}

export const DrinkCard: React.FC<Props> = ({ thumb }) => {
  return (
    <div className="bg-davyGray flex flex-col items-center w-64 h-64 rounded-md">
      <img className="w-full h-full rounded-md" src={thumb} />
    </div>
  );
};
