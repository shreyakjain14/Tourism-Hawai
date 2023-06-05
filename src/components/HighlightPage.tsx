import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";
import { fetchHighlightData } from "../utils/services";

const HighlightPage = ({}) => {
  const { id }: any = useParams();
  const [data, setData]: any = useState({});

  useEffect(() => {
    fetchHighlightData(setData, id);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center underline">{id}</h1>
      {Object.keys(data).length === 0 && <h1>Loading. Please Wait...</h1>}
      {Object.keys(data).length !== 0 && (
        <div className="my-5 flex">
          <img className="h-2/3 w-1/3" src={data.image} />
          <div className="ml-10">
            <h2 className="text-xl mt-4 mb-4">Activities:</h2>
            {data.activities.map((activity: any, index: number) => (
              <div key={index} className="mx-4 my-2 rounded shadow-lg p-2">
                {index + 1}. {activity.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightPage;
