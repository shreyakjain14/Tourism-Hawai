import { useRouteError } from "react-router-dom";

const Error = () => {
  const err: any = useRouteError();
  console.log(err);
  return (
    <div className="text-center">
      <h1 className="text-red-900 text-2xl">Oops!!</h1>
      <h1 className="text-red-900 text-2xl">Something went wrong!!</h1>
      <h2 className="text-red-900 text-xl">
        {err.status + " :  " + err.statusText}
      </h2>
    </div>
  );
};

export default Error;
