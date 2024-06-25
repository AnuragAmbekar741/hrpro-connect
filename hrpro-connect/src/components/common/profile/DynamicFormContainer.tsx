import React, { ReactNode, useState } from "react";
import { SaveFilled } from "@ant-design/icons";
import { WorkExpFormValues } from "../../candidate/profile/WorkExpForm";

interface DynamicFormContainerProps {
  isOpen: string;
  id: string;
  title: string;
  btnTitle: string;
  formComponent: React.FC<{ index: number; removeForm: (index: number) => void }>;
}

interface Form {
  id: number;
}

const DynamicFormContainer: React.FC<DynamicFormContainerProps> = ({
  isOpen,
  id,
  title,
  btnTitle,
  formComponent: FormComponent,
}) => {
  const [forms, setForms] = useState<Form[]>([{ id: 1 }]);

  const addForm = () => {
    const newForm: Form = { id: Date.now() }; 
    setForms([...forms, newForm]);
  };

  const removeForm = (id: number) => {
    setForms(forms.filter((form) => form.id !== id));
  };
  console.log(forms);
  return (
    <div className="w-full py-1 px-5 rounded-md border">
      <div className="flex justify-between items-center my-2">
        <p className="text-2xl font-medium">{title}</p>
        {isOpen === id && (
          <div>
            <button
              type="submit"
              className="text-md font-light text-white bg-primary px-4 py-2 rounded-md"
            >
              <SaveFilled className="text-sm" /> Save
            </button>
          </div>
        )}
      </div>{" "}
      <div className={`${isOpen === id ? "grid gap-2" : "hidden"}`}>
        {forms.map((form) => (
          <FormComponent key={form.id} index={form.id} removeForm={removeForm} />
        ))}
        <button className="custom-button-outlined" onClick={addForm}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default DynamicFormContainer;



