import React from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import PropTypes from "prop-types";

const Structure = ({ navbar, children }) => {
  return (
    <Box>
      {navbar}
      <Container maxWidth="sm" style={{ height: "100vh" }}>
        {children}
      </Container>
    </Box>
  );
};

Structure.propTypes = {
  navbar: PropTypes.element,
};

export default Structure;
