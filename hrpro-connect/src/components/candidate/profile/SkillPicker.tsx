import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  Path,
  PathValue,
} from "react-hook-form";
import React, { useEffect, useState } from "react";

interface SkillPicker<T extends FieldValues> {
  label: string;
  width?: string;
  variant: "lvl" | "yoe";
  register?: ReturnType<UseFormRegister<FieldValues>>;
  setValue: UseFormSetValue<T>;
  formReset: boolean;
}

const SkillPicker = <T extends FieldValues>({
  label,
  width = "w-full",
  variant,
  setValue,
  formReset,
}: SkillPicker<T>) => {
  const [level, setLevel] = useState(0);
  const handleClick = (val: number) => {
    setLevel(val);
    setValue(variant as Path<T>, val as PathValue<T, Path<T>>);
  };
  useEffect(() => setLevel(0), [formReset]);
  return (
    <div className={`${width}`}>
      <div className="h-1/3 px-2 text-sm font-medium">{label}</div>
      <div className="h-2/3 flex pt-1">
        <div
          onClick={() => handleClick(1)}
          className={`w-1/4 pt-2 ${
            level > 0
              ? variant === "lvl"
                ? "bg-green-200 border border-green-400"
                : "bg-yellow-100 border border-yellow-200"
              : "bg-slate-100 border border-slate-200"
          } rounded-lg mx-1 text-center text-sm font-semibold hover:scale-105 transition delay-150 cursor-pointer`}
        >
          {variant === "lvl" ? "1" : "1-2"}
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`w-1/4 pt-2 ${
            level > 1
              ? variant === "lvl"
                ? "bg-green-300 border border-green-400"
                : "bg-yellow-200 border border-yellow-200"
              : "bg-slate-100 border border-slate-200"
          } rounded-lg mx-1 text-center text-sm font-semibold hover:scale-105 transition delay-150 cursor-pointer`}
        >
          {variant === "lvl" ? "2" : "3-5"}
        </div>
        <div
          onClick={() => handleClick(3)}
          className={`w-1/4 pt-2 ${
            level > 2
              ? variant === "lvl"
                ? "bg-green-400 border border-green-400"
                : "bg-yellow-300 border border-yellow-200"
              : "bg-slate-100 border border-slate-200"
          } rounded-lg mx-1 text-center text-sm font-semibold hover:scale-105 transition delay-150 cursor-pointer`}
        >
          {variant === "lvl" ? "3" : "5-10"}
        </div>
        <div
          onClick={() => handleClick(4)}
          className={`w-1/4 pt-2 ${
            level > 3
              ? variant === "lvl"
                ? "bg-green-500 border border-green-400"
                : "bg-yellow-400 border border-yellow-200"
              : "bg-slate-100 border border-slate-200"
          } rounded-lg mx-1 text-center text-sm font-semibold hover:scale-105 transition delay-150 cursor-pointer`}
        >
          {variant === "lvl" ? "4" : "10+"}
        </div>
      </div>
    </div>
  );
};

export default SkillPicker;
