import React from 'react';
import Button from '../elements/Button';

const BrandIcon = () => {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-theme-blue text-4xl font-semibold">
        Racx
        <span className="text-theme-purple">studio</span>
      </p>
    </Button>
  );
}

export default BrandIcon;
