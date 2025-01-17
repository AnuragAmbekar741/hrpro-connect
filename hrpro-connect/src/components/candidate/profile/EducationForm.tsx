import React, { useState } from "react";
import { DownOutlined, SaveFilled } from "@ant-design/icons";
import TextField from "../../common/base/TextField";
import TextArea from "../../common/base/TextArea";
import { useForm, SubmitHandler } from "react-hook-form";
import Dropdown from "../../common/base/Dropdown";
import { EmploymentType } from "@/constants";

export interface EducationFormValues {
  institutionName: string;
  degree: string;
  degreeType: string;
  country: string;
  startDate: string;
  endDate: string;
  learningDescription: string;
}

const EducationForm = () => {
  const [collapse, setCollapse] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationFormValues>();
  const onSubmit = (data: EducationFormValues) => console.log(data);
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
              <button
                className="text-sm text-primary hover:bg-rose-50 rounded-md p-2 mx-2"
                type="submit"
              >
                <SaveFilled className="mx-1" />
                Save
              </button>
            )}

            <DownOutlined onClick={() => setCollapse(!collapse)} />
          </div>
        </div>
        <div className={`${collapse ? "hidden" : "grid gap-2"}`}>
          <div className="flex py-1">
            <TextField
              placeholder="Institution name"
              label="Institution name"
              register={register("institutionName", {
                required: "Institution name is required",
              })}
              error={!!errors.institutionName}
              errorMsg={errors.institutionName?.message}
            />
            <TextField
              placeholder="Degree"
              label="Degree"
              className="mx-2"
              register={register("degree", {
                required: "Degree is required",
              })}
              error={!!errors.degree}
              errorMsg={errors.degree?.message}
            />
            {/* <TextField
              placeholder="Employment type"
              label="Employment type"
              register={register("employmentType", {
                required: "Employment type is required",
              })}
              error={!!errors.employmentType}
              errorMsg={errors.employmentType?.message}
            /> */}
            <Dropdown
              label="Degree type"
              register={register("degreeType", {
                required: "Degree type is required",
              })}
              getOptionLabel={getOptionLabel}
              placeholder="Degree type"
              options={EmploymentType}
              setValue={setValue}
              name="degreeType"
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
              placeholder="Learning's description"
              label="Learning's description"
              register={register("learningDescription", {
                required: "Learning's description",
              })}
              error={!!errors.learningDescription}
              errorMsg={errors.learningDescription?.message}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EducationForm;
