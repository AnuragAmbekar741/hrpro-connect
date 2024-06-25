import React, { useState } from "react";
import { DownOutlined, SaveFilled } from "@ant-design/icons";
import TextField from "../../common/base/TextField";
import TextArea from "../../common/base/TextArea";
import { useForm, SubmitHandler } from "react-hook-form";
import Dropdown from "../../common/base/Dropdown";
import { EmploymentType } from "@/constants";

interface WorkExpFormProps {
  index: number;
  removeForm: (index: number) => void;
  
}

export interface WorkExpFormValues {
  companyName: string;
  designation: string;
  industry: string;
  companyUrl: string;
  employmentType: string;
  country: string;
  startDate: string;
  endDate: string;
  dutiesAndResponsiblities: string;
}

const WorkExpForm: React.FC<WorkExpFormProps> = ({index, removeForm }) => {
  const [collapse, setCollapse] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkExpFormValues>();
  const onSubmit = (data: WorkExpFormValues) => console.log(data);
  const getOptionLabel = (option: any): string => option.label;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full grid border p-2 rounded-md bg-gray-50">
        <div
          className={`flex justify-between items-center py-2 px-2 ${
            collapse ? "" : "border-slate-100 rounded-md bg-slate-50 shadow-sm"
          }`}
        >
          <p className="text-lg">Workexp1</p>
          <div>
            {!collapse && (
              <>
              <button
                className="text-sm text-primary hover:bg-rose-50 rounded-md p-2 mx-2" type="button"
                onClick={() => {
                  
                  removeForm(index)}
                }
              >
                <SaveFilled className="mx-1" />
                Remove
              </button>
              <button
                className="text-sm text-primary hover:bg-rose-50 rounded-md p-2 mx-2"
                type="submit"
              >
                <SaveFilled className="mx-1" />
                Save
              </button>
              </>
              
            )}

            <DownOutlined onClick={() => setCollapse(!collapse)} />
          </div>
        </div>
        <div className={`${collapse ? "hidden" : "grid gap-2"}`}>
          <div className="flex py-1">
            <TextField
              placeholder="Company name"
              label="Company name"
              register={register("companyName", {
                required: "Company name is required",
              })}
              error={!!errors.companyName}
              errorMsg={errors.companyName?.message}
            />
            <TextField
              placeholder="Designation"
              label="Designation"
              register={register("designation", {
                required: "Company name is required",
              })}
              className="mx-2"
              error={!!errors.designation}
              errorMsg={errors.designation?.message}
            />
            <TextField
              placeholder="Industry"
              label="Industry"
              register={register("industry", {
                required: "Industry is required",
              })}
              error={!!errors.industry}
              errorMsg={errors.industry?.message}
            />
          </div>
          <div className="flex py-1">
            <Dropdown
              label="Employment type"
              register={register("employmentType", {
                required: "Employment type is required",
              })}
              className="w-1/3"
              getOptionLabel={getOptionLabel}
              placeholder="Employment type"
              options={EmploymentType}
              setValue={setValue}
              name="employmentType"
              error={!!errors.employmentType}
              errorMsg={errors.employmentType?.message}
            />
            <TextField
              placeholder="Company url"
              label="Company url"
              className="ml-2"
              register={register("industry", {
                required: "Industry is required",
              })}
              error={!!errors.industry}
              errorMsg={errors.industry?.message}
            />
          </div>
          <div className="flex py-1">
            <TextField
              placeholder="Country/Region"
              label="Country/Region"
              register={register("country", {
                required: "Country/Region is required",
              })}
              error={!!errors.country}
              errorMsg={errors.country?.message}
            />
            <TextField
              placeholder="Start date"
              label="Start date"
              className="mx-2"
              register={register("startDate", {
                required: "Start date is required",
              })}
              error={!!errors.startDate}
              errorMsg={errors.startDate?.message}
            />
            <TextField
              placeholder="End date"
              label="End date"
              register={register("endDate", {
                required: "End date is required",
              })}
              error={!!errors.endDate}
              errorMsg={errors.endDate?.message}
            />
          </div>
          <div className="flex py-1">
            <TextArea
              placeholder="Duties and Responsibilities"
              label="Duties and Responsibilities"
              register={register("dutiesAndResponsiblities", {
                required: "Duties and Responsibilities are required",
              })}
              error={!!errors.dutiesAndResponsiblities}
              errorMsg={errors.dutiesAndResponsiblities?.message}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default WorkExpForm;
