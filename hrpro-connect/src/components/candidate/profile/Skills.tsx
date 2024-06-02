import FormContainer from "@/components/common/profile/FormContainer";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { UserSkillsValue } from "@/models/user";
import SkillsForm from "./SkillsForm";
import toast, { Toaster } from "react-hot-toast";

interface SkillsProps {
  id: string;
  isOpen: string;
  title: string;
}

const Skills: React.FC<SkillsProps> = ({ id, isOpen, title }) => {
  const onSubmit: SubmitHandler<UserSkillsValue> = (data) => {
    console.log(data);
    if (
      skillList.filter((ele) =>
        ele.name.toLocaleLowerCase().includes(data.name.toLocaleLowerCase())
      ).length === 0
    ) {
      setSkillList([...skillList, data]);
      setFormReset(!formReset);
    } else {
      toast.error("Skill already added!");
    }
  };

  const [skillList, setSkillList] = useState<UserSkillsValue[]>([]);

  const [formReset, setFormReset] = useState<boolean>(false);

  return (
    <>
      <FormContainer
        title={title}
        id={id}
        isOpen={isOpen}
        onSubmit={onSubmit}
        FormComponent={SkillsForm}
        list={skillList}
        setList={setSkillList}
        formReset={formReset}
        addSkillBtn
      />
      <Toaster />
    </>
  );
};

export default Skills;
