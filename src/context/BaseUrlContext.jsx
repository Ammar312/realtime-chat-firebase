import React, { createContext, useState } from "react";
export const BaseUrlContext = createContext();

export const BaseUrlContextProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <BaseUrlContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </BaseUrlContext.Provider>
  );
};
