import React from "react";
export interface Props {
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button type="button" className="bg-red-500 text-blue-500 text-2xl">
      {children}
    </button>
  );
};
