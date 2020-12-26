import React from "react";

import PropTypes from "prop-types";

const ProjectDescription = ({ children, descriptionTitle }) => (
  <article>
    <header>
      <h2>{descriptionTitle}</h2>
    </header>
    <article className="content">{children}</article>
  </article>
);

ProjectDescription.propTypes = {
  children: PropTypes.element.isRequired,
  descriptionTitle: PropTypes.string.isRequired,
};

export default ProjectDescription;
