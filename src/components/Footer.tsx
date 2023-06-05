import { useEffect, useState } from "react";
import {
  CATEGORIES,
  GUIDE_NAME,
  GUIDE_SINCE,
  IMG_ROOT,
} from "../utils/constants";
import CategoriesCard from "./CategoriesCard";

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await fetch("https://web-dev.dev.kimo.ai/v1/categories");
        const json = await result.json();
        setCategories(json);
        console.log(categories);
      } catch (err) {
        console.error("Error while fetching highlights ", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mt-20 bg-[#E6F2F2] pt-10 pb-20 flex mx-auto max-md:flex-col ">
      <div className="w-1/4 max-md:mx-auto md:ml-auto max-md:w-3/4 ">
        <h2 className="text-base text-[#001A1A] mb-4">Categroies</h2>
        {categories.map((category, index) => (
          <CategoriesCard key={index} category={category} />
        ))}
      </div>
      <div className="md:ml-8 md:mr-auto max-md:mx-auto  max-md:mt-10  max-md:w-3/4">
        <h2 className="text-base text-[#001A1A] mb-4">Travel Guide</h2>
        <div className="bg-white rounded-lg p-6 flex  max-md:mx-auto">
          <div>
            <div>{GUIDE_NAME}</div>
            <div>Guide since {GUIDE_SINCE}</div>
            <button className="mt-10 p-4 rounded-lg border border-[#008080] text-[#008080] ">
              Contact
            </button>
          </div>
          <div>
            <img className="ml-48" src={IMG_ROOT + "user.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
