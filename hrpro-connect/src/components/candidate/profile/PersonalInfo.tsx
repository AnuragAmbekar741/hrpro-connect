// components/PersonalInfo.tsx
import React from "react";
import { SubmitHandler } from "react-hook-form";
import FormContainer from "../../common/profile/FormContainer";
import PersonalInfoForm, {
  PersonalInfoValues,
} from "../../common/profile/PersonalInfoForm";

interface PersonalInfoProps {
  title: string;
  id: string;
  isOpen: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ title, id, isOpen }) => {
  const onSubmit: SubmitHandler<PersonalInfoValues> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer<PersonalInfoValues>
      title={title}
      id={id}
      isOpen={isOpen}
      onSubmit={onSubmit}
      FormComponent={PersonalInfoForm}
    />
  );
};

export default PersonalInfo;
