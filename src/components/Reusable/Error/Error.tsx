import React from 'react';
import "./Error.scss"
import { MdOutlineReportGmailerrorred } from "react-icons/md";
interface ButtonProps {
  children: React.ReactNode;
}

const ErrorNotification: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className='error-container'>
        <MdOutlineReportGmailerrorred className='icon' />
        <p>{children}</p>
    </div>
  );
};

export default ErrorNotification;

