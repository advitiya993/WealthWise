import React from "react";

const MainLayout = ({ children }) => {
  //in future we can add a sidebar or navbar here
  //this layout will be used for the pages under the (main) folder those are the children
  return <div className="container mx-auto my-32">{children}</div>;
};

export default MainLayout;