import React from 'react';
import Button from '../elements/Button';

export default function BrandIcon() {
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
