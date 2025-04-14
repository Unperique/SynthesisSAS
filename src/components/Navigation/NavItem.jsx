import React from 'react';

const NavItem = ({ link, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={`px-3 py-2 text-base font-medium ${className}`}
    >
      {children}
    </a>
  );
};

export default NavItem;