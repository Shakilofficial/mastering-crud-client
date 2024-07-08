import { Link, useRouteError } from "react-router-dom";
import errorGif from "../../assets/images/404-Anime.gif";

const Error = () => {
  const { error } = useRouteError();
  return (
    <div className="flex items-center h-screen p-16">
      <div className="container flex flex-col items-center justify-center mx-auto mb-20">
        <div>
          <img src={errorGif} alt="" />
        </div>
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold mb-8">{error?.message}</p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-green-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
