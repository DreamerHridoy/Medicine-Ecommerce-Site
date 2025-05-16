import React from "react";
import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 my-8">
      <p className="text-amber-500 mb-2 text-base md:text-lg font-medium tracking-wide">
        --- {subHeading} ---
      </p>
      <h3 className="text-2xl md:text-3xl uppercase border-y-4 py-4 font-bold">
        {heading}
      </h3>
    </div>
  );
};
SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
