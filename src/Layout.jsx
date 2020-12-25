import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "./components/index";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>
      <section>{children}</section>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
