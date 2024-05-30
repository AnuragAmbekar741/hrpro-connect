import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { CountryCodeOption } from "@/models";

export type Option = CountryCodeOption;

interface DropDownProps<T extends FieldValues> {
  label: string;
  width?: string;
  className?: string;
  placeholder?: string;
  options: Option[];
  getOptionCountry: (option: Option) => string;
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<T>;
  name: Path<T>;
  code?: boolean;
}

const DropdownCountryCode = <T extends FieldValues>({
  label,
  width = "w-full",
  className,
  placeholder,
  options,
  getOptionCountry,
  register,
  setValue,
  name,
  code,
}: DropDownProps<T>) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (option: Option) => {
    if (code) {
      setSelectedOption(option.dial_code);
      setValue(name, option.dial_code as PathValue<T, Path<T>>); // Update the form value with dial_code
    } else {
      const label = getOptionCountry(option);
      setSelectedOption(label);
      setValue(name, label as PathValue<T, Path<T>>); // Update the form value
    }

    setCollapse(true); // Collapse the dropdown after selection
  };

  const sortedOption = options
    .sort((a, b) => a.name.localeCompare(b.name))
    .reverse();

  return (
    <div className={`${width} ${className} relative`}>
      <label
        className="text-[15px] font-medium text-slate-800 p-1 my-2"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="w-full flex justify-between rounded-md relative">
        <input
          readOnly
          className="text-sm  w-full rounded-md text-textDark bg-slate-100 py-[9px] px-2 placeholder:text-textLight focus:outline-slate-200 cursor-pointer"
          placeholder={"@" + placeholder}
          value={selectedOption}
          {...(register && register)}
        />
        <DownOutlined
          className="text-sm text-slate-600 absolute right-2 top-3"
          onClick={() => setCollapse(!collapse)}
        />
      </div>
      <div
        className={`${
          collapse
            ? "hidden"
            : `flex flex-col justify-center items-start w-full h-36 overflow-y-scroll ml-1 pt-7 rounded-lg absolute border p-1 bg-slate-100 shadow-md`
        }`}
      >
        {options &&
          sortedOption.map((option, i) => (
            <div
              className="w-full text-slate-500 text-md px-3 py-1 hover:text-textDark cursor-pointer hover:shadow-sm hover:border hover:border-slate-100"
              onClick={() => handleOptionClick(option)}
              key={i}
            >
              {getOptionCountry(option)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropdownCountryCode;
