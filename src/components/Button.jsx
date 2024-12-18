import React from "react";

export const Button = ({children}) => {
  return (
    <button className="bg-yellow-400 text-white px-6 py-2 font-semibold hover:bg-red-600">
      {children}
    </button>
  );
};
