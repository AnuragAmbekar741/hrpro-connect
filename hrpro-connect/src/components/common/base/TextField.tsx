import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: string;
  width?: string;
  className?: string;
  error?: boolean;
  errorMsg?: string;
  register?: ReturnType<UseFormRegister<FieldValues>>;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    label,
    placeholder,
    type = "text",
    width = "w-full",
    className,
    error,
    errorMsg,
    register,
  } = props;
  return (
    <div className={`${width} ${className}`}>
      <label
        className="text-[15px] font-medium text-slate-800 p-1 my-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={`@${placeholder ? placeholder : ""}`}
        className={`custom-input px-3 py-2`}
        {...(register && register)}
      />
      {error && <p className="p-1 text-sm text-red-600">*{errorMsg}</p>}
    </div>
  );
};

export default TextField;
