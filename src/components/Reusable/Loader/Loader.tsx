import React from 'react';
import "./Loader.scss"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader: React.FC = () => {
  return (
    <div className='loading-container'><AiOutlineLoading3Quarters className="loader"/></div>
  );
};

export default Loader;
