// components/FormContainer.tsx
import React from "react";
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";
import { SaveFilled, PlusCircleOutlined } from "@ant-design/icons";
import { UserSkillsValue } from "@/models/user";

interface FormContainerProps<T extends FieldValues> {
  title: string;
  id: string;
  isOpen: string;
  onSubmit: SubmitHandler<T>;
  FormComponent: React.FC<
    UseFormReturn<T> & { isOpen: boolean } & { formReset?: boolean }
  >;
  list?: UserSkillsValue[];
  setList?: React.Dispatch<React.SetStateAction<UserSkillsValue[]>>;
  formReset?: boolean;
  addSkillBtn?: boolean;
}

const FormContainer = <T extends FieldValues>({
  title,
  id,
  isOpen,
  onSubmit,
  FormComponent,
  list,
  formReset,
  setList,
  addSkillBtn,
}: FormContainerProps<T>) => {
  const methods = useForm<T>();
  return (
    <div className="w-full py-3 px-5 rounded-md border">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium">{title}</p>
          {isOpen === id && (
            <div>
              {addSkillBtn && (
                <button
                  type="submit"
                  className="text-md font-light text-primary hover:bg-red-50  mx-2 px-3 py-[7px] rounded-md"
                >
                  <PlusCircleOutlined className="text-md" /> Add Skill
                </button>
              )}
              <button
                type="submit"
                className="text-md font-light text-white bg-primary px-4 py-2 rounded-md"
              >
                <SaveFilled className="text-sm" /> Save
              </button>
            </div>
          )}
        </div>
        <FormComponent
          {...methods}
          isOpen={isOpen === id}
          formReset={formReset}
        />
      </form>
      {list &&
        list.map((item) => (
          <div
            className={`w-full flex justify-between py-1 px-2 rounded-md border my-3 text-sm ${
              item.yoe < 1
                ? "bg-rose-50"
                : item.yoe < 2
                ? "bg-orange-100"
                : item.yoe < 3
                ? "bg-yellow-100"
                : "bg-green-100"
            }`}
          >
            <div className="flex justify-between py-2 w-2/3">
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.yoe + ` Years of Experience`}</p>
              <p className="text-center">{`Level ` + item.lvl}</p>
            </div>
            <button
              className="w-1/8 border border-primary px-3 my-1 text-primary rounded-md"
              onClick={() =>
                setList?.(list.filter((ele) => ele.name !== item.name))
              }
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default FormContainer;
