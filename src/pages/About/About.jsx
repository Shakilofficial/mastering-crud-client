import about from "../../assets/images/about.svg";
const About = () => {
  return (
    <div className="sm:flex items-center mt-12">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src={about} />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 font-bold text-xl border-b-2 border-green-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-green-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
