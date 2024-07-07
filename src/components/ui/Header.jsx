import PropTypes from "prop-types";

const Header = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center w-full my-12">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="max-w-[75ch] text-center mt-5">{description}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
