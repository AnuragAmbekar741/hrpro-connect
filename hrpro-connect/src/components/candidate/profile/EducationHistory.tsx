import React from "react";
import DynamicFormContainer from "@/components/common/profile/DynamicFormContainer";
import EducationForm from "./EducationForm";

interface EducationHistoryProps {
  id: string;
  isOpen: string;
  title: string;
}

const EducationHistory: React.FC<EducationHistoryProps> = ({
  id,
  isOpen,
  title,
}) => {
  return (
    <DynamicFormContainer
      id={id}
      title={title}
      isOpen={isOpen}
      form={<EducationForm />}
      btnTitle="Add Education"
    />
  );
};

export default EducationHistory;
