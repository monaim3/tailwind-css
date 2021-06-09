import React from 'react';

const Footer = ({
  ...otherProps
}) => {
  return (
    <footer className="bg-white">
      <div className="w-full max-w-7xl  py-14 text-center">
        <span className="text-center">
          COPYRIGHT © 2021
        </span>
      </div>
    </footer>
  );
};

export default Footer;
