import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";

const HighlightPage = ({}) => {
  const { id } = useParams();
  const [data, setData]: any = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://web-dev.dev.kimo.ai/v1/activities/" + id
        );
        const json = await result.json();
        setData(json);
      } catch (err) {
        console.error("error while fetching highlight details ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center">{id}</h1>
      {Object.keys(data).length === 0 && <h1>Loading. Please Wait...</h1>}
      {Object.keys(data).length !== 0 && (
        <div className="my-5">
          <img src={data.image} />
          <h2 className="text-xl mt-4 mb-4">Activities:</h2>
          {data.activities.map((activity: any, index: number) => (
            <div key={index} className="mx-4 my-2 rounded shadow-lg p-2">
              {index + 1}. {activity.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HighlightPage;
