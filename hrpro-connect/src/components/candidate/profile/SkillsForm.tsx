import TextField from "@/components/common/base/TextField";
import React, { useEffect } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import SkillPicker from "./SkillPicker";

interface UserSkillsValue extends FieldValues {
  name: string;
  yoe: number;
  lvl: number;
}

interface SkillsFormProps extends UseFormReturn<UserSkillsValue> {
  isOpen: boolean;
  formReset?: boolean;
}

const SkillsForm: React.FC<SkillsFormProps> = ({
  register,
  setValue,
  reset,
  formState: { errors },
  isOpen,
  formReset,
}) => {
  useEffect(() => reset(), [formReset]);

  return (
    <div className={`${isOpen ? "flex" : "hidden"} w-full`}>
      <TextField
        register={register("name", {
          required: "Please add name of the skill.",
        })}
        className="mr-1"
        label="Name"
        placeholder="Add Skill"
        error={!!errors.name}
        errorMsg={errors.name?.message}
      />
      <SkillPicker
        setValue={setValue}
        register={register("yoe")}
        variant="yoe"
        label="Years of experience"
        formReset={formReset ? formReset : false}
      />
      <SkillPicker
        setValue={setValue}
        register={register("lvl")}
        variant="lvl"
        label="Level"
        formReset={formReset ? formReset : false}
      />
    </div>
  );
};

export default SkillsForm;
