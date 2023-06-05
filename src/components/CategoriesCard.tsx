import { IMG_ROOT } from "../utils/constants";

const CategoriesCard = ({ category }: any) => {
  return (
    <button className="flex justify-between items-center p-6 bg-white text-base text-[#001A1A] mb-2 rounded-lg w-full">
      {category}
      <img src={IMG_ROOT + "arrow_forward.png"} />
    </button>
  );
};

export default CategoriesCard;
