import { useNavigate } from "react-router-dom";
import { Highlight } from "../models/models";

const HighlightCard = ({ image, description, title }: Highlight) => {
  const navigate = useNavigate();
  const navigateToHighlightPage = () => navigate("highlight/" + title);
  return (
    <div className="rounded-lg shadow-lg mr-4 h-auto ">
      <img src={image} />
      <h2 className="mt-6 ml-6 mb-4 text-2x text-[#008080]">{title}</h2>
      <p className="text-base text-[#001A1A] mb-2 ml-6">{description}</p>
      <div className=" mr-6 ml-auto flex items-center justify-end">
        <button
          onClick={navigateToHighlightPage}
          className="w-10 h-10  bg-[#E6F2F2] rounded-[1.25rem] flex justify-center items-center "
        >
          <img src="./assets/arrow_forward.png" />
        </button>
      </div>
    </div>
  );
};

export default HighlightCard;
