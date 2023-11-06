import React from 'react';
import './Button.css'

const Button = ({className,onClick,label}:{className:string,onClick:()=>void,label:string}) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
