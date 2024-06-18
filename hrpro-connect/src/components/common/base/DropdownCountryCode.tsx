import React, { useEffect, useState } from "react";
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
  error?: boolean;
  errorMsg?: string;
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
  error,
  errorMsg,
}: DropDownProps<T>) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (option: Option) => {
    if (code) {
      setSelectedOption(option.dial_code + " " + option.emoji);
      setValue(name, option.dial_code as PathValue<T, Path<T>>); // Update the form value with dial_code
    } else {
      const label = getOptionCountry(option);
      setSelectedOption(label);
      setValue(name, label as PathValue<T, Path<T>>); // Update the form value
    }

    setCollapse(true); // Collapse the dropdown after selection
  };

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<Option[]>([]);

  useEffect(() => {
    const FilteredOptions = options.filter((option) =>
      option.name.includes(search)
    );
    setFilter(FilteredOptions);
  }, [search]);

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
      {error && <p className="p-1 text-sm text-red-600">*{errorMsg}</p>}
      <div
        className={`${
          collapse
            ? "hidden"
            : `grid w-full rounded-lg border p-1 bg-slate-100 shadow-md overflow-y-auto h-40 absolute`
        }`}
      >
        <input
          className="px-2 py-1 w-full border focus:outline-slate-200 text-sm placeholder:text-sm"
          type="text"
          placeholder="@Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        {options &&
          filter.map((option, i) => (
            <div
              className="w-full text-slate-500 text-sm px-3 py-1 hover:text-textDark cursor-pointer hover:shadow-sm hover:border hover:border-slate-100"
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
