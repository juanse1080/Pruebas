import React from "react";

//import styles

import AppBar from "../../components/AppBar";

const Structure = ({ children }) => {

  return<>
    <AppBar />
    {children}
    </>
};

export default Structure;
