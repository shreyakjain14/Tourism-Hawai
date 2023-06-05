import { Highlight } from "../models/models";

const HighlightCard = ({ imgUrl, description, heading }: Highlight) => (
  <div className="rounded-lg shadow-lg mr-4 w-[368px] ">
    <img src={"./assets/" + imgUrl} />
    <h2 className="mt-6 ml-6 mb-4 text-2x text-[#008080]">{heading}</h2>
    <p className="text-base text-[#001A1A] mb-2 ml-6">{description}</p>
    <div className=" mr-6 ml-auto flex items-center justify-end">
      <button className="w-10 h-10  bg-[#E6F2F2] rounded-[1.25rem] flex justify-center items-center ">
        <img src="./assets/arrow_forward.png" />
      </button>
    </div>
  </div>
);

export default HighlightCard;
