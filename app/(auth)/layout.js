import React from 'react';

const AuthLayout = ({children}) => {
  return (
    //centre the page content
    <div className="flex justify-center pt-40">{children}</div>
  );
};

export default AuthLayout;